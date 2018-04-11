import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Settings } from '../../models/Settings';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  settings:Settings;

  constructor(
    public flashMessagesService:FlashMessagesService,
    public router:Router,
    public settingsService:SettingsService
  ) { }

  ngOnInit() {
    this.settings =  this.settingsService.getSettings();
  }

  onSubmit(){
    this.settingsService.changeSettings(this.settings);
    this.flashMessagesService.show('Settings saved', {
      cssClass:'alert-success',timeout:4000
    });
    this.router.navigate(['/settings']);
  }

}
