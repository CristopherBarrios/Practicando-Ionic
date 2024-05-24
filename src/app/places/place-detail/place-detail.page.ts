import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { PlacesService } from '../places.service';
import { Place } from '../place.model';


@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place | undefined;

  constructor(private activatedRoute: ActivatedRoute, private placesService: PlacesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('placeId')
      if (recipeId) {
      this.place = this.placesService.getPlace(recipeId);   
      console.log(this.place);
      }
    })
  }

  deletePlace(){
    if (this.place && this.place.id) {
      this.placesService.deletePlace(this.place.id);
    }
  }
}
