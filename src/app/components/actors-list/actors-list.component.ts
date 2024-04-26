import { Component, OnInit } from '@angular/core';
import { ActorsService } from '../../services/actors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrl: './actors-list.component.scss',
})
export class ActorsListComponent implements OnInit {
  actors: any = [];
  previous: any;
  next: any;
  loading: boolean = true;
  constructor(private actorServie: ActorsService, private router: Router) {}

  ngOnInit(): void {
    this.actorServie.getActors().subscribe((response) => {
      this.actors = response.results;
      this.previous = response.previous;
      this.next = response.next;
      this.loading = false;
    });
  }

  navigateToDetail(actor: any) {
    let splited = actor.url.split('/');
    let id = splited.pop();
    if (id === '') {
      id = splited.pop();
    }
    this.router.navigate(['/actors', id]);
  }

  nextPage() {
    if (this.next !== null) {
      this.actorServie.getActors(this.next).subscribe((response) => {
        this.actors = response.results;
        this.previous = response.previous;
        this.next = response.next;
        this.loading = false;
      });
    }
  }

  previousPage() {
    if (this.previous !== null) {
      this.actorServie.getActors(this.previous).subscribe((response) => {
        this.actors = response.results;
        this.previous = response.previous;
        this.next = response.next;
        this.loading = false;
      });
    }
  }
}
