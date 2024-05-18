import { Pipe, PipeTransform } from '@angular/core';
import { MaybeNull } from '../types/maybe-null';
import { TicketOption } from '../enums/ticket-option';
import { TicketOptionItems } from '../components/wizard/ticket-options/ticket-option-items';
import { ISelectItem } from '../interfaces/select-item.interface';

@Pipe({
  name: 'ticketOption',
  standalone: true
})
export class TicketOptionPipe implements PipeTransform {

  transform(value: MaybeNull<TicketOption>): string {
    const foundItem = TicketOptionItems.find(
      (item: ISelectItem<MaybeNull<TicketOption>>): boolean => item.value === value
    );
    return foundItem ? foundItem.label : '-';
  }

}
