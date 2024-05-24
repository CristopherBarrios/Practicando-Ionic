import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('placeId')
      console.log(recipeId);
      
    })
  }

}
