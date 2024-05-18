import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { TableModule } from 'primeng/table';
import { AsyncPipe } from '@angular/common';
import { TicketOptionPipe } from '../../pipes/ticket-option.pipe';
import { from, take } from 'rxjs';
import { IPurchase } from '../../interfaces/purchase.interface';

@Component({
  selector: 'app-purchase-list',
  standalone: true,
  imports: [
    TableModule,
    AsyncPipe,
    TicketOptionPipe
  ],
  templateUrl: './purchase-list.component.html',
  styleUrl: './purchase-list.component.scss'
})
export class PurchaseListComponent implements OnInit {
  private readonly apiService = inject(ApiService);
  readonly purchaseList$ = this.apiService.purchaseList$;
  pagination = {
    pageLimit: 5,
    currentOffset: 0,
    totalPages: 1,
    totalItems: 0,
  };
  listLoading = true;

  ngOnInit(): void {
    this.loadPurchases();
  }

  setListLoading(loading: boolean): void {
    this.listLoading = loading;
  }

  loadNextPage(offset: number): void {
    this.pagination = {
      ...this.pagination,
      currentOffset: offset
    };
    this.loadPurchases();
  }

  loadPurchases(): void {
    this.setListLoading(true);
    from(this.apiService.loadPart(this.pagination.currentOffset, this.pagination.pageLimit))
      .pipe(take(1))
      .subscribe({
        next: (response: {
          items: Array<IPurchase>,
          totalItems: number,
        }): void => {
          this.apiService.setPurchaseList(response.items);
          this.pagination = {
            ...this.pagination,
            totalItems: response.totalItems,
            totalPages: Math.ceil(response.totalItems / this.pagination.currentOffset)
          };
          this.setListLoading(false);
        },
        error: (): void => {
          alert('Laden der Bestellungen fehlgeschlagen');
          this.setListLoading(false);
        }
      })
  }
}
