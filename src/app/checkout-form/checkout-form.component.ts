import { CheckoutService } from './../checkout.service';
import { Component } from '@angular/core';
import { StateService, State } from 'app/state.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent {

  private states: State[] = [];
  private defaultState: State = {name: '', abbreviation: ''};

  private showPopup = false;

  constructor(
    private stateService: StateService,
    private checkout: CheckoutService
  ) {
    stateService.getStates().subscribe((states) => {
      this.states = states;
      this.defaultState = states[0];
    });
  }

  logForm(value) {
    console.log(value);
    this.checkout.submit(value).subscribe((r) => {
      console.log(r);
      this.showPopup = true;
    });
  }

  handleClosePopup() {
    this.showPopup = false;
  }
}
