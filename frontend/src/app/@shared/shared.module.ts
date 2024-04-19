import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { LoaderComponent } from './loader/loader.component';
import { FilterPipe } from './pipes/filter.pipe';
import { HeaderComponent } from './header/header.component';
import { I18nComponent } from './i18n/i18n.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [IonicModule, TranslateModule, FormsModule, CommonModule],
  declarations: [LoaderComponent, HeaderComponent, I18nComponent, FilterPipe],
  exports: [LoaderComponent, HeaderComponent, I18nComponent, FilterPipe],
})
export class SharedModule {}

