import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensePlateComponent } from './license-plate.component';
import { CurrencyRendererPipe } from '../../../solutions/lab10/currency-renderer.pipe';
import { CurrencyService } from 'app/currency.service';
import { By } from '@angular/platform-browser';

fdescribe('LicensePlateComponent', () => {
  let component: LicensePlateComponent;
  let fixture: ComponentFixture<LicensePlateComponent>;

  const myFakeCurrencyService = {
    getCurrent: () => { },
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LicensePlateComponent, CurrencyRendererPipe],
      providers: [{ provide: CurrencyService, useValue: myFakeCurrencyService }]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicensePlateComponent);
    component = fixture.componentInstance;
    component.plate =
      {
        "_id": "5a0c8ab2fea86aa6a3180710",
        "onSale": true,
        "picture": "http://angulartraining.com/plates/NJ.jpg",
        "title": "2015 New Jersey license plate",
        "price": 11,
        "year": 2015,
        "state": "NJ",
        "description": "A beautiful license plate from the Garden State. Year is 2015. \r\n"
      },
      fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the right license plate title', () => {
    const titleFixture = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(titleFixture.innerText).toEqual('2015 New Jersey license plate');
  });
});
