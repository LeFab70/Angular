import { ProductsService } from './../services/products.service';
import { Product } from './../../data/Products';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
})
export class NewProductComponent implements OnInit {
  public productFormSaving!: FormGroup;
  productForm = new FormGroup({
    product: new FormControl('', Validators.required),
  });
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.productFormSaving = this.formBuilder.group({
      productName: this.formBuilder.control(null,
        [Validators.minLength(4),
        Validators.required,
        Validators.maxLength(10)]),
      price: this.formBuilder.control(0, [
        Validators.min(100),
        Validators.required,
      ]),
      checked: this.formBuilder.control(false, Validators.required),
    });

    /* validation du formulaire angular*/
  }
  handleSaveProduct() {
    let product: Product = this.productFormSaving.value;
    console.log(product);
    return;
    this.productsService.saveProduct(product).subscribe({
      next: (data) => {
        this.handleClearFields(), alert('produit enregistre avec success');
      },
      error: (err) => console.log(err),
    });
  }
  handleClearFields() {
    this.productFormSaving.reset();
  }
  getErrorMessage(controlName: String, errorInput: ValidationErrors) {
    if (errorInput['required']) {
      return controlName + ' is required';
    } else if (errorInput['minlength']) {
      return (
        controlName +
        ' should have at least ' +
        errorInput['minlength']['requiredLength'] +
        ' characters'
      );
    }
    else if (errorInput['min']) {
      return (
        controlName +
        ' should been positive number with minimun value ' +
        errorInput['min']['min']

      );
    }


    else return '';
  }
}
