import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageEditorPage } from './image-editor';

@NgModule({
  declarations: [
    ImageEditorPage,
  ],
  imports: [
    IonicPageModule.forChild(ImageEditorPage),
  ],
})
export class ImageEditorPageModule {}
