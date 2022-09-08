import { Component, Input, OnInit } from '@angular/core';
import { Napro } from 'src/app/components/models/napro.models';
import { NaproService } from 'src/app/services/napro.service';

@Component({
  selector: 'app-delete-napro-btn',
  templateUrl: './delete-napro-btn.component.html'
})
export class DeleteNaproBtnComponent implements OnInit {

  @Input() naproToDelete: Napro;
  constructor(private naproService:NaproService) { }

  ngOnInit(): void {
  }

 delete() {
  this.naproService.deleteNapro(this.naproToDelete); 
}

}
