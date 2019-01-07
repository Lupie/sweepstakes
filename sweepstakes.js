const puppeteer = require('puppeteer');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
  const browser = await puppeteer.launch({headless: false});
  // open browser and go to sweepstakes form (from the iframe)
  const page = await browser.newPage();
  await page.goto('https://xd.wayin.com/display/container/dc/a0069c93-2af3-477e-a255-9c058a82d9f5/entry?source=hgtv', { waitUntil : ['load', 'domcontentloaded']});
  await page.type('#xReturningUserEmail', "<email@email.com>");
  await page.screenshot({path: 'image_log/example.png', fullPage: true});
  await page.click('#xCheckUser');
  await sleep(3000);
  // fill out name
  await page.type('#name_Firstname', "<your first name>");
  await page.keyboard.press('Enter');
  await page.type('#name_Lastname', "<your last name>");
  await page.keyboard.press('Enter');
  // skip the email field (should be pre-populated)
  await page.keyboard.press('Enter');
  // fill out address
  await page.type('#address_Address1', "<your street address");
  await page.keyboard.press('Enter'); 
  await page.type('#address_City', "<the city you live in");
  await page.keyboard.press('Enter');
  // note that state is tricky because of the dropdown
  // you need to hit backspace first to start typing on it
  await page.click('#xFieldWrap_address_State > div.xField.xCompositeItem-State > div > div.xComboInput.items.full.has-options.has-items > input[type="text"]');
  await page.keyboard.press('Backspace'); 
  await page.keyboard.type('<your state>');
  await page.keyboard.press('Enter'); 
  await page.type('#address_Zip', '<your zip code>');
  await page.keyboard.press('Enter'); 
  // fill out phone number
  await page.type('#phone', "<your phone number");
  await page.keyboard.press('Enter'); 
  // choose gender
  await page.click('#xForm-gender_0');
  await page.keyboard.press('Enter'); 
  // fill out birthday
  await page.click('#date_of_birthWrapper > div.xFieldContainer.has3Fields.xFieldWidthExtralarge > div.xField.xCompositeItem-Month > div > div.xComboInput.items.full.has-options.has-items > input[type="text"]');
  await page.keyboard.press('Backspace'); 
  await page.keyboard.type("<month of your birthday");
  await page.keyboard.press('Enter'); 
  await page.type('#date_of_birth_day', "<day of your birthday>");
  await page.keyboard.press('Enter'); 
  await page.type('#date_of_birth_year', "<year you were born>");
  await page.keyboard.press('Enter'); 
  // select cable provider
  await page.click('#mvpdWrapper > div.xFieldContainer.xFieldWidthExtralarge > div.xField > div > div.xComboInput.items.required.full.has-options.has-items > input[type="text"]');
  await page.keyboard.press('Backspace'); 
  await page.keyboard.type('<your cable provider');
  await page.keyboard.press('Enter'); 

  // enter contest
  // await page.click('#xSubmitContainer');

// await browser.close();
})();


