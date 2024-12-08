import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  @Output() couterIncremented = new EventEmitter<number>();
  counter : number  = 0;
  ref;

  onStartInterval () {
    this.ref = setInterval(() => {this.counter++; this.couterIncremented.emit(this.counter); console.log(this.counter)}, 1000 );
  }

  onStopInterval () {
    if(this.ref)
      clearInterval(this.ref);
  }
}
