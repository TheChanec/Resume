import { Component } from '@angular/core';
import { DatabasesService } from '../../services/databases.service';

@Component({
  selector: 'app-databases',
  templateUrl: './databases.component.html'
})
export class DatabasesComponent  {

  constructor(public _servicio: DatabasesService) { }

}
