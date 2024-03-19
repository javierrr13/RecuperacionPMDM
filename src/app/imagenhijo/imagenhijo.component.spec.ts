import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenhijoComponent } from './imagenhijo.component';

describe('ImagenhijoComponent', () => {
  let component: ImagenhijoComponent;
  let fixture: ComponentFixture<ImagenhijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenhijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenhijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
