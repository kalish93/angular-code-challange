import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ActorDetailComponent } from './actor-detail.component';
import { ActorsService } from '../../services/actors.service';

describe('ActorDetailComponent', () => {
  let component: ActorDetailComponent;
  let fixture: ComponentFixture<ActorDetailComponent>;
  let actorsService: ActorsService;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActorDetailComponent],
      providers: [
        {
          provide: ActorsService,
          useValue: {
            getActor: jasmine.createSpy('getActor').and.returnValue(of({})),
          },
        },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get: () => '1' }),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorDetailComponent);
    component = fixture.componentInstance;
    actorsService = TestBed.inject(ActorsService);
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch actor details on initialization', () => {
    expect(actorsService.getActor).toHaveBeenCalledWith('1');
    expect(component.actor).toEqual({});
    expect(component.loading).toBeFalse();
  });
});
