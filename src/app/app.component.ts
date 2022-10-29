import { Component, ViewEncapsulation } from '@angular/core';
import data from '../assets/notes_data.json';
import { Note } from './models/Note';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'proyecto_final';
  notes: Note[] = data;
  showNotes: Note[] = this.notes;

  changeSearch(search: string) {
    console.log(search);
    this.showNotes = this.notes.filter((note) => note.title.includes(search));
  }
}
