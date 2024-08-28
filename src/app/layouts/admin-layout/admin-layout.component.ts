import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [],
  templateUrl: './admin-layout.component.html',
  styles: ``
})
export class AdminLayoutComponent {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    alert("Entre")
  }
}
