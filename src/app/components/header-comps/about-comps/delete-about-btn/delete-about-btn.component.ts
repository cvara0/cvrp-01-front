import { Component, Input, OnInit } from '@angular/core';
import { About } from 'src/app/components/models/about.models';
import { AboutService } from 'src/app/services/about.service';
@Component({
  selector: 'app-delete-about-btn',
  templateUrl: './delete-about-btn.component.html'
})
export class DeleteAboutBtnComponent implements OnInit {

  @Input() aboutToDelete: About;
  isLoading:boolean=false;

  constructor(private aboutService:AboutService) { }

  ngOnInit(): void {
  }

 delete() {
  this.isLoading=true;
  if (window.confirm("Eliminar acerca de...?")){
  this.aboutService.deleteAbout(this.aboutToDelete).subscribe(resp=>{
    this.isLoading=false;
    location.reload();
  });
}
}

//

}
