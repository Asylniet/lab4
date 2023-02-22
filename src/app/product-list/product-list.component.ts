import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
    products = [...products];
  
    share(name: string, url: string | undefined) {
      window.open(`https://t.me/share/url?url=${url}&text=${name}`)
    }
  
    onNotify() {
      window.alert('You will be notified when the product goes on sale');
    }
}