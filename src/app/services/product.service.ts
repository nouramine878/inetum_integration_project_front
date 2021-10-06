import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { product } from 'src/model/product';
import { httpOptions } from './HTTP_OPTIONS';

const BASE_URL = `${environment.API_LINK}/product/getProduct/`;
const BASE_URL_DELETE = `${environment.API_LINK}/product/deleteProduct/`;
const BASE_URL_GET = `${environment.API_LINK}/product/getSpecificProduct/`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  loadProduct(id: any): Observable<product[]>{
     return this.http.get<product[]>(`${BASE_URL}`+id);
  }

  deleteProduct(id : number){
    this.http.delete(`${BASE_URL_DELETE}`+id).subscribe(
      ()=>{console.log("product deleted successufely")
    })
  }

  getSpecificProduct(id:number):Observable<product>{
    return this.http.get<product>(`${BASE_URL_GET}`+id)
  }

  updateProduct(id:any,name : string, quantity: string){
    return this.http.put("http://localhost:8080/product/update/"+id,{name,quantity})
  }

  addProduct(id : any,name:string,quantity:string){
   return this.http.post("http://localhost:8080/product/addNewProduct/"+id,{name,quantity},httpOptions)
  }
}
