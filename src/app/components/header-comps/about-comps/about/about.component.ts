import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/components/models/about.models';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  about         : About=new About();
  constructor(private aboutService:AboutService) {

    this.aboutService.getAbout$().subscribe(about=>{
      this.about=about;
    });

   }
  ngOnInit(): void {
  }

}
