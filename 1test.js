import { Selector } from 'testcafe';

fixture`Click button`
    .page`https://daedalus.janniskaranikis.dev/challenges/1-press-the-button`;

test('Open the website and click a button', async t => {

    const pressMeButton = Selector('.text-2xl.font-semibold'); // I would prefer to choose IDs :)
    const textField = Selector('.text-green-600.text-lg');
    
    await t
    .wait(3000) //Put wait so we can se the results
    .click(pressMeButton);

    //Assertion for the text "ASSERTME" 
    const textContent = await textField.textContent;
    const isStringInText = textContent.includes('ASSERTME');
    await t.expect(isStringInText).ok()
    .wait(3000);
});
