const uahToUSD_initial = 26.5;
const CAR_COST_UAH = 907000;
const DOWNPAYMENT_UAH = 140000;

const toUSD = (value: number, uahToUSD_rate = uahToUSD_initial) => value / uahToUSD_rate;

export class Prospect {
  lifeInsurrance_perc = 0.0199;
  interestRate_perc: number;
  strategy: Array<number>;

  totalCost_uah: number;
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
  }
  getDebtInUSD() {
    let result = 0;
    const periodRatio = 1 / this.strategy.length;
    const debt_uah_per_period = this.debt_uah * periodRatio;
    console.log('periodRatio: ', periodRatio, ', ', 'debt_uah_per_period: ', debt_uah_per_period, '\n');
    for (const usdToUahRate of this.strategy) {
      result += toUSD(debt_uah_per_period, usdToUahRate);
    }
    return result;
  }
}

const getP = (prospects: Array<number>, credited: number) => {
  // periods [30, 35, 40, 45];
  const periodRatio = 1 / prospects.length;
  const sumPerPeriod = credited * periodRatio;
  console.log('periodRatio: ', periodRatio, ', ', 'sumPerPeriod: ', sumPerPeriod, '\n');
  let result = 0;
  for (const p of prospects) {
    result += sumPerPeriod / p;
  }
  return result;
};

export const calc = (prospects: Array<number>, CAR_COST_UAH: number, DOWNPAYMENT_UAH: number, BANK_RATE: number) => {
  console.log('\nProspects for ', JSON.stringify(prospects), ',\n');
  const CREDIT_UAH = CAR_COST_UAH - DOWNPAYMENT_UAH;
  const TAXES_UAH = CAR_COST_UAH * 0.05;
  const BANK_COMMISION_UAH = CREDIT_UAH * BANK_RATE;

  console.log('DOWNPAYMENT: ', DOWNPAYMENT_UAH, ', TAXES: ', TAXES_UAH, ', BANK_COMMISION: ', BANK_COMMISION_UAH);

  const DOWNPAYMENT_USD = toUSD(DOWNPAYMENT_UAH),
    TAXES_USD = toUSD(TAXES_UAH),
    BANK_COMMISION_USD = toUSD(BANK_COMMISION_UAH);

  const result = DOWNPAYMENT_USD + TAXES_USD + BANK_COMMISION_USD + getP(prospects, CREDIT_UAH);

  console.log('Total in usd: ', result);
};

// calc([26.5, 26.5, 26.5, 26.5], CAR_COST_UAH, DOWNPAYMENT_UAH, 0.0001 + 0.0199); // TEST, must return 36516

// calc([30, 30, 35, 35], CAR_COST_UAH, DOWNPAYMENT_UAH, 0.0001 + 0.0199);

// calc([30, 35, 40, 45], CAR_COST_UAH, DOWNPAYMENT_UAH, 0.0001 + 0.0199);

// calc([30, 30, 35, 35], CAR_COST_UAH, DOWNPAYMENT_UAH, 0.0599 + 0.0199);
// calc([30, 35, 40, 45, 45, 50, 50, 55], CAR_COST_UAH, DOWNPAYMENT_UAH, 0.0599 + 0.0199);
// calc([30, 35, 40, 45, 50, 55, 60, 65], CAR_COST_UAH, DOWNPAYMENT_UAH, 0.0599 + 0.0199);

// calc([30, 35, 40, 45, 50, 55, 60, 65, 70], CAR_COST_UAH, DOWNPAYMENT_UAH, 0.0899 + 0.0199);
