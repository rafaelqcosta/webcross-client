import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterBoxComponent } from './manter-box.component';

describe('ManterBoxComponent', () => {
  let component: ManterBoxComponent;
  let fixture: ComponentFixture<ManterBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManterBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
