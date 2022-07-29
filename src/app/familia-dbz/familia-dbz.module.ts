import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadreGokuComponent } from './padre-goku/padre-goku.component';
import { FamiliaDbzComponent } from './familia-dbz.component';
import { HijoGohanComponent } from './hijo-gohan/hijo-gohan.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PadreGokuComponent,
    FamiliaDbzComponent,
    HijoGohanComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [FamiliaDbzComponent]
})
export class FamiliaDbzModule { }
