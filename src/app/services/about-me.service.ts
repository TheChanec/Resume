import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Owner } from '../models/Owner.interface';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {
  owner: Owner;
  constructor(private http: HttpClient) {
    this.cargarAboutMe();
   }

  private cargarAboutMe() {
    this.http.get('https://resume-bad4d.firebaseio.com/Owner.json').subscribe( (resp: Owner) => {
      this.owner = resp;
    } );

  }
}
