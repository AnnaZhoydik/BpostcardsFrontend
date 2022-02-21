import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostcardComponent } from './create-postcard.component';

describe('CreatePostcardComponent', () => {
  let component: CreatePostcardComponent;
  let fixture: ComponentFixture<CreatePostcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePostcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
