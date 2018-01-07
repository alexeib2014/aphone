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
  @ViewChild("image") image: ElementRef;

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

  imageX : number = 0;
  imageY : number = 0;
  touchX : number = -100;
  touchY : number = -100;

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
    imagePort.onclick = function(){ console.log('click') }

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

  onMouseMove(event) {
  	// console.log(event)
  	if (event.buttons) {
  		this.imageX += event.movementX;
  		this.imageY += event.movementY;
  		this.image.nativeElement.style.marginLeft = this.imageX + 'px';
  		this.image.nativeElement.style.marginTop = this.imageY + 'px';
  	}
  }

  onTouchMove(event) {
	//console.log(event)
	let touchX = event.changedTouches[0].clientX;
	let touchY = event.changedTouches[0].clientY;
	try {
		touchX = event.changedTouches[1].clientX;
		touchY = event.changedTouches[1].clientY;
	} catch(e) {
		return;
	}
	let movementX = touchX - this.touchX;
	let movementY = touchY - this.touchY;
	if ( this.touchX >= 0 && this.touchY >= 0) {
		 // movementX*movementX > 20*20 &&
	     // movementX*movementX < 100*100 &&
	     // movementY*movementY > 20*20 &&
	     // movementX*movementX < 100*100 ) {
  		this.imageX += movementX;
  		this.imageY += movementY;
  		this.image.nativeElement.style.marginLeft = this.imageX + 'px';
  		this.image.nativeElement.style.marginTop = this.imageY + 'px';
	}
	this.touchX = touchX;
	this.touchY = touchY;
  }

  onTouchEnd() {
  	console.log('onTouchEnd()')
  	this.touchX = -100;
    this.touchY = -100;
  }
}
