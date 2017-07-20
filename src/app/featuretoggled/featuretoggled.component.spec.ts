import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturetoggledComponent } from './featuretoggled.component';

describe('FeaturetoggledComponent', () => {
  let component: FeaturetoggledComponent;
  let fixture: ComponentFixture<FeaturetoggledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturetoggledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturetoggledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
