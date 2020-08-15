import { Component, AfterViewInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { PageScrollService } from "ngx-page-scroll-core";

@Component({
  selector: "topscroller",
  template: `
    <button
      [ngStyle]="{ opacity: opac, display: disp }"
      class="back-to-top"
      (click)="topscrollerClick()"
    >
      <i class="lni lni-chevron-up"></i>
    </button>
  `
})
export class TopscrollerComponent implements AfterViewInit {
  private opac: number;
  private opacInterval: number;
  private displayed: boolean;
  constructor(
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any
  ) {}
  ngOnInit() {
    this.opac = 0;
    this.displayed = false;
    this.displayCheck();
  }
  ngAfterViewInit() {
    window.addEventListener("scroll", () => this.displayCheck());
  }
  displayCheck() {
    if (window.scrollY > 600 && this.displayed === false) {
      this.displayed = true;
      this.stepOpac(1);
    } else if (window.scrollY <= 600 && this.displayed === true) {
      this.displayed = false;
      this.stepOpac(0);
    }
  }
  stepOpac(finish) {
    clearInterval(this.opacInterval);
    const vals = [0, 1],
      finishVal = vals.includes(finish) ? finish : 1;

    var startVal = this.opac,
      stepVal;

    if (finishVal === 1) this.disp = "inline";

    this.opacInterval = window.setInterval(() => {
      stepVal = Math.min(Math.abs(startVal - finishVal), 0.1);
      if (finishVal === 0) startVal -= stepVal;
      else startVal += stepVal;
      this.opac = startVal;
      // console.log("running");
      if (startVal === finishVal || stepVal < 0.1) {
        clearInterval(this.opacInterval);
        this.opac = finishVal;
        if (finishVal === 0) this.disp = "none";
      }
    }, 25);
  }
  topscrollerClick() {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: "#home",
      duration: 500
    });
  }
}
