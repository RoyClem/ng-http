import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostHttpRequestComponent } from './post-http-request.component';

describe('PostHttpRequestComponent', () => {
  let component: PostHttpRequestComponent;
  let fixture: ComponentFixture<PostHttpRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostHttpRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostHttpRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
