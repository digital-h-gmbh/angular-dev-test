import { Component } from '@angular/core';
import { WizardComponent } from '../../components/wizard/wizard.component';

@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [
    WizardComponent
  ],
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.scss'
})
export class PurchaseComponent {

}
