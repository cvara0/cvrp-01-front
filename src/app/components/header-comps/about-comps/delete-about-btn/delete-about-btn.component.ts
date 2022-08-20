import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';
@Component({
  selector: 'app-delete-about-btn',
  templateUrl: './delete-about-btn.component.html'
})
export class DeleteAboutBtnComponent implements OnInit {

  
  constructor(private aboutService:AboutService) { }

  ngOnInit(): void {
  }

 delete() {
  this.aboutService.deleteAbout();
}

//

}
