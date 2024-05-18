import { FormControl } from '@angular/forms';
import { MaybeNull } from '../types/maybe-null';
import { TicketOption } from '../enums/ticket-option';

export interface IPurchase {
  ticketHolder: ITicketHolder,
  invoicingHolder: IBillHolder,
  ticketOption: MaybeNull<TicketOption>,
}

export interface ITicketHolder {
  firstname: string,
  lastname: string,
  adoptForBill: boolean,
}

export interface IBillHolder {
  firstname: string,
  lastname: string,
  company: null | string,
  street: string,
  zip: string,
  city: string,
}

export type TicketHolderForm = Record<keyof ITicketHolder, FormControl>;
export type BillHolderForm = Record<keyof IBillHolder, FormControl>;
