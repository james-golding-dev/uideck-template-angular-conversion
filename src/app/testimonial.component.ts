import { Component, AfterViewInit, OnInit } from "@angular/core";
import * as $ from "jquery";
import "slick-carousel";
import "../assets/css/slick.css";

@Component({
  selector: "testimonial",
  template: `
    <section id="testimonial" class="testimonial-area">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-xl-5 col-lg-6">
            <div class="testimonial-left-content mt-45">
              <h6 class="sub-title">Testimonials</h6>
              <h4 class="title">
                What Clients Says <br />
                About Us
              </h4>
              <ul class="testimonial-line">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <p class="text">
                Duis et metus et massa tempus lacinia. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Maecenas ultricies, orci molestie blandit interdum.
                <br />
                <br />
                ipsum ante pellentesque nisl, eget mollis turpis quam nec eros.
                ultricies, orci molestie blandit interdum.
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="testimonial-right-content mt-50">
              <div class="quota">
                <i class="lni lni-quotation"></i>
              </div>
              <div class="testimonial-content-wrapper testimonial-active">
                <div *ngFor="let t of testimonials" class="single-testimonial">
                  <div class="testimonial-text">
                    <p class="text">{{ t.text }}</p>
                  </div>
                  <div
                    class="testimonial-author d-sm-flex justify-content-between"
                  >
                    <div class="author-info d-flex align-items-center">
                      <div class="author-image">
                        <img src="{{ t.authorImg }}" alt="author" />
                      </div>
                      <div class="author-name media-body">
                        <h5 class="name">{{ t.authorName }}</h5>
                        <span class="sub-title">{{ t.subTitle }}</span>
                      </div>
                    </div>
                    <div class="author-review">
                      <ul class="star">
                        <li>
                          <i
                            class="lni lni-star{{
                              t.stars >= 1 ? '-filled' : ''
                            }}"
                          ></i>
                        </li>
                        <li>
                          <i
                            class="lni lni-star{{
                              t.stars >= 2 ? '-filled' : ''
                            }}"
                          ></i>
                        </li>
                        <li>
                          <i
                            class="lni lni-star{{
                              t.stars >= 3 ? '-filled' : ''
                            }}"
                          ></i>
                        </li>
                        <li>
                          <i
                            class="lni lni-star{{
                              t.stars >= 4 ? '-filled' : ''
                            }}"
                          ></i>
                        </li>
                        <li>
                          <i
                            class="lni lni-star{{
                              t.stars === 5 ? '-filled' : ''
                            }}"
                          ></i>
                        </li>
                      </ul>
                      <span class="review">( {{ t.reviews }} Reviews )</span>
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
  styles: ["assets/css/slick.css"]
})
export class TestimonialComponent implements OnInit, AfterViewInit {
  private testimonials: any;
  ngOnInit() {
    this.testimonials = [
      {
        text:
          "Praesent scelerisque, odio eu fermentum malesuada, nisi arcu volutpat nisl, sit amet convallis nunc turp.",
        authorImg: "assets/images/author-1.jpg",
        authorName: "Mr. Jems Bond",
        subTitle: "CEO Mbuild Firm 1",
        stars: 4,
        reviews: 7
      },
      {
        text:
          "Praesent scelerisque, odio eu fermentum malesuada, nisi arcu volutpat nisl, sit amet convallis nunc turp.",
        authorImg: "assets/images/author-2.jpg",
        authorName: "Mr. Jems Bond",
        subTitle: "CEO Mbuild Firm 2",
        stars: 5,
        reviews: 4
      },
      {
        text:
          "Praesent scelerisque, odio eu fermentum malesuada, nisi arcu volutpat nisl, sit amet convallis nunc turp.",
        authorImg: "assets/images/author-3.jpg",
        authorName: "Mr. Jems Bond",
        subTitle: "CEO Mbuild Firm 3",
        stars: 3,
        reviews: 8
      }
    ];
  }
  ngAfterViewInit() {
    $(".testimonial-active").slick({
      dots: false,
      arrows: true,
      prevArrow: '<span class="prev"><i class="lni lni-arrow-left"></i></span>',
      nextArrow:
        '<span class="next"><i class="lni lni-arrow-right"></i></span>',
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 800,
      slidesToShow: 1
    });
  }
}
