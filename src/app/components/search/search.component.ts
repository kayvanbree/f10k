import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public searchQuery: string;

  constructor(private router: Router) {}

  public search(): void {
    this.router.navigate(['/search'], {
      queryParams: {
        query: this.searchQuery
      },
    });
  }
}
