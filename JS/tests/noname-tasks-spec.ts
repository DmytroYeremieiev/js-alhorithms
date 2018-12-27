import { expect } from 'chai';

import * as nonameTasks from '../src/noname-tasks';

describe('noname', () => {
  it('returns an argument unchanged', () => {
    var result = nonameTasks.noname('goshs');
    expect(result).to.equal('goshs');
  });
})

