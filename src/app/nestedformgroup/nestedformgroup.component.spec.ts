import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedformgroupComponent } from './nestedformgroup.component';

describe('NestedformgroupComponent', () => {
  let component: NestedformgroupComponent;
  let fixture: ComponentFixture<NestedformgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedformgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedformgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
