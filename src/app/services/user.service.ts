import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../components/models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private postUserUrl:string='http://localhost:8080/auth/singup'
  

  constructor( private http:HttpClient) { }

  register(user: User): Observable<User> {
    alert("Nuevo usuario: "+ user.username);
    //buscar en la bd que no exista el suaurio y notificar
    return this.http.post<User>(this.postUserUrl, user);//el tercer parametro es el header
    
  }

  
}
