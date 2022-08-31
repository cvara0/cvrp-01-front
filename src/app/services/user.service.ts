import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, Subject} from 'rxjs';
import { User } from '../components/models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private localhost:string

  private isLoggin: boolean;
  private isLoggin$:Subject<boolean>;
  
  constructor( private http:HttpClient) {
    this.localhost='http://localhost:8080';
    this.isLoggin=false;
    this.isLoggin$=new Subject();
   }
   
  register(user: User){// : Observable<User>
    alert("Procesando informacion, puede tardar unos segundos");
      return this.http.post<User>(this.localhost+"/auth/singup", user).subscribe(resp=>{
        this.isLoggin=resp?true:false;
        this.isLoggin$.next(this.isLoggin);
        console.log(this.isLoggin);
        return resp?alert("Nuevo usuario agregado"):alert("Ya existe una cuenta con este email")});//el tercer parametro es el header
  }


  
}
