import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from "@angular/core";
import { FormControl, FormGroup, Validators, NgForm } from "@angular/forms";

import { first } from "rxjs/operators";

import { Note } from "src/app/models/Note";

import { AuthService } from "src/app/services/auth.service";
import { NoteService } from "src/app/services/note.service";

@Component({
  selector: "app-create-note",
  templateUrl: "./create-note.component.html",
  styleUrls: ["./create-note.component.scss"],
})
export class CreateNoteComponent implements OnInit {
  @ViewChild("formDirective") formDirective: NgForm;
  @Output() create: EventEmitter<any> = new EventEmitter();

  form: FormGroup;

  isOpen = false;

  constructor(
    private authService: AuthService,
    private noteService: NoteService
  ) {}

  ngOnInit(): void {
    this.form = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      title: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
      ]),
      body: new FormControl("", [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  onSubmit(formData: Pick<Note, "title" | "body">): void {
    this.noteService
      .createNote(formData, this.authService.userId)
      .pipe(first())
      .subscribe(() => {
        this.create.emit(null);
      });
    this.form.reset();
    this.formDirective.resetForm();
  }
}
