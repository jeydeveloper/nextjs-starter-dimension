import { Selector } from 'testcafe';

fixture `My fixture`
    .page `http://devexpress.github.io/testcafe/example/`;

test('Assertion with Selector', async t => {
    const developerNameInput = Selector('#developer-name');

    await t
        .expect(developerNameInput.value).eql('')
        .typeText(developerNameInput, 'Peter')
        .expect(developerNameInput.value).eql('Peter');
});