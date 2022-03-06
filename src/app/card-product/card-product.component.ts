import { Component,Input } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.sass']
})
export class CardProductComponent {
  @Input() myProduct!:Product;

  constructor( private productsService :ProductsService) {}

}
