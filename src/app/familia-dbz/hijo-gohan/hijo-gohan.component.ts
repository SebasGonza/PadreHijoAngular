import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-hijo-gohan',
  templateUrl: './hijo-gohan.component.html',
  styleUrls: ['./hijo-gohan.component.css']
})
export class HijoGohanComponent{

  constructor() { }
  nombre:string="Gohan"
  @Input() kamehamehaGohan:string ="";

}
