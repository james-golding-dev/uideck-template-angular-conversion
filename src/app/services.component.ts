import { Component, OnInit } from "@angular/core";

@Component({
  selector: "services",
  template: `
    <section id="services" class="features-area">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-10">
            <div class="section-title text-center pb-10">
              <h3 class="title">Our Services</h3>
              <p class="text">
                Stop wasting time and money designing and managing a website
                that doesn’t get results. Happiness guaranteed!
              </p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div
            *ngFor="let s of serviceCards"
            class="col-lg-4 col-md-7 col-sm-9"
          >
            <div class="single-features mt-40">
              <div class="features-title-icon d-flex justify-content-between">
                <h4 class="features-title">
                  <a href="#">{{ s.cardTitle }}</a>
                </h4>
                <div class="features-icon">
                  <i class="lni {{ s.iconClass }}"></i>
                  <img
                    class="shape"
                    src="assets/images/f-shape-1.svg"
                    alt="Shape"
                  />
                </div>
              </div>
              <div class="features-content">
                <p class="text">{{ s.desc }}</p>
                <a class="features-btn" href="#">LEARN MORE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent implements OnInit {
  private serviceCards: any;
  ngOnInit() {
    this.serviceCards = [
      {
        cardTitle: "Graphics Design",
        iconClass: "lni-brush",
        desc:
          "Short description for the ones who look for something new. Short description for the ones who look for something new."
      },
      {
        cardTitle: "Website Design",
        iconClass: "lni-layout",
        desc:
          "Short description for the ones who look for something new. Short description for the ones who look for something new."
      },
      {
        cardTitle: "Digital Marketing",
        iconClass: "lni-bolt",
        desc:
          "Short description for the ones who look for something new. Short description for the ones who look for something new."
      }
    ];
  }
}
