Feature('PC Yahoo');

Scenario('YahooでCodeceptJSを検索する', async ({ I }) => {
  const { PcPage: PageObject, ENVIRONMENTS } = inject();
  // YAHOO TOPを開く
  await I.amOnPage('');

  // YAHOO で CodeceptJS を検索する
  await PageObject.searchOnYahoo(ENVIRONMENTS.YAHOO.SEARCH_WORD);

  // CodeceptJS公式をクリック
  await I.click(locate('b').withText(ENVIRONMENTS.YAHOO.SEARCH_WORD));
  await I.waitForText(ENVIRONMENTS.YAHOO.SEARCH_WORD, 10);
  await I.see(ENVIRONMENTS.YAHOO.SEARCH_WORD);

}).tag('@yahoo').tag('@search');
