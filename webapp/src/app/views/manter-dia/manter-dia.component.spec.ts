import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterDiaComponent } from './manter-dia.component';

describe('ManterDiaComponent', () => {
  let component: ManterDiaComponent;
  let fixture: ComponentFixture<ManterDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManterDiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
