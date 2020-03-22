const uahToUSD_initial = 26.5;

export const toUSD = (value: number, uahToUSD_rate = uahToUSD_initial) => value / uahToUSD_rate;

export class Prospect {
  lifeInsurrance_perc = 0.0199;
  interestRate_perc: number;
  strategy: Array<number>;

  totalCost_uah: number;
  govTaxes_uah: number;
  bankComission_uah: number;
  initialPayment_perc: number;
  intialPayment_uah: number;

  loan_uah: number;
  debt_uah: number;

  constructor(interestRate: number, strategy: Array<number>, totalCost_uah: number, initialPayment_perc: number) {
    this.interestRate_perc = interestRate;
    this.strategy = strategy;

    this.totalCost_uah = totalCost_uah;
    this.initialPayment_perc = initialPayment_perc;
    this.intialPayment_uah = this.totalCost_uah * this.initialPayment_perc;

    this.loan_uah = this.totalCost_uah - this.intialPayment_uah;
    this.debt_uah = this.loan_uah + this.loan_uah * this.interestRate_perc + this.loan_uah * this.lifeInsurrance_perc;
    // console.log(
    //   'this.debth',
    //   this.debt_uah,
    //   this.loan_uah * this.interestRate_perc,
    //   this.loan_uah * this.lifeInsurrance_perc
    // );
    this.govTaxes_uah = this.totalCost_uah * 0.05;
    this.bankComission_uah = this.totalCost_uah * 0.0199; // one time comission
  }
  getDebtInUSD() {
    let result = 0;
    const periodRatio = 1 / this.strategy.length;
    const debt_uah_per_period = this.debt_uah * periodRatio;
    // console.log('periodRatio: ', periodRatio, ', ', 'debt_uah_per_period: ', debt_uah_per_period, '\n');
    for (const usdToUahRate of this.strategy) {
      // console.log('toUSD(debt_uah_per_period, usdToUahRate)', toUSD(debt_uah_per_period, usdToUahRate));

      result += toUSD(debt_uah_per_period, usdToUahRate);
    }
    return result;
  }
  getTotalCostWithTaxes() {
    const debt_prospect_usd = this.getDebtInUSD();
    const total =
      toUSD(this.intialPayment_uah) + toUSD(this.govTaxes_uah) + toUSD(this.bankComission_uah) + debt_prospect_usd;
    return total;
  }
}

let prospect = new Prospect(0.0199, [30, 30, 35, 35], 907800, 0.15);
console.log('0.0199, [30, 30, 35, 35]: ', prospect.getTotalCostWithTaxes());

prospect = new Prospect(0.0199, [30, 35, 40, 45], 907800, 0.15);
console.log('0.0199, [30, 35, 40, 45]: ', prospect.getTotalCostWithTaxes());

prospect = new Prospect(0.0599, [30, 35, 40, 45, 45, 50, 50, 55], 907800, 0.15);
console.log('0.0599, [30, 35, 40, 45, 45, 50, 50, 55]: ', prospect.getTotalCostWithTaxes());

prospect = new Prospect(0.0599, [30, 35, 40, 45, 50, 55, 60, 65], 907800, 0.15);
console.log('0.0599, [30, 35, 40, 45, 50, 55, 60, 65]: ', prospect.getTotalCostWithTaxes());

prospect = new Prospect(0.0599, [30, 35, 40, 45, 50, 55, 60, 65, 70], 907800, 0.15);
console.log('0.0599, [30, 35, 40, 45, 50, 55, 60, 65, 70]: ', prospect.getTotalCostWithTaxes());

prospect = new Prospect(0.0899, [30, 35, 40, 45, 50, 55, 60, 65, 70], 907800, 0.15);
console.log('0.0899, [30, 35, 40, 45, 50, 55, 60, 65, 70]: ', prospect.getTotalCostWithTaxes());
