import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { ContactService } from "./services/contact.service";

@Component({
  selector: "contact-form",
  template: `
    <div class="contact-wrapper form-style-two pt-115">
      <h4 class="contact-title pb-10">
        <i class="lni lni-envelope"></i> Leave <span>A Message.</span>
      </h4>
      <form [formGroup]="formData" (ngSubmit)="onSubmit(formData.value)">
        <div class="row">
          <div class="col-md-6">
            <div class="form-input mt-25">
              <label for="name">Name</label>
              <div class="input-items default">
                <input
                  name="name"
                  type="text"
                  class="form-control"
                  formControlName="name"
                  placeholder="Name"
                />
                <i class="lni lni-user"></i>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-input mt-25">
              <label for="email">Email</label>
              <div class="input-items default">
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  formControlName="email"
                  placeholder="Email"
                />
                <i class="lni lni-envelope"></i>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-input mt-25">
              <label for="message">Message</label>
              <div class="input-items default">
                <textarea
                  name="message"
                  class="form-control"
                  formControlName="message"
                  placeholder="Message"
                ></textarea>
                <i class="lni lni-pencil-alt"></i>
              </div>
            </div>
          </div>
          <p #formMessage class="form-message"></p>
          <div class="col-md-12">
            <div class="form-input light-rounded-buttons mt-30">
              <button
                class="main-btn light-rounded-two"
                [disabled]="!formData.valid"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  `
})
export class ContactFormComponent implements OnInit {
  @ViewChild("formMessage") formMessage: ElementRef;
  formData: FormGroup;

  constructor(private builder: FormBuilder, private contact: ContactService) {}
  ngOnInit() {
    this.formData = this.builder.group({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [
        Validators.compose([Validators.required, Validators.email])
      ]),
      message: new FormControl("", [Validators.required])
    });
  }
  onSubmit(formData) {
    this.contact.postMessage(formData).subscribe(
      (response) => {
        // window.location.href = "https://mailthis.to/confirm";
        this.formMessage.nativeElement.classList.remove("error");
        this.formMessage.nativeElement.classList.add("success");
        // this.formMessage.nativeElement.textContent = response;
        this.formMessage.nativeElement.textContent = "Message sent!";
        this.formData.reset();
      },
      (error) => {
        console.warn(error.responseText);
        console.log({ error });
        this.formMessage.nativeElement.classList.remove("succes");
        this.formMessage.nativeElement.classList.add("error");

        if (error.responseText !== "") {
          this.formMessage.nativeElement.textContent = error.responseText;
        } else {
          this.formMessage.nativeElement.textContent =
            "Oops! An error occured and your message could not be sent.";
        }
      }
    );
  }
}
