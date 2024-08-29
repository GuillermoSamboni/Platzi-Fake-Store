import { Component, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error-no-auth',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './error-no-auth.component.html',
  styles: ``
})
export default class ErrorNoAuthComponent {
  cancelMessage = output<boolean>()

  onCancelMessage() {
    this.cancelMessage.emit(true)
  }
}
