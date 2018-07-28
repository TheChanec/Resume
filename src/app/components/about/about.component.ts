import { Component } from '@angular/core';
import { AboutMeService } from '../../services/about-me.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent  {

  constructor(public _service: AboutMeService) { }

}
