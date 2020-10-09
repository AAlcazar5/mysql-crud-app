import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, first } from "rxjs/operators";

import { Note } from "../models/Note";
import { User } from "../models/User";
import { ErrorHandlerService } from "./error-handler.service";

@Injectable({
  providedIn: "root",
})
export class NoteService {
  private url = "http://localhost:3000/note";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) {}

  fetchAll(): Observable<Note[]> {
    return this.http
      .get<Note[]>(this.url, { responseType: "json" })
      .pipe(
        catchError(this.errorHandlerService.handleError<Note[]>("fetchAll", []))
      );
  }

  createNote(
    formData: Partial<Note>,
    userId: Pick<User, "id">
  ): Observable<Note> {
    return this.http
      .post<Note>(
        this.url,
        { title: formData.title, body: formData.body, user: userId },
        this.httpOptions
      )
      .pipe(
        catchError(this.errorHandlerService.handleError<Note>("createNote"))
      );
  }

  deleteNote(noteId: Pick<Note, "id">): Observable<{}> {
    return this.http
      .delete<Note>(`${this.url}/${noteId}`, this.httpOptions)
      .pipe(
        first(),
        catchError(this.errorHandlerService.handleError<Note>("deleteNote"))
      );
  }
}
