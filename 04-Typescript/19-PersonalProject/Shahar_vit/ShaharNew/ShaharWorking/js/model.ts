//classes

class User {
  id: string = `${new Date().getTime()}-${Math.random()}`;
  notes: Note[] = [];
  constructor(public name: string ) {}
}

class Note {
  id: string = `${new Date().getTime()}-${Math.random()}`;
  isEdit: boolean = false;
  constructor(public color: string, public text: string) {}
  public setEdit(set: boolean){
      this.isEdit = set;
  }
}




