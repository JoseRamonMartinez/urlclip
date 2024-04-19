import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { I18nService } from './i18n.service';
import { I18nComponent } from './i18n.component';

describe('I18nComponent', () => {
  let component: I18nComponent;
  let fixture: ComponentFixture<I18nComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot(), IonicModule.forRoot()],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        declarations: [I18nComponent],
        providers: [I18nService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(I18nComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
