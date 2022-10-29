import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'noteDetail', component: NoteDetailComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
