class Task {
  done: boolean;
  constructor(public description: string, public priority: string){}
  markDone(){
    this.done = true;
  }
}

class HomeTask extends Task{}

class HobbyTask extends Task {
  constructor(public description: string){
    super(description, "low");
  }
}

class WorkTask extends Task {
  constructor(public dueDate: Date, public description: string, public priority: string){
    super(description, priority);
  }
}

var tasks: Task[] = [];
tasks.push(new Task("Do the dishes.", "High"));
tasks.push(new Task("Buy chocolate.", "Low"));
tasks.push(new Task("Wash the laundry.", "High"));
tasks[0].markDone();

tasks.push(new HobbyTask("Practice origami."));
tasks.push(new HobbyTask("Bake a pie."));

var today = new Date();
var tomorrow = today;
tomorrow.setDate(todat.getDate() + 1);
var nextDay = today;
nextDay.setDate(today.getDate() + 2);

tasks.push(new WorkTask(today, "Update blog.", "High"));
tasks.push(new WorkTask(tomorrow, "Go to meeting.", "Medium"));
tasks.push(new WorkTask(nextDay, "Clean ceiling.", "Low"));

console.log(tasks);