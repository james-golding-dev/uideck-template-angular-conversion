import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Input
} from "@angular/core";
import * as $ from "jquery";
import "bootstrap";

@Component({
  selector: "home-carousel",
  template: `
    <div
      #carousel
      id="{{ carouselId }}"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          *ngFor="let s of slides; let i = index"
          attr.data-target="{{ '#' + carouselId }}"
          attr.data-slide-to="{{ i }}"
          class="{{ s.active ? ' active' : '' }}"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div
          *ngFor="let s of slides"
          class="carousel-item{{ s.active ? ' active' : '' }}"
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="slider-content">
                  <h1 class="title">{{ s.title }}</h1>
                  <p class="text">{{ s.text }}</p>
                  <ul class="slider-btn rounded-buttons">
                    <li>
                      <a class="main-btn rounded-one" href="#">GET STARTED</a>
                    </li>
                    <li>
                      <a class="main-btn rounded-two" href="#">DOWNLOAD</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="slider-image-box d-none d-lg-flex align-items-end">
            <div class="slider-image">
              <img src="{{ s.imgUrl }}" alt="Hero" />
            </div>
          </div>
        </div>
      </div>

      <a
        class="carousel-control-prev"
        href="#{{ carouselId }}"
        role="button"
        data-slide="prev"
      >
        <i class="lni lni-arrow-left"></i>
      </a>
      <a
        class="carousel-control-next"
        href="#{{ carouselId }}"
        role="button"
        data-slide="next"
      >
        <i class="lni lni-arrow-right"></i>
      </a>
    </div>
  `
})
export class HomeCarouselComponent implements AfterViewInit {
  @Input() carouselId: string;
  @Input() slides: any;
  @ViewChild("carousel") carousel: ElementRef;
  ngAfterViewInit() {
    $(this.carousel.nativeElement).carousel();
  }
}
