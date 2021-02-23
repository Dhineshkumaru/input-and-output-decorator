import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h1>
      Hello {{ name }}! <button (click)="SenddataToParent()">click</button>
    </h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input("aliasName") name: string;
  @Output() SendData: EventEmitter<any> = new EventEmitter<any>();

  SenddataToParent() {
    this.SendData.emit("Test data received");
  }
}
