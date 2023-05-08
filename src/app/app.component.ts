import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { lastValueFrom } from 'rxjs';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-portfolio';
  currentLanguage: string = 'en';

  constructor(
    private translate: TranslateService,
    private apiService: ApiService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.setLanguage();
  }

  async setLanguage(): Promise<void> {
    const ipInfo$ = this.apiService.getIPInfo();
    const ipInfo = await lastValueFrom(ipInfo$);

    this.translate.setDefaultLang('en');
    if (ipInfo?.country_code?.toUpperCase() == 'AR') {
      this.translate.setDefaultLang('es');
      this.currentLanguage = 'es';
    };
  }

  changeLanguage(): void {
    if (this.currentLanguage == 'en') {
      this.translate.use('es');
      this.currentLanguage = 'es';
    } else {
      this.translate.use('en');
      this.currentLanguage = 'en';
    }
  }
}
