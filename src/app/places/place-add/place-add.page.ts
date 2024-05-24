import { Component, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { PlacesService } from '../places.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.page.html',
  styleUrls: ['./place-add.page.scss'],
})
export class PlaceAddPage implements OnInit {

  constructor(private placesService: PlacesService, private router: Router) { }

  ngOnInit() {
  }
  async savedNewPlace(title: IonInput,imageURL: IonInput){
    const titleValue = await title.getInputElement().then(input => input.value);
    const imageURLValue = await imageURL.getInputElement().then(input => input.value);

    this.placesService.addPlace(titleValue,imageURLValue)
    this.router.navigate(['/places'])
  }
}
