export class Student {
  _id: number;
  name: string;
  age: number;
  department_number: number;
  isEditing: boolean;
  constructor(id:number=0, name:string='', age: number=0, department_number: number=0) {
    this._id = id;
    this.name = name;
    this.age = age;
    this.department_number = department_number;
    this.isEditing = false;
  }
}
