import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AboutService } from 'src/app/services/about.service';
import { EditService } from 'src/app/services/edit.service';
import { UserService } from 'src/app/services/user.service';
import { About } from '../../models/about.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private aboutService:AboutService,
    private editService:EditService
    ) { 
    this.activatedRoute.params.subscribe( params => {
      this.aboutService.userId=params['id'];
      this.editService.userId=params['id'];
  });
    //editar solo si la ruta coincide con la la session
    //this.aboutService.getAboutList();
  }

  ngOnInit(): void {
    
  }
 

}
