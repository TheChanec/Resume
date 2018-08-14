import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataBase } from '../models/database.interface';

@Injectable({
  providedIn: 'root'
})
export class DatabasesService {

  databases: DataBase[];

  constructor(private http: HttpClient) {
    this.cargarDataBases();
  }

  private cargarDataBases() {
    this.http.get('https://resume-bad4d.firebaseio.com/DataBases.json').subscribe( (resp: DataBase[]) => {
      this.databases = resp;
    } );

  }
}
