import { SnapshotAction } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {}
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService) {
    this.categories$ = categoryService.getCategories()

    let id = this.route.snapshot.paramMap.get('id');
    console.log(id)

    // this.products$ = this.productService.getAll().subscribe;
    // console.log(this.products$)


    if (this.id) {
      this.productService.getProduct(this.id).valueChanges().pipe(take(1))
        .subscribe(p => this.product = p);
    }


    // this.product$ = this.productService.

  }

  save(product) {
    this.productService.create(product);
    this.router.navigate(['/admin/products'])

  }


  ngOnInit(): void { }


}
