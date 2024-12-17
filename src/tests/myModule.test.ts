import myModule from '../myModule';

jest.mock('./myModule', () => {
  return jest.fn().mockImplementation((arg1: number, arg2: number) => arg1 * arg2);
});

describe('myModule', () => {
  it('return the correct result', () => {
    expect(myModule(2, 3)).toEqual(6);
  });
});
