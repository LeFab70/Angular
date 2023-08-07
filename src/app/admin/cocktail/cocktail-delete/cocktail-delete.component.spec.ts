import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailDeleteComponent } from './cocktail-delete.component';

describe('CocktailDeleteComponent', () => {
  let component: CocktailDeleteComponent;
  let fixture: ComponentFixture<CocktailDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CocktailDeleteComponent]
    });
    fixture = TestBed.createComponent(CocktailDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
