import { Component, OnInit } from "@angular/core";
@Component({
  selector: "team",
  template: `
    <section id="team" class="team-area pt-120 pb-130">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-10">
            <div class="section-title text-center pb-30">
              <h3 class="title">Meet The Team</h3>
              <p class="text">
                Stop wasting time and money designing and managing a website
                that doesn’t get results. Happiness guaranteed!
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div *ngFor="let t of teamCards" class="col-lg-4 col-sm-6">
            <div
              class="team-style-eleven text-center mt-30 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0s"
            >
              <div class="team-image">
                <img src="{{ t.image }}" alt="Team" />
              </div>
              <div class="team-content">
                <div class="team-social">
                  <ul class="social">
                    <li>
                      <a href="#"><i class="lni lni-facebook-filled"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="lni lni-twitter-original"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="lni lni-linkedin-original"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="lni lni-instagram"></i></a>
                    </li>
                  </ul>
                </div>
                <h4 class="team-name">
                  <a href="#">{{ t.name }}</a>
                </h4>
                <span class="sub-title">{{ t.subTitle }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class TeamComponent implements OnInit {
  private teamCards: any;
  ngOnInit() {
    this.teamCards = [
      {
        image: "assets/images/team-1.jpg",
        name: "Jeffery Riley",
        subTitle: "Art Director"
      },
      {
        image: "assets/images/team-2.jpg",
        name: "Riley Beata",
        subTitle: "Web Developer"
      },
      {
        image: "assets/images/team-3.jpg",
        name: "Mark A. Parker",
        subTitle: "UX Designer"
      }
    ];
  }
}
