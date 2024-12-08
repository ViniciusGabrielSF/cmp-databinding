import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ServerElment } from '../model/server-element.model';

@Component({
  selector: 'cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() elementCreated = new EventEmitter<ServerElment>();
  @ViewChild('serverContentInput') serverContentInput : ElementRef;


  onAddServer(serverName : string) {
    this.elementCreated.emit({type: 'server', name: serverName, content: this.serverContentInput.nativeElement.value})
  }

  onAddBlueprint(blueprintName : string) {
    this.elementCreated.emit({type: 'blueprint', name: blueprintName, content:  this.serverContentInput.nativeElement.value})
  }


}
