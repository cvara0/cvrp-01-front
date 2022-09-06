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



  private userId: number;
  private token: string;
  
  constructor( private http:HttpClient) {
    this.localhost='http://localhost:8080';
    this.userId=0;
    
    //this.isLogin=sessionStorage.getItem("userId")!==null;
    //this.isLogin$.next(this.isLogin);
    
   }
   
  register(newUser: User){// : Observable<User>
    sessionStorage.clear();
    alert("Procesando informacion, puede tardar algunos segundos");
      return this.http.post<Number>(this.localhost+"/auth/singup", newUser).subscribe(resp=>{
        if(resp!==null){
        sessionStorage.setItem("userId",resp.toString());
        location.reload();
      }
        //setTimeout(this.autoLogout, 10000);
        return resp!==null?alert("Nuevo usuario agregado! Bienvenid@!"):alert("Ya existe una cuenta con este email!")
      });//el tercer parametro es el header
  }

  login(loginData: Login){
    sessionStorage.clear();
    alert("Procesando informacion, puede tardar algunos segundos");
    return this.http.post<Login>(this.localhost+"/auth/singin", loginData).subscribe(resp=>{
      if(resp!==null){
        sessionStorage.setItem("userId",resp.toString());
        location.reload();
      }
    
      //setTimeout(this.autoLogout, 10000);
      return resp!==null?alert("Bienvenid@!"):alert("Email o contrasenia incorrectos!")});
  }




  autoLogout(){
    
    this.http.post(this.localhost+"/logout",'').subscribe();
   
    sessionStorage.clear();
    location.reload();
    alert("Sesion caducada");
    
  }

  logout(){
    if (window.confirm("Cerrar sesion?")){
      alert("Procesando informacion, puede tardar algunos segundos");
      sessionStorage.clear();
      location.reload();
      return this.http.post(this.localhost+"/logout",'').subscribe();
  }
     return null; 
  }

/*TODO seguir con logout y botones de cerrar sesion y editar todo*/
  
}
