import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";

import { NoteService } from "src/app/services/note.service";
import { AuthService } from "src/app/services/auth.service";

import { Note } from "src/app/models/Note";
import { User } from "src/app/models/User";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.scss"],
})
export class NotesComponent implements OnInit {
  notes$: Observable<Note[]>;
  userId: Pick<User, "id">;

  constructor(
    private noteService: NoteService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.notes$ = this.fetchAll();
    this.userId = this.authService.userId;
  }

  fetchAll(): Observable<Note[]> {
    return this.noteService.fetchAll();
  }

  createNote(): void {
    this.notes$ = this.fetchAll();
  }

  delete(noteId: Pick<Note, "id">): void {
    this.noteService
      .deleteNote(noteId)
      .subscribe(() => (this.notes$ = this.fetchAll()));
  }
}
