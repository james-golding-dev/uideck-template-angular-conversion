import { Component, OnInit } from "@angular/core";

@Component({
  selector: "about",
  template: `
    <section id="about" class="about-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="faq-content mt-45">
              <div class="about-title">
                <h6 class="sub-title">A Little More About Us</h6>
                <h4 class="title">
                  Frequently Asked Questions <br />
                  About Our Site
                </h4>
              </div>
              <div class="about-accordion">
                <div class="accordion" id="accordionExample">
                  <faq-card
                    *ngFor="let f of faqs"
                    [headingId]="f.headingId"
                    [linkText]="f.linkText"
                    [bodyText]="f.bodyText"
                    [dataTarget]="f.dataTarget"
                    [expanded]="f.expanded"
                  ></faq-card>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="about-image mt-50">
              <img src="assets/images/about.jpg" alt="about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent implements OnInit {
  private faqs: any;
  ngOnInit() {
    this.faqs = [
      {
        headingId: "headingOne",
        linkText: "Frequently Asked Question One",
        bodyText:
          "Morbi vehicula arcu et pellentesque tincidunt. Nunc ligula nulla, lobortis a elementum non, vulputate ut arcu. Aliquam erat volutpat. Nullam lacinia felis.",
        dataTarget: "collapseOne",
        expanded: true
      },
      {
        headingId: "headingTwo",
        linkText: "Frequently Asked Question Two",
        bodyText:
          "Morbi vehicula arcu et pellentesque tincidunt. Nunc ligula nulla, lobortis a elementum non, vulputate ut arcu. Aliquam erat volutpat. Nullam lacinia felis.",
        dataTarget: "collapseTwo",
        expanded: false
      },
      {
        headingId: "headingThree",
        linkText: "Frequently Asked Question Three",
        bodyText:
          "Morbi vehicula arcu et pellentesque tincidunt. Nunc ligula nulla, lobortis a elementum non, vulputate ut arcu. Aliquam erat volutpat. Nullam lacinia felis.",
        dataTarget: "collapseThree",
        expanded: false
      },
      {
        headingId: "headingFour",
        linkText: "Frequently Asked Question Four",
        bodyText:
          "Morbi vehicula arcu et pellentesque tincidunt. Nunc ligula nulla, lobortis a elementum non, vulputate ut arcu. Aliquam erat volutpat. Nullam lacinia felis.",
        dataTarget: "collapseFour",
        expanded: false
      },
      {
        headingId: "headingFive",
        linkText: "Frequently Asked Question Five",
        bodyText:
          "Morbi vehicula arcu et pellentesque tincidunt. Nunc ligula nulla, lobortis a elementum non, vulputate ut arcu. Aliquam erat volutpat. Nullam lacinia felis.",
        dataTarget: "collapseFive",
        expanded: false
      }
    ];
  }
}
