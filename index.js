const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: false
  });
  const context = await browser.createIncognitoBrowserContext();
  const page = await browser.newPage();
  await page.setViewport({ width: 1300, height: 800 })

  await page.goto('https://erp.tiny.com.br/');

  await page.click('[type="button"]');
  await page.type('[id="username"]', "***", { delay: 100 });//Login Tiny1
  await page.type('[id="senha"]', "****", { delay: 100 });
  await page.click('[id="menu-login"]');
  await page.waitForTimeout(2000);
  await page.waitForTimeout(4000);
  await page.goto('https://erp.tiny.com.br/produtos#list');
  await page.waitForTimeout(2000);

  var skus = [''];
  for (i=0;i<skus.length;i++){
    await page.type('[id="pesquisa-mini"]', skus[i], { delay: 100 });
    await page.keyboard.press( "Enter" );
    await page.waitForTimeout(2000);
    await page.click('[id="tabelaListagem"] > tbody > tr > td:nth-child(2) > button');
    await page.waitForTimeout(1000);
    await page.click('[id="listaMenu"] [id="im_12"] > a');
    await page.waitForTimeout(1000);
    await page.click('[class="multiselect dropdown-toggle form-control form-control-select"] > span');
    await page.waitForTimeout(1000);
    await page.click('[class="multiselect-container dropdown-menu pull-right"] > li:nth-child(5) > a');
    await page.click('[id="btnEnviarRegistrosMultiEmpresa"]');

    await page.waitForTimeout(4000);
    await page.goto('https://erp.tiny.com.br/produtos#list');
    await page.waitForTimeout(4000);
  }

  await browser.close();
})();
