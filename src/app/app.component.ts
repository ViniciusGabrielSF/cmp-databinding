import { Component } from '@angular/core';
import { ServerElment } from './model/server-element.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  evenNumbers : number[] = [];
  oddNumbers : number[] = [];

  serverElements : ServerElment[] = [
    {type: 'server', name:'first server', content: 'thats just a server'} as ServerElment,
  ];

  onElementAdded(element : ServerElment) {
    this.serverElements.push(element);
  }

  onCouterIncremented = (counter : number) => 
    counter % 2 == 0 ? this.evenNumbers.push(counter) : this.oddNumbers.push(counter);

}
