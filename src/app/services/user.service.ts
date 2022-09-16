import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Observable, Subject} from 'rxjs';
import { Login } from '../components/models/login.models';
import { User } from '../components/models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private localhost:string

  private userId: number;
  private token: string;
 
  
  constructor( private http:HttpClient,private router:Router) {
    this.localhost='https://porfolio-ap-back-cvrp.herokuapp.com';
    this.userId=0;
    
   }
   
  register(newUser: User){
    sessionStorage.clear();
      return this.http.post<Number>(`${this.localhost}/auth/singup`, newUser);
  }

  login(loginData: Login){
    
    sessionStorage.clear();
    return this.http.post<Login>(`${this.localhost}/auth/singin`, loginData);
   
  }




  autoLogout(){
    
    sessionStorage.clear();
    window.location.href+'?eraseCache=true';
    window.location.href=`/home`;
    alert("Sesion caducada");
    
  }

  logout(){
    if (window.confirm("Cerrar sesion?")){
      alert("Procesando informacion, puede tardar algunos segundos");
      sessionStorage.clear();
      window.location.href+'?eraseCache=true';
      window.location.href=`/home`;
      //location.reload();
      return null;//return this.http.post(this.localhost+"/logout",'').subscribe();
  }
     return null; 
  }


  
}
