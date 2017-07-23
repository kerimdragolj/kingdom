import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:String;
  password:String;

  constructor(
    private authService: AuthService,
    private flashMessages: FlashMessagesService,
    private router: Router
    ) { }

  ngOnInit() { }

  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    };

    this.authService.authenticateUser(user).subscribe(res => {
      if(res.success) {
        this.authService.storeData(res.token, res.user);
        this.flashMessages.show('Successfully logged in!', {cssClass:'alert-success', timeout:3000});
        this.router.navigate(['dashboard'])
      } else {
        this.flashMessages.show(res.msg, {cssClass:'alert-danger', timeout:5000});
      }
    });
  }
}
