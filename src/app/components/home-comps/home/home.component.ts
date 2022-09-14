import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AboutService } from 'src/app/services/about.service';
import { BannerService } from 'src/app/services/banner.service';
import { EditService } from 'src/app/services/edit.service';
import { EducationService } from 'src/app/services/edu.service';
import { ExperienceService } from 'src/app/services/exp.service';
import { NaproService } from 'src/app/services/napro.service';
import { PhotoService } from 'src/app/services/photo.service';
import { ProjectService } from 'src/app/services/project.service';
import { SkillService } from 'src/app/services/skill.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private aboutService:AboutService,
    private bannerService:BannerService,
    private photoService:PhotoService,
    private naproService:NaproService,
    private educationService:EducationService,
    private experienceService:ExperienceService,
    private skillService:SkillService,
    private projectService:ProjectService,
    private editService:EditService
    ) { 
      
    this.activatedRoute.params.subscribe( params => {
      console.log(params['id']);
      this.bannerService.userId=params['id'];
      this.photoService.userId=params['id'];
      this.aboutService.userId=params['id'];
      this.naproService.userId=params['id'];
      this.educationService.userId=params['id'];
      this.experienceService.userId=params['id'];
      this.skillService.userId=params['id'];
      this.projectService.userId=params['id'];
      this.editService.userId=params['id'];
  });
    
  }

  ngOnInit(): void {
    
  }
 

}
