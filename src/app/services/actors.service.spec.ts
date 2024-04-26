import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActorsService } from './actors.service';

describe('ActorsService', () => {
  let service: ActorsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ActorsService]
    });
    service = TestBed.inject(ActorsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make GET request to get actors from API', () => {
    const mockResponse = { results: [{ name: 'Actor 1' }, { name: 'Actor 2' }], previous: null, next: null };

    service.getActors().subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('https://swapi-api.hbtn.io/api/people');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should make GET request to get actor details from API', () => {
    const actorId = 1;
    const mockResponse = { name: 'Actor 1', height: '170', birth_year: '1990' };

    service.getActor(actorId).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`https://swapi-api.hbtn.io/api/people/${actorId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should make GET request with custom URL', () => {
    const customUrl = 'https://example.com/custom';
    const mockResponse = { results: [{ name: 'Custom Actor' }], previous: null, next: null };

    service.getActors(customUrl).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(customUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
