import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {

	title = 'Todo list';

	constructor() {}

	ngOnInit(): void {
	}

	tasks: Task[] = [
		new Task('buy coffe'),
		new Task('drink wine'),
		new Task('call brother'),
		new Task('sleep more'),
		new Task('go to gym')
	]

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
  constructor(public title: string) {

  }

  toggleIsDone() {
	this.isDone = !this.isDone;
  }
  
  public isDone = false;
}

