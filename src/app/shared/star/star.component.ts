import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';



@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,OnChanges {

  @Input() rating : number;
  @Output() notify : EventEmitter <string>  = new EventEmitter<string>();
  starWidth : number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){

    this.starWidth = this.rating * 86/5;
  }

  genereteEvent(){

    this.notify.emit('event message generated from nested component');
  }

}
