import { Component, OnInit } from "@angular/core";

@Component({
  selector: "pricing",
  template: `
    <section id="pricing" class="pricing-area ">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-10">
            <div class="section-title text-center pb-25">
              <h3 class="title">Pricing Plans</h3>
              <p class="text">
                Stop wasting time and money designing and managing a website
                that doesn’t get results. Happiness guaranteed!
              </p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <price-card
            *ngFor="let p of priceCards"
            class="col-lg-4 col-md-7 col-sm-9"
            [imgSrc]="p.imgSrc"
            [subTitle]="p.subTitle"
            [price]="p.price"
          ></price-card>
        </div>
      </div>
    </section>
  `
})
export class PricingComponent implements OnInit {
  private priceCards: any;
  ngOnInit() {
    this.priceCards = [
      { imgSrc: "assets/images/basic.svg", subTitle: "Basic", price: "$ 199" },
      { imgSrc: "assets/images/pro.svg", subTitle: "Pro", price: "$ 399" },
      {
        imgSrc: "assets/images/enterprise.svg",
        subTitle: "Enterprise",
        price: "$ 699"
      }
    ];
  }
}
