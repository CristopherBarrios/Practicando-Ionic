import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  public places = [
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

  ngOnInit() {
  }

}
