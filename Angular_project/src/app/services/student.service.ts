import {Injectable} from '@angular/core';
import {Student} from "../_models/student";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  private students: Student[] = [];
  lastId = 0;
  private apiUrl = "http://127.0.0.1:8000/students/";

  constructor(public httpClient:HttpClient) { }

  public callApi() {
    this.httpClient.get<Student[]>(this.apiUrl).subscribe(data => this.students = data);
  }

  public getLocalStorage(){
    this.students = JSON.parse(localStorage.getItem('students') || '[]');
  }

  private updateLocalStorage(){
    localStorage.setItem('students', JSON.stringify(this.students));
  }

  private updateId() {
    this.lastId = this.students[this.students.length-1]._id;
  }

  public addNew(name: string, age:number, department_number:number): void {

    this.updateId();

    let postData = {
      "_id": ++this.lastId,
      "name": name,
      "age": age,
      "department": department_number
    }

    let sub:any;

    new Promise( ()=> {
      sub = this.httpClient.post<Student>(this.apiUrl, postData)
        .subscribe(data => {
          this.students.push(data)
        })
    }).then(
        sub.unsubscribe()
    )

    this.updateLocalStorage();
  }

  public update(editStudent: Student): void {

    let index = this.getStudentIndexByType(editStudent);
    let sub:any;

    new Promise(() => {
      sub = this.httpClient.put<Student>(`${this.apiUrl}${editStudent._id}`, editStudent )
        .subscribe(data => this.students.splice(index, 1, data))
    }).then(
      sub.unsubscribe()
    )

    this.updateLocalStorage();
  }

  public remove(id: number): void {

    let index = this.getStudentIndexByID(id);
    let sub:any;

    new Promise(()=> {
      sub = this.httpClient.delete(`${this.apiUrl}${id}`)
        .subscribe(() => this.students.splice(index, 1));
    }).then(
      sub.unsubscribe()
    )

    this.updateId();
    this.updateLocalStorage();
  }

  getStudentIndexByType(studentToFind: Student): number{
    return this.students.findIndex(student=>student._id === studentToFind._id);
  }

  getStudentIndexByID(id:number): number{
    return this.students.findIndex(student=>student._id === id);
  }

  getStudentByID(id:number):Student | undefined {
    return this.students.find(student=>student._id === id)
  }

  public getAllStudents(): Student[] {
    return this.students;
  }
}
