import { Component, Input } from "@angular/core";
import { Scrolllink } from "./models/scrolllink.interface";

@Component({
  selector: "scrolllink",
  template: `
    <li class="nav-item" [class.active]="scrolllink.active">
      <a
        class="page-scroll"
        target="_self"
        routerLink=""
        fragment="{{ scrolllink.target }}"
        >{{ scrolllink.text }}</a
      >
    </li>
  `
})
export class ScrolllinkComponent {
  @Input() scrolllink: Scrolllink;
}
