import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, Subject} from 'rxjs';
import { Login } from '../components/models/login.models';
import { User } from '../components/models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private localhost:string

  private isLogin: boolean;
  private isLogin$:Subject<boolean>;

  private userId: number;
  private token: string;
  
  constructor( private http:HttpClient) {
    this.localhost='http://localhost:8080';
    this.isLogin=false;
    this.isLogin$=new Subject();
    this.userId=0;
    
   }
   
  register(newUser: User){// : Observable<User>
    alert("Procesando informacion, puede tardar algunos segundos");
      return this.http.post<Number>(this.localhost+"/auth/singup", newUser).subscribe(resp=>{
        localStorage.setItem("userId",resp.toString());
        this.isLogin=localStorage.getItem("userId")!==null;
        this.isLogin$.next(this.isLogin);
        setTimeout(this.autoLogout, 10000);
        return localStorage.getItem("userId")!==null?alert("Nuevo usuario agregado! Bienvenid@!"):alert("Ya existe una cuenta con este email!")});//el tercer parametro es el header
  }

  login(loginData: Login){
    alert("Procesando informacion, puede tardar algunos segundos");
    return this.http.post<Login>(this.localhost+"/auth/singin", loginData).subscribe(resp=>{
      localStorage.setItem("userId",resp.toString());
      this.isLogin=localStorage.getItem("userId")!==null;
      this.isLogin$.next(this.isLogin);
      setTimeout(this.autoLogout, 10000);
      
      return localStorage.getItem("userId")!==null?alert("Bienvenid@!"):alert("Email o contrasenia incorrectos!")});
  }


  getIsLogin$(): Observable<boolean>{
    return this.isLogin$.asObservable();//esto permite desde afuera suscribirse y asi ver los cambios y recuperar los valores
  }

  autoLogout(){
    
    //this.http.post(this.localhost+"/logout",'').subscribe();
    localStorage.clear();
    location.reload();
    alert("Sesion caducada");
    
  }

  logout(){
    if (window.confirm("Cerrar sesion?")){
      alert("Procesando informacion, puede tardar algunos segundos");
      localStorage.clear();
      location.reload();
      return this.http.post(this.localhost+"/logout",'').subscribe();
  }
     return null; 
  }

/*TODO seguir con logout y botones de cerrar sesion y editar todo*/
  
}
