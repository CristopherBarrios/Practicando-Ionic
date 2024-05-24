import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { PlacesService } from '../places.service';
import { AlertController } from "@ionic/angular";
import { Place } from '../place.model';


@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place | undefined;

  constructor(private activatedRoute: ActivatedRoute, private placesService: PlacesService, private router: Router, private alertctrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('placeId')
      if (recipeId) {
      this.place = this.placesService.getPlace(recipeId);   
      console.log(this.place);
      }
    })
  }

  async deletePlace(){
    const alertElement = await this.alertctrl.create({
      header: 'Estas seguro de eliminarlo?',
      message: 'Ten cuidado',
      buttons: [
        {
          text:'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            if (this.place && this.place.id) {
              this.placesService.deletePlace(this.place.id);
              this.router.navigate(['/places'])
            }
          }
        }
      ]
    })
    await alertElement.present();
  }
}
