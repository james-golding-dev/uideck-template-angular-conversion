import { Component, Input } from "@angular/core";

@Component({
  selector: "price-card",
  template: `
    <div class="pricing-style mt-30">
      <div class="pricing-icon text-center">
        <img src="{{ imgSrc }}" alt="" />
      </div>
      <div class="pricing-header text-center">
        <h5 class="sub-title">{{ subTitle }}</h5>
        <p class="month">
          <span class="price">{{ price }}</span
          >/month
        </p>
      </div>
      <div class="pricing-list">
        <ul>
          <li>
            <i class="lni lni-checkmark-circle"></i> Carefully crafted
            components
          </li>
          <li>
            <i class="lni lni-checkmark-circle"></i> Amazing page examples
          </li>
        </ul>
      </div>
      <div class="pricing-btn rounded-buttons text-center">
        <a class="main-btn rounded-one" href="#">GET STARTED</a>
      </div>
    </div>
  `
})
export class PriceCardComponent {
  @Input() imgSrc: string;
  @Input() subTitle: string;
  @Input() price: string;
}
