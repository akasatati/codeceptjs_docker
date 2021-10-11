Feature('PC CodeceptJS').config({
  // デフォルトURL以外を使う場合はこのようにする
  url: process.env.CODECEPTJS_URL
});

Scenario('CodeceptJS公式を開く', async ({ I }) => {
  const { PcPage: PageObject, ENVIRONMENTS } = inject();
  // CodeceptJS TOPを開く
  await I.amOnPage('');

}).tag('@codeceptjs').tag('@search');
