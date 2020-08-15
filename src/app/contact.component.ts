import { Component, OnInit } from "@angular/core";

@Component({
  selector: "contact",
  template: `
    <section id="contact" class="contact-area">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-10">
            <div class="section-title text-center pb-30">
              <h3 class="title">Contact</h3>
              <p class="text">
                Stop wasting time and money designing and managing a website
                that doesn’t get results. Happiness guaranteed!
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="contact-map mt-30">
              <iframe
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Mission%20District%2C%20San%20Francisco%2C%20CA%2C%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>
        </div>
        <div class="contact-info pt-30">
          <div class="row">
            <div *ngFor="let c of contactMethods" class="col-lg-4 col-md-6">
              <div
                class="single-contact-info contact-color-{{
                  c.colorClass
                }} mt-30 d-flex "
              >
                <div class="contact-info-icon">
                  <i class="lni lni-{{ c.iconClass }}"></i>
                </div>
                <div class="contact-info-content media-body">
                  <p
                    *ngFor="let m of c.contacts"
                    class="text"
                    style="white-space:pre;"
                  >
                    {{ m }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <contact-form></contact-form>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent implements OnInit {
  private contactMethods: any;
  ngOnInit() {
    this.contactMethods = [
      {
        colorClass: "1",
        iconClass: "map-marker",
        contacts: ["Elizabeth St, Melbourne \n 1202 Australia."]
      },
      {
        colorClass: "2",
        iconClass: "envelope",
        contacts: ["hello@ayroui.com", "support@uideck.com"]
      },
      {
        colorClass: "3",
        iconClass: "phone",
        contacts: ["+333 789-321-654", "+333 985-458-609"]
      }
    ];
  }
}
