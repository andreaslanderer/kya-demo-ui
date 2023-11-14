import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmbeddingsComponent } from './create-embeddings.component';

describe('CreateEmbeddingsComponent', () => {
  let component: CreateEmbeddingsComponent;
  let fixture: ComponentFixture<CreateEmbeddingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEmbeddingsComponent]
    });
    fixture = TestBed.createComponent(CreateEmbeddingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
