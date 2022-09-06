import { Component, OnInit } from '@angular/core';
import { EditService } from 'src/app/services/edit.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogin: boolean=false;
  
  public editConfirmIcon:string;
  constructor(public userService:UserService,public editService:EditService) { 
    console.log(sessionStorage.getItem("userId"));
    this.isLogin=sessionStorage.getItem("userId")!==null;
    //this.isLogin=sessionStorage.getItem("userId")!==null;
    
  }

  ngOnInit(): void {
    
  }
  

}
