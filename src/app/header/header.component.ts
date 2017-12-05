import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName: string = 'Test';

  constructor() { }

  ngOnInit() {
  }

  /*setMessage(event:Event){

    this.message = (<HTMLInputElement>event.target).value;
  }
*/

  setUserName() {

    this.userName = '' ;
  }


}
