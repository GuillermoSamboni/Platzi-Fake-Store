import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './public-layout.component.html',
  styles: ``
})
export class PublicLayoutComponent {

}
