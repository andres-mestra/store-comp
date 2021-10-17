import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnInit, OnChanges, AfterViewInit, OnChanges, OnDestroy
{
  img: string = '';

  @Input() alt: string = 'image';
  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    //console.log('Change img =>', this.img);
    //code ..
  }
  @Output() loaded = new EventEmitter<string>();
  imgDefault: string = './assets/images/default.png';
  //counter = 0;
  //counterFn: number | undefined;

  constructor() {
    //before render
    //NO async -- once time
    //console.log('Constructor', 'imgValue', this.img);
  }

  ngOnChanges(change: SimpleChanges) {
    //before render
    // change inputs -- times
    //console.log('OnChanges', 'imgValue', this.img);
    //Cuando cualquier input cambia
    //console.log('Change', change);
  }

  ngOnInit(): void {
    //before render
    // async- fetch, promises -- once time
    /* console.log('OnInit', 'imgValue', this.img);
    this.counterFn = window.setInterval(() => {
      this.counter += 1;
      console.log('Run counter');
    }, 1000); */
  }

  ngAfterViewInit() {
    //after render
    //handler children
    //console.log('AfterViewInit');
  }

  ngOnDestroy() {
    //delete component
    //console.log('OnDestroy');
    //window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imgDefault;
  }

  imgLoaded() {
    //console.log('Log hijo');
    this.loaded.emit(this.img);
  }
}
