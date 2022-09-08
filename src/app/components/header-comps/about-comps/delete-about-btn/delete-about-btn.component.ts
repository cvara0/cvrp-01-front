import { Component, Input, OnInit } from '@angular/core';
import { About } from 'src/app/components/models/about.models';
import { AboutService } from 'src/app/services/about.service';
@Component({
  selector: 'app-delete-about-btn',
  templateUrl: './delete-about-btn.component.html'
})
export class DeleteAboutBtnComponent implements OnInit {

  @Input() aboutToDelete: About;
  constructor(private aboutService:AboutService) { }

  ngOnInit(): void {
  }

 delete() {
  this.aboutService.deleteAbout(this.aboutToDelete); 
}

//

}
