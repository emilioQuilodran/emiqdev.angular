import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private emailService: EmailService){}
  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([ Validators.required, Validators.email])],
      message: ['', Validators.required]
    });

    this.contactForm.valueChanges.subscribe(
      (values) => {
        //console.log(values)
      } // console.log

    )
  }

  get email(){
    return this.contactForm.get('email')
  }

  get name(){
    return this.contactForm.get('name')
  }

  get message(){
    return this.contactForm.get('message')
  }

  submitForm(e: Event, formData: FormGroup){
    e.preventDefault()
    if(this.contactForm.valid){
      console.log(this.contactForm.value)
      this.emailService.SendEmail(formData)
        .subscribe( (response) => {
          location.href = 'https://mailthis.to/confirm'
          console.log(response)
        }, (error) => {
          console.warn(error.responseText)
          console.log({ error })
        }, () => {
          this.contactForm.reset()
        } )
    }
  }
}
