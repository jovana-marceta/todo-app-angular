import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {

	title = 'Todo list';

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		let date: Date = new Date(this.route.snapshot.params['date']);
		console.log(date);
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

