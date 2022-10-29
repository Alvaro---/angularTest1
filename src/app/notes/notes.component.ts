import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  @Input() id: number = 0;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() note: string = '';
  @Input() image: string = '';
  constructor() {}

  ngOnInit(): void {}
}
