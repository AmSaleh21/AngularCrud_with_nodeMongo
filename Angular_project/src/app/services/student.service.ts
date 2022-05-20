import {Injectable} from '@angular/core';
import {Student} from "../_models/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [];
  lastId = 0;
  constructor() { }

  public getLocalStorage(){
    this.students = JSON.parse(localStorage.getItem('students') || '[]');
  }

  private updateLocalStorage(){
    localStorage.setItem('students', JSON.stringify(this.students));
  }

  public addNew(name: string, age:number, department_number:number): void {
    this.students.push(new Student(++this.lastId, name, age, department_number));
    this.updateLocalStorage();
  }

  public save(student: Student): void {
    student.isEditing = false;
  }

  public update(editStudent: Student): void {
    this.students.splice(this.getStudentIndexByType(editStudent), 1,editStudent);
    this.updateLocalStorage();
  }

  public remove(id: number): void {
    this.students.splice(this.getStudentIndexByID(id), 1);
    this.lastId = (--this.lastId <= 0) ? 0 : --this.lastId;
    this.updateLocalStorage();
  }

  getStudentIndexByType(studentToFind: Student): number{
    return this.students.findIndex(student=>student._id===studentToFind._id);
  }

  getStudentIndexByID(id:number): number{
    return this.students.findIndex(student=>student._id===id);
  }

  getStudentByID(id:number):Student | undefined {
    return this.students.find(student=>student._id===id)
  }

  public getAllStudents(): Student[] {
    return this.students;
  }
}
