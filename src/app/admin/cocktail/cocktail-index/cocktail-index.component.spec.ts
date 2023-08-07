import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailIndexComponent } from './cocktail-index.component';

describe('CocktailIndexComponent', () => {
  let component: CocktailIndexComponent;
  let fixture: ComponentFixture<CocktailIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CocktailIndexComponent]
    });
    fixture = TestBed.createComponent(CocktailIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
