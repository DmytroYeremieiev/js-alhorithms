const uahToUSD_initial = 26.5;
const CAR_COST_UAH = 907000;
const DOWNPAYMENT_UAH = 140000;

const toUSD = (value: number) => value / uahToUSD_initial;

export class Prospect {
  rate: number;
  strategy: Array<Array<number>>;
  credited: number;
  constructor(rate: number, strategy: Array<Array<number>>, credited: number) {
    this.rate = rate;
    this.strategy = strategy;
    this.credited = credited;
  }
  getAdjustedSum() {}
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

calc([26.5, 26.5, 26.5, 26.5], CAR_COST_UAH, DOWNPAYMENT_UAH, 0.0001 + 0.0199); // TEST, must return 36516

calc([30, 30, 35, 35], CAR_COST_UAH, DOWNPAYMENT_UAH, 0.0001 + 0.0199);

calc([30, 35, 40, 45], CAR_COST_UAH, DOWNPAYMENT_UAH, 0.0001 + 0.0199);

calc([30, 30, 35, 35], CAR_COST_UAH, DOWNPAYMENT_UAH, 0.0599 + 0.0199);
calc([30, 35, 40, 45, 45, 50, 50, 55], CAR_COST_UAH, DOWNPAYMENT_UAH, 0.0599 + 0.0199);
calc([30, 35, 40, 45, 50, 55, 60, 65], CAR_COST_UAH, DOWNPAYMENT_UAH, 0.0599 + 0.0199);

calc([30, 35, 40, 45, 50, 55, 60, 65, 70], CAR_COST_UAH, DOWNPAYMENT_UAH, 0.0899 + 0.0199);
