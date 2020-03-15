import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-description",
  templateUrl: "./product-description.component.html",
  styleUrls: ["./product-description.component.css"]
})
export class ProductDescriptionComponent implements OnInit {
  constructor(private _productServe: ProductService) {}

  albumInfo;

  ngOnInit() {
    this._productServe.getAlbum(1).subscribe({
      next: response => (this.albumInfo = response)
    });
  }
}
