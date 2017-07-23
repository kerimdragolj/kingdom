import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;
  confPassword: String;

  constructor(
    private validateService: ValidateService,
    private flashMessages: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password,
        confPassword: this.confPassword
    }

    if(!this.validateService.validateName(user.name)) {
      this.flashMessages.show('Please use a-zA-z characters', {cssClass:'alert-danger', timeout:3000})
      return false;
    }

    if(!this.validateService.validateUsername(user.username)) {
      this.flashMessages.show('Invalid username, please use only alphanumeric characters', {cssClass:'alert-danger', timeout:3000});
      return false;
    }

    if(!this.validateService.validateEmail(user.email)) {
      this.flashMessages.show('Invalid email', {cssClass:'alert-danger', timeout:3000});
      return false;
    }

    if(!this.validateService.validatePasswords(user.password, user.confPassword)) {
      this.flashMessages.show('Passwords doesnt match', {cssClass:'alert-danger', timeout:3000});
      return false;
    }

    //Submit user to backend and register it
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.flashMessages.show('You successfully registered', {cssClass:'alert-success', timeout:5000});
        this.router.navigate(['/login']);
      }else{
        this.flashMessages.show('Something went wrong, try again later', {cssClass:'alert-danger', timeout:3000});
        this.router.navigate(['/register']);
      }
    });

  }

  //red input field warning on password
  onPasswordInput(password, confPassword) {
    if(password === confPassword) {
      document.getElementById("confPassword").className = "form-control";
    } else {
      document.getElementById("confPassword").className = "form-control danger";
    }
  }

}
