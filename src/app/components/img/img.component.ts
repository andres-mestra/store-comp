import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnInit, OnChanges, AfterViewInit, OnChanges, OnDestroy
{
  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imgDefault: string = './assets/images/default.png';

  constructor() {
    //before render
    //NO async -- once time
    console.log('Constructor', 'imgValue', this.img);
  }

  ngOnChanges() {
    //before render
    // change inputs -- times
    console.log('OnChanges', 'imgValue', this.img);
  }

  ngOnInit(): void {
    //before render
    // async- fetch, promises -- once time
    console.log('OnInit', 'imgValue', this.img);
  }

  ngAfterViewInit() {
    //after render
    //handler children
    console.log('AfterViewInit');
  }

  ngOnDestroy() {
    //delete component
    console.log('OnDestroy');
  }

  imgError() {
    this.img = this.imgDefault;
  }

  imgLoaded() {
    console.log('Log hijo');
    this.loaded.emit(this.img);
  }
}
