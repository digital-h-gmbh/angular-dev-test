// TODO: specify the interface for the DTO object, that you use for storing and loading data.
import { FormControl } from '@angular/forms';

export interface Dto {
  ticketHolder: ITicketHolder,
  invoicingHolder: IBillHolder,
}

export interface ITicketHolder {
  firstname: string,
  lastname: string,
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
