import {
  Component,
  AfterViewInit,
  ViewChild,
  ViewChildren,
  ElementRef,
  QueryList,
  OnInit
} from "@angular/core";
import { KeysPipe } from "./pipes/keys.pipe";
import * as $ from "jquery";
import * as imagesLoaded from "imagesloaded";
import * as Isotope from "isotope-layout";
import "magnific-popup";
import { FilterLinkComponent } from "./filter-link.component";
import "../assets/css/magnific-popup.css";

@Component({
  selector: "portfolio",
  template: `
    <section id="portfolio" class="portfolio-area portfolio-four pb-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-10">
            <div class="section-title text-center pb-10">
              <h3 class="title">Featured Works</h3>
              <p class="text">
                Stop wasting time and money designing and managing a website
                that doesn’t get results. Happiness guaranteed!
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-3">
            <div class="portfolio-menu text-center mt-50">
              <ul>
                <filter-link
                  #filterLi
                  *ngFor="let f of filters | keys"
                  [key]="f"
                  [active]="filters[f].active"
                  [attr.data-filter]="getFilterDataType(f)"
                  (click)="filterProjs(f)"
                ></filter-link>
              </ul>
            </div>
          </div>
          <div class="col-lg-9 col-md-9">
            <div #grid class="row no-gutters grid mt-50">
              <div
                *ngFor="let p of projects"
                class="col-lg-4 col-sm-6 {{ getProjTypeClasses(p.types) }}"
              >
                <div class="single-portfolio">
                  <div class="portfolio-image">
                    <img src="{{ p.imgurl }}" alt="" />
                    <div
                      class="portfolio-overlay d-flex align-items-center justify-content-center"
                    >
                      <div class="portfolio-content">
                        <div class="portfolio-icon">
                          <a class="image-popup" href="{{ p.imgurl }}"
                            ><i class="lni lni-zoom-in"></i
                          ></a>
                          <img
                            src="assets/images/portfolio/shape.svg"
                            alt="shape"
                            class="shape"
                          />
                        </div>
                        <div class="portfolio-icon">
                          <a href="#"><i class="lni lni-link"></i></a>
                          <img
                            src="assets/images/portfolio/shape.svg"
                            alt="shape"
                            class="shape"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  providers: [KeysPipe]
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  public filters: any;
  public projects: any;
  public projGrid: Isotope;
  @ViewChild("grid") grid: ElementRef;
  @ViewChildren("filterLi") filterLi: QueryList<FilterLinkComponent>;
  constructor(private keysPipe: KeysPipe) {}
  ngOnInit() {
    this.filters = {
      "ALL WORK": { class: "*", active: true },
      BRANDING: { class: "branding-4", active: false },
      MARKETING: { class: "marketing-4", active: false },
      PLANNING: { class: "planning-4", active: false },
      RESEARCH: { class: "research-4", active: false }
    };
    this.projects = [
      {
        types: ["BRANDING", "PLANNING"],
        imgurl: "assets/images/portfolio/1.png"
      },
      {
        types: ["MARKETING", "RESEARCH"],
        imgurl: "assets/images/portfolio/2.png"
      },
      {
        types: ["BRANDING", "MARKETING"],
        imgurl: "assets/images/portfolio/3.png"
      },
      {
        types: ["PLANNING", "RESEARCH"],
        imgurl: "assets/images/portfolio/4.png"
      },
      { types: ["MARKETING"], imgurl: "assets/images/portfolio/5.png" },
      { types: ["PLANNING"], imgurl: "assets/images/portfolio/6.png" },
      { types: ["RESEARCH"], imgurl: "assets/images/portfolio/7.png" },
      {
        types: ["BRANDING", "PLANNING"],
        imgurl: "assets/images/portfolio/8.png"
      },
      { types: ["MARKETING"], imgurl: "assets/images/portfolio/9.png" }
    ];
  }
  ngAfterViewInit() {
    imagesLoaded.makeJQueryPlugin($);

    $(".container").imagesLoaded(() => {
      $(".image-popup").magnificPopup({
        type: "image",
        gallery: {
          enabled: true
        }
      });
      this.projGrid = new Isotope(this.grid.nativeElement, {
        transitionDuration: "1s"
      });
    });
  }
  filterProjs(f: string) {
    this.filterLi.forEach((x) => (x.active = x.key === f ? true : false));
    this.projGrid.arrange({ filter: this.getFilterDataType(f) });
  }
  getFilterDataType(f: string) {
    return f === this.keysPipe.transform(this.filters, [])[0]
      ? this.filters[f].class
      : "." + this.filters[f].class;
  }
  getProjTypeClasses(types: Array<string>) {
    return types.map((x) => this.filters[x].class).join(" ");
  }
}
