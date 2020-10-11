import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexListComponent } from './spacex-list.component';

describe('SpacexListComponent', () => {
  let component: SpacexListComponent;
  let fixture: ComponentFixture<SpacexListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacexListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
