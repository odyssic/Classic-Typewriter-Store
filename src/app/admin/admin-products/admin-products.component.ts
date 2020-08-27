import { ProductService } from 'src/app/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products$;

  constructor(private productService: ProductService) {
<<<<<<< HEAD
    this.products$ = this.productService.getAll().snapshotChanges
=======
    this.products$ = this.productService.getAll().snapshotChanges()
>>>>>>> eb77833f90cb03c334f0a158d5c094cc311d274b
  }

  ngOnInit(): void {
  }

}
