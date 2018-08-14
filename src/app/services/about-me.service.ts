import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Owner } from '../models/Owner.interface';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {
  constructor(private http: HttpClient) {
    // this.cargarAboutMe();
   }

  public cargarAboutMe() {
    return this.http.get('https://resume-bad4d.firebaseio.com/Owner.json');
  }
}
