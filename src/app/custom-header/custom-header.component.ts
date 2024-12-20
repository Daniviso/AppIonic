import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss'],
  standalone:false
})
export class CustomHeaderComponent  implements OnInit {

  @Input() tabTitle:string =""; //esto inyecta el atributo tabtitle del <app-custom-header en el html 
  
  constructor() { }

  ngOnInit() {}

}
