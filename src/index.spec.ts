import { add } from './index';

describe('add Numbers', () => {
  it('exists', () => {
    expect(add).toBeDefined();
  })

  it("should return added sum of numbers from the input string", () => {
    const actual = add("148");
    expect(actual).toBe(13);
  })
});
