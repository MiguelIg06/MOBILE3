import { Component } from '@angular/core';
import { TestServiceService } from '../test-service.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public testeService: TestServiceService) {}
}

 

 
