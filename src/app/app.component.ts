import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ACME Product Management ';

  name: String = 'venkatesh';

  show: Boolean = true;

  showName(): void {
    this.show = false;
 }

}
