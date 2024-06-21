import { add } from './index';

describe('add Numbers', () => {
  it('exists', () => {
    expect(add).toBeDefined();
  })

  it("should return added sum of numbers from the input string", () => {
    const actual = add("148");
    expect(actual).toBe(13);
  })

  it("should take , as a delimiter", () => {
    const actual = add("1,4,8");
    expect(actual).toBe(13);
  })
});
