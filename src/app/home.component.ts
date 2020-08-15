import { Component, OnInit } from "@angular/core";

@Component({
  selector: "home",
  template: `
    <section id="home" class="slider_area">
      <home-carousel
        [carouselId]="carouselId"
        [slides]="slides"
      ></home-carousel>
    </section>
  `
})
export class HomeComponent implements OnInit {
  carouselId: string;
  slides: any;
  ngOnInit(): void {
    this.carouselId = "carouselThree";
    this.slides = [
      {
        title: "Business is Now Digital",
        text:
          "We blend insights and strategy to create digital products for forward-thinking organisations.",
        imgUrl: "./assets/images/slider/1.png",
        active: true
      },
      {
        title: "Crafted for Business",
        text:
          "We blend insights and strategy to create digital products for forward-thinking organisations.",
        imgUrl: "./assets/images/slider/2.png"
      },
      {
        title: "Based on Bootstrap 4",
        text:
          "We blend insights and strategy to create digital products for forward-thinking organisations.",
        imgUrl: "./assets/images/slider/3.png"
      }
    ];
  }
}
