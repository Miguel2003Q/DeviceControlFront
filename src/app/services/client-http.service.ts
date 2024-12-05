import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

interface RequestOptions {
  headers?: HttpHeaders;
  params?: HttpParams | { [param: string]: string | string[] };
  body?: any;
}

@Injectable({
  providedIn: 'root'
})
export class ClientHttpService {

  private readonly defaultHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  /**
   * Realiza una petición GET
   * @param url URL del endpoint
   * @param options Opciones de la petición (headers, params)
   * @returns Observable con la respuesta
   */
  get<T>(url: string, options: RequestOptions = {}): Observable<T> {
    const httpOptions = {
      headers: options.headers || this.defaultHeaders,
      params: options.params
    };

    return this.http.get<T>(url, httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  /**
   * Realiza una petición POST
   * @param url URL del endpoint
   * @param body Cuerpo de la petición
   * @param options Opciones de la petición (headers, params)
   * @returns Observable con la respuesta
   */
  post<T>(url: string, body: any, options: RequestOptions = {}): Observable<T> {
    const httpOptions = {
      headers: options.headers || this.defaultHeaders,
      params: options.params
    };

    return this.http.post<T>(url, body, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Maneja los errores de las peticiones HTTP
   * @param error Error HTTP
   * @returns Observable con el error
   */
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Un error ha ocurrido';

    if (error.error instanceof ErrorEvent) {
      // Error del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del servidor
      errorMessage = `Código: ${error.status}, ` +
        `Mensaje: ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }

  /**
   * Crea HttpParams a partir de un objeto
   * @param params Objeto con los parámetros
   * @returns HttpParams
   */
  private createHttpParams(params: { [key: string]: string | string[] }): HttpParams {
    let httpParams = new HttpParams();
    for (const key of Object.keys(params)) {
      const value = params[key];
      if (Array.isArray(value)) {
        value.forEach(item => {
          httpParams = httpParams.append(key, item);
        });
      } else {
        httpParams = httpParams.set(key, value);
      }
    }
    return httpParams;
  }
}
