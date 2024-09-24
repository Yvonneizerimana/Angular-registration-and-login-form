import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from "./pages/footer/footer.component";
import { HeaderComponent } from "./pages/header/header.component";
import { LinksComponent } from "./pages/links/links.component";
import { BodyComponent } from "./pages/body/body.component";
import { RegistrationComponent } from "./pages/registration/registration.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsComponent, HomeComponent, FooterComponent, HeaderComponent, LinksComponent, BodyComponent, RegistrationComponent],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  
}
