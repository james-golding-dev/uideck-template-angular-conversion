import { Component, Input } from "@angular/core";

@Component({
  selector: "faq-card",
  template: `
    <div class="card">
      <div class="card-header" id="{{ headingId }}">
        <button
          data-toggle="collapse"
          attr.data-target="#{{ dataTarget }}"
          attr.aria-expanded="{{ expanded }}"
          attr.aria-controls="{{ dataTarget }}"
          class="{{ !expanded ? 'collapsed' : '' }}"
        >
          {{ linkText }}
        </button>
      </div>
      <div
        id="{{ dataTarget }}"
        class="collapse{{ expanded ? ' show' : '' }}"
        attr.aria-labelledby="{{ headingId }}"
        data-parent="#accordionExample"
      >
        <div class="card-body">
          <p class="text">
            {{ bodyText }}
          </p>
        </div>
      </div>
    </div>
  `
})
export class FaqCardComponent {
  @Input() headingId: string;
  @Input() linkText: string;
  @Input() bodyText: string;
  @Input() dataTarget: string;
  @Input() expanded: boolean;
}
