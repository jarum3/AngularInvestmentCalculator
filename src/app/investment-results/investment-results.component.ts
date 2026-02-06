import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentCalculatorService } from '../service/investment-calculator.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  constructor(public calculator: InvestmentCalculatorService) {}
}
