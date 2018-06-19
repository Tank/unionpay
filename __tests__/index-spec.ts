import * as index from '../src';

test('Should have Unionpay available', () => {
  expect(index.Unionpay).toBeTruthy();
});
