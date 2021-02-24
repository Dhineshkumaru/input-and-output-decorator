import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h1>
      Hello {{ name }}!
      <button class="btn-style" (click)="SenddataToParent()">Click</button>
    </h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
      button:hover {
        background-color: yellow;
      }
      .btn-style {
        color: white;
        width: 200px;
        height: 30px;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer;
        background-color: yellowgreen;
        border: 2px solid black;
        border-radius: 20px;
        hover: black;
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
