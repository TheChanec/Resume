import { Component } from '@angular/core';
import { AboutMeService } from './services/about-me.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private about: AboutMeService) {
  }
}
