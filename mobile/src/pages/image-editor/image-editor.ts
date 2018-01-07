import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-image-editor',
  templateUrl: 'image-editor.html',
})
export class ImageEditorPage {

  @ViewChild("controlBoard") controlBoard: ElementRef;  
  @ViewChild("viewMask") viewMask: ElementRef;
  @ViewChild("viewPort")  viewPort: ElementRef;
  @ViewChild("imagePort") imagePort: ElementRef;

  winX : number;
  winY : number;
  winH : number;
  winW : number;
  winC : number;
  winM : number;

  vpoX : number;
  vpoY : number;
  vpoH : number;
  vpoW : number;
  vpoC : number;
  vpoM : number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImageEditorPage');
  }

  ionViewDidEnter() {
    let controlBoard = this.controlBoard.nativeElement;
    let viewMask = this.viewMask.nativeElement;
    let imagePort = this.imagePort.nativeElement;

    this.winW = controlBoard.clientWidth;
    this.winH = controlBoard.clientHeight;

    viewMask.style.width = this.winW + 'px';
    viewMask.style.height = this.winH + 'px';

    this.vpoH = this.vpoW = this.viewPort.nativeElement.clientWidth;
    this.viewPort.nativeElement.width = this.vpoW;
    this.viewPort.nativeElement.height = this.vpoH;
    this.vpoX = this.viewPort.nativeElement.offsetLeft;
    this.vpoY = this.viewPort.nativeElement.offsetTop;
    this.vpoC = Math.ceil(this.vpoX + ( this.vpoW / 2 ));
    this.vpoM = Math.ceil(this.vpoY + ( this.vpoH / 2 ));
    console.log({ vpoX:this.vpoX, vpoY:this.vpoY, vpoW:this.vpoW, vpoH:this.vpoH, vpoC:this.vpoC, vpoM:this.vpoM })

    imagePort.style.width = this.winW + 'px';
    imagePort.style.height = this.winH + 'px';
  }
}
