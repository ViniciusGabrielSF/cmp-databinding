import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ServerElment } from '../model/server-element.model';

@Component({
  selector: 'server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent {
   @Input('srvElement') element : ServerElment;
}
