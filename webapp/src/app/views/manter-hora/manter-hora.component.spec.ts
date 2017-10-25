import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterHoraComponent } from './manter-hora.component';

describe('ManterHoraComponent', () => {
  let component: ManterHoraComponent;
  let fixture: ComponentFixture<ManterHoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManterHoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterHoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
