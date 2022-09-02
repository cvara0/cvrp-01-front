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

  private token: string;
  
  constructor( private http:HttpClient) {
    this.localhost='http://localhost:8080';
    this.isLogin=false;
    this.isLogin$=new Subject();
   }
   
  register(newUser: User){// : Observable<User>
    alert("Procesando informacion, puede tardar algunos segundos");
      return this.http.post<User>(this.localhost+"/auth/singup", newUser).subscribe(resp=>{
        this.isLogin=resp?true:false;
        this.isLogin$.next(this.isLogin);
        return resp?alert("Nuevo usuario agregado! Bienvenid@!"):alert("Ya existe una cuenta con este email!")});//el tercer parametro es el header
  }

  login(loginData: Login){
    alert("Procesando informacion, puede tardar algunos segundos");
    return this.http.post<Login>(this.localhost+"/auth/singin", loginData).subscribe(resp=>{
      console.log(resp);
      this.isLogin=resp?true:false;
      this.isLogin$.next(this.isLogin);
      console.log(resp);
      return resp?alert("Bienvenid@!"):alert("Email o contrasenia incorrectos!")});
  }

  getIsLogin$(): Observable<boolean>{
    return this.isLogin$.asObservable();//esto permite desde afuera suscribirse y asi ver los cambios y recuperar los valores
  }

  logout(){
    if (window.confirm("Cerrar sesion?")){
      alert("Procesando informacion, puede tardar algunos segundos");
      this.isLogin=false;
      this.isLogin$.next(this.isLogin);
      return this.http.post(this.localhost+"/logout",'').subscribe();
  }
     return null; 
  }

/*TODO seguir con logout y botones de cerrar sesion y editar todo*/
  
}
