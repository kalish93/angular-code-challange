import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorsListComponent } from './components/actors-list/actors-list.component';
import { ActorDetailComponent } from './components/actor-detail/actor-detail.component';

export const routes: Routes = [
  { path: 'actors', component: ActorsListComponent },
  { path: '', redirectTo: '/actors', pathMatch: 'full' },
  { path: 'actors/:id', component: ActorDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
