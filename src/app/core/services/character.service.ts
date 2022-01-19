import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character } from '../model/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private _character = new Subject<Character>();

  private baseUrl = `${environment.baseUrl}/character`;

  constructor(private http: HttpClient) { }

  all(){
    return this.http.get<Character[]>(this.baseUrl)
  }

  getOne(id: number){
   return this.http.get<Character>(`${this.baseUrl}/${id}`)
  }

}
