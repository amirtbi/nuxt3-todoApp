// Interface
interface ITask {
  add(): void;
}

// Concretes class
/// AdminClass
class AdmninClass implements ITask {
  // private tasks: Object[] = [];
  // constructor(public title: string, public description: string) {}

  add(): void {
    console.log("task for admin added");
  }
}
class userClass implements ITask {
  //   private tasks: Object[] = [];
  //   constructor(public title: string, public description: string) {}

  add(): void {
    console.log("user class task added");
  }
}

// Creator
class TaskCreator {
  static taskCreate(taskName: string) {
    if (taskName === "admin") {
      return new AdmninClass();
    } else if (taskName === "user") {
      return new userClass();
    }
  }
}

// const newAdminClass = TaskCreator.taskCreate("admin");
// newAdminClass.add();
export default TaskCreator;
