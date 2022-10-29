import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  search: string = '';
  @Output() hijoEmisor = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  @HostListener('document:keypress', ['$event'])
  changeSearch(event: KeyboardEvent): void {
    console.log(event);
    this.hijoEmisor.emit(this.search);
  }
}
