import { Component, AfterViewInit } from "@angular/core";

@Component({
  selector: "preloader",
  template: `
    <div [ngStyle]="{ opacity: opac, display: disp }" class="preloader">
      <div class="loader">
        <div class="ytp-spinner">
          <div class="ytp-spinner-container">
            <div class="ytp-spinner-rotator">
              <div class="ytp-spinner-left">
                <div class="ytp-spinner-circle"></div>
              </div>
              <div class="ytp-spinner-right">
                <div class="ytp-spinner-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class PreloaderComponent implements AfterViewInit {
  ngAfterViewInit() {
    const preloaderTimeOut: number = window.setTimeout(() => {
      clearTimeout(preloaderTimeOut);

      let opacVal: number = 1;
      const opacInterval: number = window.setInterval(() => {
        this.opac = opacVal.toString();
        opacVal -= 0.1;
        if (opacVal <= 0) {
          clearInterval(opacInterval);
          this.disp = "none";
        }
      }, 25);
    }, 2500);
  }
}
