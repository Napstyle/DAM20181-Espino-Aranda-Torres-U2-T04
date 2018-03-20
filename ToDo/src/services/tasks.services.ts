import { Injectable } from "@angular/core";

@Injectable()
export class TasksService {
    tasks=[
        {id:1,title:'nota1',description:'Descricion de la nota1'},
        {id:2,title:'nota2',description:'Descricion de la nota2'},
        {id:3,title:'nota3',description:'Descricion de la nota3'}
      ];
      /**
       * getTasks
       */
      public getTasks() {
          return this.tasks;
          
      }
}