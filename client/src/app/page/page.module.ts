import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiffComponent } from './diff/diff.component';



@NgModule({
  declarations: [DiffComponent],
  imports: [
    CommonModule
  ],
  exports: [DiffComponent]
})
export class PageModule { }
