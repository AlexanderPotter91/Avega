import { Selector } from 'testcafe';

fixture`Click button`
    .page`https://daedalus.janniskaranikis.dev/challenges/3-mr-robot`;

test('Open the website and click a button', async t => {

    const textField = Selector('.text-green-600.text-lg')
    const leftButton = Selector('div').nth(10);
    const rightButton = Selector('div').nth(11);
    const option = Selector('option');
    const sodaValue = Selector('#correctddValue');
    const selectElement = Selector('select');

    await t
    .wait(3000) //Time to see initial intergers on buttons
    // Get the text under leftButton
    const textUnderLeftButton = await leftButton.innerText;

    // Parse the text as an integer
    const integerValueLeft = parseInt(textUnderLeftButton, 10);
    console.log('Left button value:', integerValueLeft)

    // Get the text under rightButton
    const textUnderRightButton = await rightButton.innerText;

    // Parse the text as an integer
    const integerValueRight = parseInt(textUnderRightButton, 10);

    console.log('Right button value:', integerValueRight);
    
    for (let i = 0; i < integerValueLeft; i++) {
        await t.click(leftButton);
    }

    for (let i = 0; i < integerValueRight; i++) {
        await t.click(rightButton);
    }

    //Choosing right soda
    await t
    .click(selectElement);
    await t
        const sodaString = await sodaValue.innerText
        console.log('Mr.Robot loves: ',sodaString);
    await t
        .click(option.withText(sodaString))

    //Assertion for the text "ASSERTME" 
    const textContent = await textField.textContent;
    const isStringInText = textContent.includes('ASSERTME');
    await t.expect(isStringInText).ok()
    .wait(3000);
});
