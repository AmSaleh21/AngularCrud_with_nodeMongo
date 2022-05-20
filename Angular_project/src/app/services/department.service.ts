import {Injectable} from '@angular/core';
import {Department} from "../_models/department";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class DepartmentService {
  private departments: Department[] = [];
  private lastId = 0;
  private apiUrl = "http://127.0.0.1:8000/departments/";

  constructor(public http: HttpClient) {
  }

  public callApi() {
    this.http.get<Department[]>(this.apiUrl).subscribe(data => this.departments = data);
  }

  public getLocalStorage() {
    this.departments = JSON.parse(localStorage.getItem('departments') || '[]');
  }

  private updateLocalStorage() {
    localStorage.setItem('departments', JSON.stringify(this.departments));
  }

  private updateId(){
    this.lastId = this.departments[this.departments.length-1]._id;
    console.log(this.lastId)
  }

  public addNew(name: string, location: string): void {

    this.updateId();

    let postData = {
      "_id": ++this.lastId,
      "name": name,
      "location": location
    }

    let sub:any;

    new Promise(()=>{
      sub = this.http.post<Department>(this.apiUrl, postData)
        .subscribe(data => {
          this.departments.push(data)
        })
    }).then(
      sub.unsubscribe()
    )

    this.updateLocalStorage();
  }

  public update(editDepartment: Department): void {
    let index = this.getDepartmentIndexByType(editDepartment)

    let sub:any;

    new Promise(()=> {
      sub = this.http.put<Department>(`${this.apiUrl}${editDepartment._id}`, editDepartment)
        .subscribe(data => this.departments.splice(index, 1, data))
    }).then(
      sub.unsubscribe()
    )

    this.updateLocalStorage();
  }

  public remove(id: number): void {
    let index = this.getDepartmentIndexByID(id);

    let sub:any;

    new Promise(()=> {
      sub = this.http.delete<Department>(`${this.apiUrl}${id}`)
        .subscribe(() => this.departments.splice(index, 1))
    }).then(
      sub.unsubscribe()
    )

    this.updateId();

    this.updateLocalStorage();
  }

  private getDepartmentIndexByID(id: number): number {
    return this.departments.findIndex(department => department._id === id);
  }

  private getDepartmentIndexByType(departmentToFind: Department): number {
    return this.departments.findIndex(Department => Department._id === departmentToFind._id);
  }

  public getDepartmentByID(id: number): Department | undefined {
    return this.departments.find(department => department._id === id)
  }

  public getAllDepartments(): Department[] {
    return this.departments;
  }
}
