import { Injectable, signal, WritableSignal } from '@angular/core';
import { type InvestmentData } from '../../models/investment-data';
import { type YearData } from '../../models/year-data';

@Injectable({
  providedIn: 'root'
})
export class InvestmentCalculatorService {
  annualData = signal<YearData[]>([]);

  constructor() { }

  getAnnualData(): WritableSignal<YearData[]> {
    return this.annualData;
  }

  private addItem(year: YearData) {
    this.annualData.update(currentYears => [...currentYears, year]);
  }
  calculateInvestmentResults(investmentData: InvestmentData) {
    let investmentValue = investmentData.initialInvestment;

    for (let i = 0; i < investmentData.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (investmentData.expectedReturn / 100);
      investmentValue += interestEarnedInYear + investmentData.annualInvestment;
      const totalInterest =
        investmentValue - investmentData.annualInvestment * year - investmentData.initialInvestment;
      this.addItem({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: investmentData.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: investmentData.initialInvestment + investmentData.annualInvestment * year,
      });
    }

  }
}
