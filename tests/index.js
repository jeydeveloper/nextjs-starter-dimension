import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `https://ncccandradimuka.com/`;

test('My first test', async t => {
    const innerTextH1 = Selector('.inner h1').innerText;
    await t
    .expect(innerTextH1).eql('JEY DEVELOPER')
});

test('My second test', async t => {
  const osCount = Selector('.inner h1').count;
  await t
  .expect(osCount).eql(1)
});

//runing nromal : testcafe "chrome:headless" tests/sample.js