import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { ProductModel } from 'src/app/shared/models';

import { ProductsService } from 'src/app/shared/services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: MatTableDataSource<ProductModel>;

  isSelectAll: boolean = false;
  readonly pageSizeOptions: number[] = [5, 10, 20];
  products: ProductModel[] = [];
  productColumns: string[] = ['isSelected', 'title', 'rating', 'price'];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
      this.getProducts();
  }

  getProducts(): void {
    this.productsService.getProducts()
      .subscribe((products: ProductModel[]) => {
        this.products = products;
        this.dataSource = new MatTableDataSource<ProductModel>(products);
        this.dataSource.paginator = this.paginator;
      });
  }
}
