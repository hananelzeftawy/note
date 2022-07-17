import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private _HttpClient:HttpClient) { }
  BASE="https://routeegypt.herokuapp.com/";

  getAllNotes(data:any):Observable<any>
  {
    return this._HttpClient.post(this.BASE+"getUserNotes",data)
  }

  addNote(data:any):Observable<any>
  {
    return this._HttpClient.post(this.BASE+"addNote",data)
  }

  delNote(data:any):Observable<any>
  {
    let options={
      body:{
        NoteID:data.NoteID,
        token:data.token
      }
    }
    return this._HttpClient.delete(this.BASE+"deleteNote",options)
  }


  updateNote(data:any)
  {
      return this._HttpClient.put(this.BASE+"updateNote",data)
  }
}
