import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderRequestComponent } from './loader-request.component';

describe('LoaderRequestComponent', () => {
  let component: LoaderRequestComponent;
  let fixture: ComponentFixture<LoaderRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
