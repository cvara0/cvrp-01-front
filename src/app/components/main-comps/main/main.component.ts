import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/services/exp.service';
import { Experience } from '../../models/experience.models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
  

  constructor() {

   }

  ngOnInit(): void {
  }

}
