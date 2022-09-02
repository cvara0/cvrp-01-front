import { Component, OnInit } from '@angular/core';
import { EditService } from 'src/app/services/edit.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogin: boolean;
  
  public editConfirmIcon:string;
  constructor(public userService:UserService,public editService:EditService) { 
    this.isLogin=false;
    this.userService.getIsLogin$().subscribe(resp=>this.isLogin=resp);
  }

  ngOnInit(): void {
    
  }
  

}
