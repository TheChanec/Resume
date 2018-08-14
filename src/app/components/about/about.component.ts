import { Component } from '@angular/core';
import { AboutMeService } from '../../services/about-me.service';
import { Owner } from '../../models/Owner.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent  {
  owner: Owner = {};
  cargada: boolean ;
  constructor(public _service: AboutMeService) {
    _service.cargarAboutMe().subscribe( (resp: Owner) => {
      this.cargada = true;
      this.owner = resp;
    } );
   }

}
