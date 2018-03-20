import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notes=[
    {id:1,title:'nota1',description:'Descricion de la nota1'},
    {id:2,title:'nota2',description:'Descricion de la nota2'},
    {id:3,title:'nota3',description:'Descricion de la nota3'}
  ];

  constructor(public navCtrl: NavController) {

  }

}
