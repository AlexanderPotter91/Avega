import { Selector } from 'testcafe';

fixture`Log in`
    .page`https://daedalus.janniskaranikis.dev/challenges/2-log-in`;

test('Open the website and click a button', async t => {

    const textField = Selector('.text-green-600.text-lg')
    const userNameField = Selector('label.flex.flex-col.mt-6.mb-4.font-medium > input'); // I would prefer to choose IDs :)
    const passwordField = Selector('form > label:nth-child(3) > input');
    const logInButton = Selector('form > button');
    const userName = 'Admin'
    const password = 'SafePass123' //This i normally hide behind a key
    
    await t
    .wait(3000) //Put wait so we can se the results
    .typeText(userNameField, userName)
    .typeText(passwordField, password)
    .click(logInButton)

    //Assertion for the text "ASSERTME" 
    const textContent = await textField.textContent;
    const isStringInText = textContent.includes('ASSERTME');
    await t.expect(isStringInText).ok()
    .wait(3000);
});
