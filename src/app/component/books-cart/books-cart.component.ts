import { Component, OnInit } from "@angular/core";
import { Order } from "src/app/shared/model/order.model";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { MatSnackBar, MatTableDataSource } from "@angular/material";
import { CartServiceService } from "src/app/shared/service/cart-service.service";

@Component({
  selector: "app-books-cart",
  templateUrl: "./books-cart.component.html",
  styleUrls: ["./books-cart.component.scss"],
})
export class BooksCartComponent implements OnInit {
  orders;
  finalAmount: number;
  orderList: MatTableDataSource<any>;
  displayedColumns: string[] = ["bookName", "price", "quantity", "total"];
  constructor(
    private matSnackBar: MatSnackBar,
    private cartService: CartServiceService
  ) {}
  getOrderList() {
    this.cartService.getCartList().subscribe((message) => {
      this.orders = message.orders;
      this.orderList = new MatTableDataSource(this.orders);
      const price = this.orders.map((i) => i.total);
      const total = price.reduce((a, b) => a + b, 0);
      this.finalAmount = total;
    });
  }
  ngOnInit() {
    this.getOrderList();
  }
}
