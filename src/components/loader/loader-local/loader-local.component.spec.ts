import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderLocalComponent } from './loader-local.component';

describe('LoaderLocalComponent', () => {
  let component: LoaderLocalComponent;
  let fixture: ComponentFixture<LoaderLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderLocalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
