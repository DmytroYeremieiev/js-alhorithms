import { expect } from 'chai';

import { Prospect, toUSD } from '../../src/utility/crediting';

describe('crediting', () => {
  it('toUSD should return 4"', () => {
    expect(toUSD(100, 25)).to.be.equal(4);
  });
  it('DebtInUSD should be a single number"', () => {
    const prospect = new Prospect(0.0599, [26.5, 26.5, 26.5, 26.5], 907800, 0.15);
    expect(prospect.getDebtInUSD()).to.be.a('number');
  });
  it('DebtInUSD should be equal to 31441.738641509433 "', () => {
    const prospect = new Prospect(0.0599, [26.5, 26.5, 26.5, 26.5], 907800, 0.15);
    expect(prospect.getDebtInUSD()).to.be.equal(31441.738641509433);
  });
  it('intialPayment_uah should be equal to 136170"', () => {
    const prospect = new Prospect(0.0599, [26.5, 26.5, 26.5, 26.5], 907800, 0.15);
    expect(prospect.intialPayment_uah).to.be.equal(136170);
  });
  it('loan_uah should be equal to 771630"', () => {
    const prospect = new Prospect(0.0599, [26.5, 26.5, 26.5, 26.5], 907800, 0.15);
    expect(prospect.loan_uah).to.be.equal(771630);
  });
  it('debt_uah should be equal to 833206.074"', () => {
    const prospect = new Prospect(0.0599, [26.5, 26.5, 26.5, 26.5], 907800, 0.15);
    expect(prospect.debt_uah).to.be.equal(833206.074);
  });
});
