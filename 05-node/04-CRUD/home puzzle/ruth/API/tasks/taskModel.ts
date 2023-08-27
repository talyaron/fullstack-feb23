export class Task {
    id: number;

    constructor(
      public name: string,
      public time: string,
      public isDone: boolean = false,
    ) {
      this.id = Date.now();
    }
  }