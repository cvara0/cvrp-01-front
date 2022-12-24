import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  actualYear :number;
  constructor() { 
    this.actualYear=new Date().getFullYear();
    console.log(this.actualYear);

  }

  ngOnInit(): void {
  }

}
