import { Injectable } from '@angular/core';
import { Dto } from './dto.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly KEY = 'data';

  public async store(data: Dto): Promise<void> {
    const currentData = await this.getItems();
    currentData.push(data);
    localStorage.setItem(this.KEY, JSON.stringify(currentData));
  }

  public async load(): Promise<Dto[]> {
    const items = await this.getItems();
    if(items.length > 10) {
      throw Error('Too many items for one request');
    }
    return items;
  }

  public async loadPart(offset: number, limit: number): Promise<Dto[]> {
    const items = await this.getItems();
    await new Promise(resolve => setTimeout(resolve, 2000));
    return items.slice(offset, offset + limit);
  }

  private async getItems(): Promise<Dto[]> {
    const serialStore = localStorage.getItem(this.KEY);
    return serialStore ? JSON.parse(serialStore) : [];
  }
}
