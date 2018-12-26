import { expect } from 'chai';
import { } from 'mocha';

import * as nonameTasks from '../src/noname-tasks';

describe('noname', () => {
  it('returns an argument unchanged', () => {
    var result = nonameTasks.noname('gosh')
    expect(result).to.equal('gosh');
  });
})

