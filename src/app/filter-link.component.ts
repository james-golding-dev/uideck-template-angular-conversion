import { Component, Input } from "@angular/core";

@Component({
  selector: "filter-link",
  template: ` <li [class.active]="active">{{ key }}</li> `
})
export class FilterLinkComponent {
  @Input() active: boolean;
  @Input() key: string;
}
