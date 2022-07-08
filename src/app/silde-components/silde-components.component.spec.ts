import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SildeComponentsComponent } from './silde-components.component';

describe('SildeComponentsComponent', () => {
  let component: SildeComponentsComponent;
  let fixture: ComponentFixture<SildeComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SildeComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SildeComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
