import { UserService } from './../services/user.service';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  user: User = new User();
 userForm: FormGroup;
 submitted = false;
  constructor(public userService: UserService,public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      username: [],
      password: ['', [Validators.required]]
    });
  }
  get errorCtr() {
    return this.userForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.userForm.valid) {
      console.log('All fields are required.');
      return false;
    } else {
      console.log(this.user);
    }
  }

}
