import { SnapshotAction } from '@angular/fire/database';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
import { Router, ActivatedRoute } from '@angular/router';
>>>>>>> eb77833f90cb03c334f0a158d5c094cc311d274b

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
<<<<<<< HEAD
    private categoryService: CategoryService,
    private productService: ProductService) {
    this.categories$ = categoryService.getCategories()
=======
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService) {
    this.categories$ = categoryService.getCategories().take(1).subscribe(p => this.product = p)

    let id = this.route.snapshot.paramMap.get('id');
    if (id) this.productService.getProduct(id).snapshotChanges()
>>>>>>> eb77833f90cb03c334f0a158d5c094cc311d274b

  }

  save(product) {
    this.productService.create(product);
    this.router.navigate(['/admin/products'])
<<<<<<< HEAD

=======
    console.log(product)
>>>>>>> eb77833f90cb03c334f0a158d5c094cc311d274b
  }


  ngOnInit(): void { }


}
