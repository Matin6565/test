import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled'

  name: string = 'amir'
  namekh: string = 'khalili'
  number: string = '09999999'
  users: { name: string, age: number, student: boolean }[] = [{
    name: "reza",
    age: 20,
    student: false
  },{
    name: "reza",
    age: 25,
    student: false
  }]

  nummmm:number=0
  sum(add1:number)
  {

    this.nummmm += add1;
  }
isshow:boolean=false

change(){
    this.isshow=true;
  for (let i = 0; i < this.users.length; i++) {

  }
}
  constructor() {

  }
}





