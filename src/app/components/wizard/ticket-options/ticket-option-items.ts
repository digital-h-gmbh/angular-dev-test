import { TicketOption } from '../../../enums/ticket-option';
import { ISelectItem } from '../../../interfaces/select-item.interface';
import { MaybeNull } from '../../../types/maybe-null';

export const TicketOptionItems: Array<ISelectItem<MaybeNull<TicketOption>>> = [
  {
    label: 'Keine Auswahl',
    value: null,
  },
  {
    label: '1.Klasse Upgrade',
    value: TicketOption.firstClass,
  },
  {
    label: 'Fahrradmitnahme',
    value: TicketOption.bikeTransport,
  }
];
