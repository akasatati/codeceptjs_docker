const { I, ENVIRONMENTS } = inject();

module.exports = {
  async searchOnYahoo(word) {
    // 検索欄にCodeceptJSと入力
    await I.fillField('p', 'CodeceptJS');
    await I.pressKey('Enter');
    // 検索結果表示を待つ
    await I.waitForElement("#contents", 10);
  }
};
