import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailEditComponent } from './cocktail-edit.component';

describe('CocktailEditComponent', () => {
  let component: CocktailEditComponent;
  let fixture: ComponentFixture<CocktailEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CocktailEditComponent]
    });
    fixture = TestBed.createComponent(CocktailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
