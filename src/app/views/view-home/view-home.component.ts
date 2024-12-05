import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { HomeComponent } from '../../components/home/home.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-view-home',
  imports: [NavComponent, HomeComponent, FooterComponent],
  templateUrl: './view-home.component.html',
  styleUrl: './view-home.component.css'
})
export class ViewHomeComponent {

}
