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

  it("should take new line as a delimiter", () => {
    const actual = add("1,4,8\n7");
    expect(actual).toBe(20);
  })

  it("should allow custom delimiter", () => {
    const actual = add("//;\n1;4;8");
    expect(actual).toBe(13);
  })
});
