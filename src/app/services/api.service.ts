import { Injectable } from '@angular/core';
import { Dto } from './dto.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly KEY = 'data';

  public async store(data: Dto): Promise<void> {
    const currentData = await this.load();
    currentData.push(data);
    localStorage.setItem(this.KEY, JSON.stringify(data));
  }

  public async load(): Promise<Dto[]> {
    const serialStore = localStorage.getItem(this.KEY);
    return serialStore ? JSON.parse(serialStore) : [];
  }
}
