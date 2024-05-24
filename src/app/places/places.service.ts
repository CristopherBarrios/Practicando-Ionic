import { Injectable } from '@angular/core';
import {Place} from './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public places: Place[] = [
    {
      id: '1',
      title: 'Eiffel Tower',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_(cropped).jpg/1200px-Tour_Eiffel_Wikimedia_Commons_(cropped).jpg',
      comments: ['Awesome', 'experience']
    },
    {
      id: '2',
      title: 'Torre del reformador',
      imageURL: 'https://farm4.staticflickr.com/3410/3293552040_c239798a1a_b.jpg',
      comments: ['bonito', 'se parece jaja']
    }
  ]
  constructor() { }

  getPlaces() {
    return [...this.places]
  }

  getPlace(placeId: string) {
    return {
  ...this.places.find(place =>
    { return place.id === placeId}
  )
}
  }

  addPlace(title: string, imageURL: string) {
    this.places.push({
      title,
      imageURL,
      comments: [],
      id: this.places.length + 1 + ""
    })
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter(place => {
      return place.id !== placeId
    })
  }
}
