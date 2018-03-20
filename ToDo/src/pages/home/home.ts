import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TasksService } from "../../services/tasks.services";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 tasks=[];
  constructor(public navCtrl: NavController, public tasksService : TasksService) {
    this.tasks=tasksService.getTasks();
  }

}
