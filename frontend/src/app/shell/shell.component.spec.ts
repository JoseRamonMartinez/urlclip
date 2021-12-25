import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { I18nModule } from '@app/i18n';
import { ShellComponent } from './shell.component';
import { HomeComponent } from '@app/home/components/home.component';
import { HomeModule } from '@app/home/home.module';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          TranslateModule.forRoot(),
          I18nModule,
          IonicModule.forRoot(),
          HomeModule,
          RouterTestingModule,
        ],
        providers: [],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        declarations: [ShellComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
