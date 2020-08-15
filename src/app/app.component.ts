import { Component, OnInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Router, Event, NavigationEnd } from "@angular/router";
// import "modernizr";
import { PageScrollService } from "ngx-page-scroll-core";

@Component({
  selector: "app-root",
  template: `
    <preloader></preloader>
    <navbar></navbar>
    <home></home>
    <services></services>
    <portfolio></portfolio>
    <pricing></pricing>
    <about></about>
    <testimonial></testimonial>
    <team></team>
    <contact></contact>
    <app-footer></app-footer>
    <topscroller></topscroller>
  `
})
export class AppComponent implements OnInit {
  private faqs: any;
  constructor(
    private router: Router,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const hash = window.location.hash;
        if (hash) {
          this.pageScrollService.scroll({
            document: this.document,
            scrollTarget: hash
          });
        }
      }
    });
  }
}
