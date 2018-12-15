import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpComponent } from './up/up.component';
import { DownComponent } from './down/down.component';

@NgModule({
  declarations: [UpComponent, DownComponent],
  entryComponents: [UpComponent, DownComponent],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class UpdownModule { }
