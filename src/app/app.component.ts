import { Component } from '@angular/core';

// decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // field of type string
  title = 'todo-app';
  // now it is not type string, but type class aray
  tasks: Task[] = [
    // new object of specific data type
    new Task('buy coffe'),
    new Task('drink wine'),
    new Task('call brother'),
    new Task('sleep more'),
    new Task('go to gym')
  ]
  // method
  add(newTask: string) {
    this.tasks.push(new Task(newTask));
  }

  remove(existingTask: Task) {
    let userConfirmed = confirm(`Are you sure you want to remove a following task? \n "${existingTask.title}"`);
    
    if(userConfirmed) {
      this.tasks = this.tasks.filter(task => task != existingTask);
    }
  }
}

class Task {

  // initial values for object
  constructor(public title: string) {

  }

  
  toggleIsDone() {
    this.isDone= !this.isDone;
  }

  public isDone = false;
}