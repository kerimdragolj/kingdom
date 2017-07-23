import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }


  validatePasswords(pass, confPass) {
    if(pass != confPass) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }

  validateName(name) {
    const re = /^[a-zA-Z -]+$/;
    return re.test(name);
  }

  validateUsername(username) {
    const re = /^[a-zA-Z0-9]+$/
    return re.test(username);
  }


}
