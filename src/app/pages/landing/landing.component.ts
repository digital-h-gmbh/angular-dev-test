import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RoutingPath } from '../../enums/routing-path';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  readonly routingPath = RoutingPath;
}
