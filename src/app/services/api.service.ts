import { Injectable } from '@angular/core';
import { IPurchase } from '../interfaces/purchase.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly KEY = 'data';

  public async store(data: IPurchase): Promise<void> {
    const currentData = await this.load();
    currentData.push(data);
    localStorage.setItem(this.KEY, JSON.stringify(currentData));
  }

  public async load(): Promise<IPurchase[]> {
    const serialStore = localStorage.getItem(this.KEY);
    return serialStore ? JSON.parse(serialStore) : [];
  }
}
