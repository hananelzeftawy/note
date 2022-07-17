import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { AuthService } from '../auth.service';
import { NoteService } from '../note.service'
declare var $: any
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  /*add form*/
  addNote: any = new FormGroup({
    "title": new FormControl(null),

    "desc": new FormControl(null)
  })

  /*/update form/*/
  updateForm: any = new FormGroup({
    "title": new FormControl(null),

    "desc": new FormControl(null)
  })

  token: any = "";
  decoded: any = ""
  notes: any = []

  /*add Note*/

  addData(data: any) {
    let neededData = {
      title: data.value.title,
      desc: data.value.desc,
      citizenID: this.decoded._id,
      token: this.token
    }
    console.log(neededData)
    this._NoteService.addNote(neededData).subscribe((data) => {
      if (data.message == "success") {
        (document.querySelector(".add-cancel") as HTMLElement).click()
        this.getAllNotes()
      }
    })
  }

  /*get Notes*/
  getAllNotes() {
    let object = {
      token: this.token,
      userID: this.decoded._id
    }

    this._NoteService.getAllNotes(object).subscribe((data) => {
      console.log(data)
      this.notes = data.Notes
    })
  }
  constructor(private _AuthService: AuthService, private _Router: Router, private _NoteService: NoteService) {
    this.token = localStorage.getItem("token")
    this.token = JSON.parse(this.token)
    this.decoded = jwtDecode(this.token)
    console.log(this.decoded)


  }


  NoteId = ""
  NoteUpdateId = "";
  del(data: any) {
    console.log(data)
    this.NoteId = data
  }

  edit(id: any) {
    this.NoteUpdateId = id
  }

  /*delete Note*/

  delteNote() {
    let Deletedata = {
      NoteID: this.NoteId,
      token: this.token
    }
    console.log(Deletedata)
    this._NoteService.delNote(Deletedata).subscribe((data) => {
      console.log(data)
      if (data.message == "deleted") {
        (document.querySelector(".btn-del-2") as HTMLElement).click()
        this.getAllNotes()
      }
    })
  }

  /*update Note*/

  update(updatedDate:any) {
    let data = {
      token: this.token,
      title: updatedDate.value.title,
      desc: updatedDate.value.desc,
      NoteID: this.NoteUpdateId
    }
    this._NoteService.updateNote(data).subscribe((res) => {
      
      this.getAllNotes()
      
    })
  }
  ngOnInit(): void {
    this.getAllNotes();
  }

}
