import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  title;
  firstName;
  lastName;
  email;
  address;
  dateOfBirth;
  gender;
  phoneNumber;
  formdata;
  requiredForm: FormGroup;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      title: new FormControl(),
      firstName: new FormControl(), //local variable for new instance
      lastName: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
      gender: new FormControl(),
      phoneNumber: new FormControl(),
      dateOfBirth: new FormControl()
    });
  }
  onClickSubmit(data) {
    this.title = data.title;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.address = data.address;
    this.dateOfBirth = data.dateOfBirth;
    this.phoneNumber = data.phoneNumber;
    this.gender = data.gender;
    console.log(this.title)
    console.log(this.firstName)
    console.log(this.lastName)
    console.log(this.email)
    console.log(this.dateOfBirth)
    console.log(this.phoneNumber)
    console.log(this.gender)
  }
}

