import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Photo } from './photo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/photos?_limit=15';

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.apiUrl);
  }
}
