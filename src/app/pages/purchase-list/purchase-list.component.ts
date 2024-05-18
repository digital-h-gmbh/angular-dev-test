import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { TableModule } from 'primeng/table';
import { IPurchase } from '../../interfaces/purchase.interface';
import { from, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { TicketOptionPipe } from '../../pipes/ticket-option.pipe';

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
export class PurchaseListComponent {
  private readonly apiService = inject(ApiService);
  readonly purchaseList$: Observable<Array<IPurchase>> = from(this.apiService.load());
}
