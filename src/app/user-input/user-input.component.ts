import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentCalculatorService } from '../service/investment-calculator.service';
import { type InvestmentData } from '../../models/investment-data';
import { YearData } from '../../models/year-data';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  constructor(private calculator: InvestmentCalculatorService) { }

  investmentData: InvestmentData = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  }
  @Output() annualData = new EventEmitter<YearData[]>;

  calculateData() {
    this.calculator.calculateInvestmentResults(this.investmentData);
  }

}
