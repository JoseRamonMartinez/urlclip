import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { I18nModule } from '@app/i18n';

@NgModule({
  imports: [CommonModule, FormsModule, TranslateModule, I18nModule, SharedModule, IonicModule, HomeRoutingModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
