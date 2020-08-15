import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ContactService } from "./services/contact.service";
import { AppComponent } from "./app.component";
import { PreloaderComponent } from "./preloader.component";
import { NavbarComponent } from "./navbar.component";
import { ScrolllinkComponent } from "./scrolllink.component";
import { HomeComponent } from "./home.component";
import { HomeCarouselComponent } from "./home-carousel.component";
import { ServicesComponent } from "./services.component";
import { PortfolioComponent } from "./portfolio.component";
import { FilterLinkComponent } from "./filter-link.component";
import { PricingComponent } from "./pricing.component";
import { PriceCardComponent } from "./price-card.component";
import { AboutComponent } from "./about.component";
import { FaqCardComponent } from "./faq-card.component";
import { TestimonialComponent } from "./testimonial.component";
import { TeamComponent } from "./team.component";
import { ContactComponent } from "./contact.component";
import { ContactFormComponent } from "./contact-form.component";
import { FooterComponent } from "./footer.component";
import { TopscrollerComponent } from "./topscroller.component";
import { AppRoutingModule } from "./routing.module";
import { NgxPageScrollModule } from "ngx-page-scroll";
import { KeysPipe } from "./pipes/keys.pipe";

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    NavbarComponent,
    ScrolllinkComponent,
    HomeComponent,
    HomeCarouselComponent,
    ServicesComponent,
    PortfolioComponent,
    FilterLinkComponent,
    PricingComponent,
    PriceCardComponent,
    AboutComponent,
    FaqCardComponent,
    TestimonialComponent,
    TeamComponent,
    ContactComponent,
    ContactFormComponent,
    FooterComponent,
    TopscrollerComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPageScrollModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule {}
