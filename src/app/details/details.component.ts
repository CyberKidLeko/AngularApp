
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location/housing-location.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  providers: [Router, ActivatedRoute],
  template: `
    <p>details works! {{ housingLocationId }}</p>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  housingLocationId = -1;
  route: ActivatedRoute;

  constructor(router: Router, activatedRoute: ActivatedRoute) {
    this.route = activatedRoute;
  }

  ngOnInit() {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
  }
}
