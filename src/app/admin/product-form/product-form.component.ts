import { SnapshotAction } from '@angular/fire/database';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService) {
    this.categories$ = categoryService.getCategories().take(1).subscribe(p => this.product = p)

    let id = this.route.snapshot.paramMap.get('id');
    if (id) this.productService.getProduct(id).snapshotChanges()

  }

  save(product) {
    this.productService.create(product);
    this.router.navigate(['/admin/products'])
    console.log(product)
  }


  ngOnInit(): void { }


}
