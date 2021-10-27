

export class TodoModel {
    public id:string
    public checked:boolean
  public title: string;

  constructor( id: string,title: string,checked: boolean) {
    this.title = title;
    this.id = id;
    this.checked = checked;
  }
}