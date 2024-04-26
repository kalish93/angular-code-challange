import { Component, OnInit } from '@angular/core';
import { ActorsService } from '../../services/actors.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrl: './actor-detail.component.scss'
})
export class ActorDetailComponent implements OnInit{

  actor: any;
  loading: boolean = true;
  constructor(
    private actorService: ActorsService,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.actorService.getActor(id).subscribe(actor => {
        this.actor = actor;
        this.loading = false;
      });
    });
  }

}
