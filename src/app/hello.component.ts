import { Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  template: ``,
  styles: [
    `
      h1 {
        text-align: center;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
}
