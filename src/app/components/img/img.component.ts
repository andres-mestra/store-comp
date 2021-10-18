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
  // eslint-disable-next-line @angular-eslint/no-input-rename
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

  imgError() {
    this.img = this.imgDefault;
  }

  imgLoaded() {
    //console.log('Log hijo');
    this.loaded.emit(this.img);
  }
}
