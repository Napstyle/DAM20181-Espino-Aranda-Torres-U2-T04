import { Injectable } from "@angular/core";

@Injectable()
export class TasksService {
    tasks=[
        {id:1,title:'task1',description:'Descricion de la task1'},
        {id:2,title:'task2',description:'Descricion de la task2'},
        {id:3,title:'task3',description:'Descricion de la task3'}
      ];
      /**
       * getTasks
       */
      public getTasks() {
          return this.tasks;
          
      }
}