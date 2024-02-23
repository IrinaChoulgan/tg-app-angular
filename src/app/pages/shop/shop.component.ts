import { Component, inject } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';
import { ProductsService } from '../../services/products.service';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductListComponent],
  template: `
    <app-product-list
      title="title1"
      subtitle="subtitle1"
      [products]="products.byGroup['skill']"
    />
    <app-product-list
      title="title2"
      subtitle="subtitle2"
      [products]="products.byGroup['intensive']"
    />
    <app-product-list
      title="title3"
      subtitle="subtitle3"
      [products]="products.byGroup['course']"
    />
  `,
})
export class ShopComponent {
  telegram = inject(TelegramService)
  products = inject(ProductsService)

  constructor() {
    this.telegram.BackButton.hide();
  }
}
