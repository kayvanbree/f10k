import { MinutesSecondsPipe } from './minutes-seconds.pipe';

describe('MinutesSecondsPipe', () => {
  it('create an instance', () => {
    const pipe = new MinutesSecondsPipe();
    expect(pipe).toBeTruthy();
  });
});
