import { Injectable } from '@angular/core';

import { Settings } from '../models/Settings';


@Injectable()
export class SettingsService {

  settings:Settings = {
    allowRegistration:true,
    disableBalanceOnAdd:true,
    disableBalanceOnEdit:true
  }

  constructor() {
    if(localStorage.getItem('setting') != null){
      this.settings = JSON.parse(localStorage.getItem('setting'));
    }else{

    }
   }

  getSettings(){
    return this.settings;
  }

  changeSettings(settings:Settings){
    localStorage.setItem('setting', JSON.stringify(settings));
  }

  

}
