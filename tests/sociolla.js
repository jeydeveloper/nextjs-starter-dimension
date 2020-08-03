import { Selector, Role } from 'testcafe';

const regularAccUserAdmin = Role('https://uat-sociolla-admin.sociolabs.io', async t => {
  const username = Selector('input[type="text"]');
  const password = Selector('input[type="password"]');
  await t
    .wait(10000)
    .typeText(username, '[real_username]')
    .typeText(password, '[real_password]')
    .pressKey('enter')
    .wait(10000)
});

fixture`My fixture`
  .page`https://uat-sociolla-admin.sociolabs.io/catalog/extra-bags-rules`;

test('Is this Module Extra Bag Rules?', async t => {
  const textContentEBR = Selector('.breadcrumb').child(1).textContent;
  await t
    .useRole(regularAccUserAdmin)
    .wait(10000)
    .expect(textContentEBR).eql('Extra Bags Rules')
});

// running with this : node --max-http-header-size=1024000 ./node_modules/testcafe/bin/testcafe.js "chrome" tests/sociolla.js
// or : testcafe "chrome:headless" tests/sociolla.js