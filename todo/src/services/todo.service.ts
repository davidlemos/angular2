import { Injectable} from '@angular/core'
import { Task } from '../model/task.model'

@Injectable()
export class TodoService{
    tasks:any

    constructor(){
        this.tasks = new Array();
        this.tasks.push(new Task("Mercado","Comprar feijão","priority-low"))
        this.tasks.push(new Task("Padaria","Comprar pão","priority-high"))
        this.tasks.push(new Task("Mercado","Comprar arroz","priority-medium"))
    }

    edit(task:Task){
        this.tasks = this.tasks.filter(t => t.getId() != task.getId())
        this.tasks.push(task)
    }

    addTask(task:Task){
        this.tasks.push(task)
    }

    loadTask(){
        return this.tasks
    }
}