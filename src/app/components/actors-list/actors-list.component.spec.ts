import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActorsListComponent } from './actors-list.component';
import { ActorsService } from '../../services/actors.service';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('ActorsListComponent', () => {
  let component: ActorsListComponent;
  let fixture: ComponentFixture<ActorsListComponent>;
  let actorsService: ActorsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [ActorsListComponent],
      providers: [ActorsService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsListComponent);
    component = fixture.componentInstance;
    actorsService = TestBed.inject(ActorsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch actors on component initialization', () => {
    const actors = [{ name: 'Actor 1', height: 180, birth_year: '1980' }];
    spyOn(actorsService, 'getActors').and.returnValue(of({ results: actors }));

    component.ngOnInit();

    expect(component.actors).toEqual(actors);
    expect(component.loading).toBeFalse();
  });

  it('should fetch next page of actors', () => {
    const nextPageUrl = 'https://example.com/actors?page=2';
    const actors = [{ name: 'Actor 2', height: 170, birth_year: '1990' }];
    spyOn(actorsService, 'getActors').and.returnValue(of({ results: actors }));

    component.next = nextPageUrl;
    component.nextPage();

    expect(actorsService.getActors).toHaveBeenCalledWith(nextPageUrl);
    expect(component.actors).toEqual(actors);
    expect(component.loading).toBeFalse();
  });

  it('should fetch previous page of actors', () => {
    const previousPageUrl = 'https://example.com/actors?page=1';
    const actors = [{ name: 'Actor 1', height: 180, birth_year: '1980' }];
    spyOn(actorsService, 'getActors').and.returnValue(of({ results: actors }));

    component.previous = previousPageUrl;
    component.previousPage();

    expect(actorsService.getActors).toHaveBeenCalledWith(previousPageUrl);
    expect(component.actors).toEqual(actors);
    expect(component.loading).toBeFalse();
  });
});
