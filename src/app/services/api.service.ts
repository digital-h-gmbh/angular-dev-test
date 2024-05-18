import { Injectable } from '@angular/core';
import { IPurchase } from '../interfaces/purchase.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private purchaseList = new BehaviorSubject<Array<IPurchase>>([]);
  private readonly KEY = 'data';
  public readonly purchaseList$ = this.purchaseList.asObservable();

  public setPurchaseList(purchaseList: Array<IPurchase>): void {
    this.purchaseList.next(purchaseList);
  }

  public async store(data: IPurchase): Promise<void> {
    const currentData = await this.load();
    currentData.push(data);
    localStorage.setItem(this.KEY, JSON.stringify(currentData));
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  public async load(): Promise<IPurchase[]> {
    const serialStore = localStorage.getItem(this.KEY);
    return serialStore ? JSON.parse(serialStore) : [];
  }

  public async loadPart(offset: number, limit: number): Promise<{
    items: IPurchase[],
    totalItems: number,
  }> {
    const items = await this.getItems();
    await new Promise(resolve => setTimeout(resolve, 2000));
    return {
      totalItems: items.length,
      items: items.slice(offset, offset + limit),
    };
  }

  private async getItems(): Promise<IPurchase[]> {
    const serialStore = localStorage.getItem(this.KEY);
    return serialStore ? JSON.parse(serialStore) : [];
  }
}
