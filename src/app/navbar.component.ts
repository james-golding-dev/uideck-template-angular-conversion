import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ViewChildren,
  QueryList,
  AfterViewInit
} from "@angular/core";
import { Router, Event, NavigationEnd } from "@angular/router";
import { Scrolllink } from "./models/scrolllink.interface";
import { ScrolllinkComponent } from "./scrolllink.component";

@Component({
  selector: "navbar",
  template: `
    <section class="navbar-area" [class.sticky]="isSticky">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg">
              <a class="navbar-brand" href="#">
                <img [src]="logoSrc" alt="Logo" />
              </a>

              <button
                (click)="togClick()"
                class="navbar-toggler"
                [class.active]="navTog"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTwo"
                aria-controls="navbarTwo"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
              </button>

              <div
                #navMenu
                class="collapse navbar-collapse sub-menu-bar"
                id="navbarTwo"
              >
                <ul class="navbar-nav m-auto">
                  <scrolllink
                    *ngFor="let link of scrollLinkData"
                    [scrolllink]="link"
                  ></scrolllink>
                </ul>
              </div>

              <div class="navbar-btn d-none d-sm-inline-block">
                <ul>
                  <li><a class="solid" href="#">Download</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  `
})
export class NavbarComponent implements OnInit, AfterViewInit {
  public scrollLinkData: Scrolllink[];

  constructor(private router: Router) {
    this.scrollLinkData = new Array<Scrolllink>();
  }
  @ViewChild("navMenu") navMenu: ElementRef;
  @ViewChildren(ScrolllinkComponent) scrollLinks: QueryList<
    ScrolllinkComponent
  >;
  logoSrc: string = "assets/images/logo.svg";
  isSticky: boolean;
  navTog: boolean;
  ngOnInit() {
    this.scrollLinkData = [
      { target: "home", text: "Home", active: false },
      { target: "services", text: "Services", active: false },
      { target: "portfolio", text: "Portfolio", active: false },
      { target: "pricing", text: "Pricing", active: false },
      { target: "about", text: "About", active: false },
      { target: "team", text: "Team", active: false },
      { target: "contact", text: "Contact", active: false }
    ];

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.navMenu.nativeElement.classList.remove("show");
        this.navTog = false;
        this.checkNavStick();
        this.underlineSectionLink();
      }
    });
  }
  ngAfterViewInit() {
    window.addEventListener("scroll", () => {
      this.checkNavStick();
      this.underlineSectionLink();
    });
  }
  underlineSectionLink() {
    const scrollbarLocation: number = window.scrollY;
    var link: Scrolllink,
      targ: string,
      latest: Scrolllink,
      sectionOffset: number;

    for (var x = 0, y = this.scrollLinks.length; x < y; x++) {
      link = this.scrollLinks.find((_, i) => i === x).scrolllink;
      targ = link.target;
      sectionOffset = document.getElementById(`${targ}`).offsetTop - 73;

      if (sectionOffset <= scrollbarLocation) latest = link;
      else break;
    }

    this.scrollLinks.forEach((x) => {
      if (x.scrolllink === latest) x.scrolllink.active = true;
      else x.scrolllink.active = false;
    });
  }
  togClick() {
    if (this.navMenu.nativeElement.classList.contains("show")) {
      this.navTog = false;
    } else this.navTog = true;
  }
  checkNavStick() {
    if (window.scrollY < 20) {
      this.isSticky = false;
      this.logoSrc = "assets/images/logo.svg";
    } else {
      this.isSticky = true;
      this.logoSrc = "assets/images/logo-2.svg";
    }
  }
}
