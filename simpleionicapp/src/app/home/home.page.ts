import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

       myVariable: String ="The force is with me!";
       myVariable2: String ="Hello from CCT";
updateMyValue(){
this.myVariable = "Now is the force even stronger!";

}
updateMyValue2(){
this.myVariable2 = "Hello from Ionic";

}}
