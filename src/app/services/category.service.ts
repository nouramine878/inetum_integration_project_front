import { HttpClient } from '@angular/common/http';
import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { category } from 'src/model/category';
import { httpOptions } from './HTTP_OPTIONS';

const BASE_URL = `${environment.API_LINK}/category/get-all-category`;
const BASE_URL_DELETE = `${environment.API_LINK}/category/delete-category/`;

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  loadAllCategory(): Observable<category[]> {
    return this.http.get<category[]>(`${BASE_URL}`);
  }

  deleteCategory(id: number) {
    this.http.delete(`${BASE_URL_DELETE}` + id).subscribe(() => {
      console.log('delete work fine');
    });
  }

  getCategoryInformation(id : number):Observable<category>{
    return this.http.get<category>('http://localhost:8080/category/getOneCategory/'+id)
  }

  addCategory(name : string){
    return this.http.post("http://localhost:8080/category/add-new-category",{name},httpOptions)
  }

  updateCategory(id:any,name: string){
    return this.http.put("http://localhost:8080/category/update/"+id,{name},httpOptions)
  }
}
