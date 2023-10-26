import { Selector } from 'testcafe';

fixture`Click button`
    .page`https://daedalus.janniskaranikis.dev/challenges/5-create-a-quote`;

test('Open the website and click a button', async t => {

    const textStr = Selector('.text-lg'); // I would prefer to choose IDs :)
    const textField = Selector('.text-green-600.text-lg');
    const listElement = Selector('.m-1')
    const dropSite = Selector('.bg-slate-50.mb-6')
    
    await t
        .wait(3000)
        const textString = await textStr.textContent
        console.log(textString)
        const stringList = textString.split(' ')
        console.log(stringList)
        console.log('List lenght: ', stringList.length);

    for (var i = 0; i < stringList.length; i++) {
        console.log("Element at index " + i + " is: " + stringList[i]);
        await t .dragToElement(listElement.withText(stringList[i]), dropSite)
      }
        // Assertion for the text "ASSERTME" 
        const textContent = await textField.textContent;
        const isStringInText = textContent.includes('ASSERTME');
        await t.expect(isStringInText).ok()
        .wait(3000);
});
