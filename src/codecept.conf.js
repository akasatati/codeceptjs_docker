exports.config = {
  tests: './tests/**/*_test.js',  //テストファイル名の最後は `_test.js` とする
  output: './reports', // カレントディレクトリのoutputディレクトリ以下に試験結果を出力する
  helpers: {
    Puppeteer: {
      // デフォルトで開くURL
      url: process.env.YAHOO_URL,
      show: true,
      "chrome":{
        "args": [
          "--disable-web-security",
          // iframe 内の Element を操作するには、ブラウザの持つセキュリティ機能を Off にする必要がある。
          // See also: https://www.chromium.org/Home/chromium-security/site-isolation
          "--disable-features=IsolateOrigins,site-per-process",
          "--disable-setuid-sandbox",
          "--no-sandbox",
          "--disable-dev-shm-usage",
          "--disable-gpu",
          "--full-memory-crash-report",
        ],
        defaultViewport: {
          width: 1440,
          height: 960
        }
      },
    },
  },
  include: {
    PcPage: './pages/pc_page.js',
    ENVIRONMENTS: './conf/environments.js',
  },
  plugins: {
    stepByStepReport: {
      enabled: true,  // SSを取得する
      deleteSuccessful: false,  // テスト成功時もスクリーンショットを残す
      fullPageScreenshots: false,  // フルページスクリーンショット(代償として動作が重くなる)
      output: './reports',
      // レポートを残さないメソッド(画面に変化のないものを含めたりする)
      ignoreSteps: [
        "seeInPopup*",
        "wait*",
        "grab*",
      ],
    },
    retryFailedStep: {
       enabled: true  // Action失敗時に自動リトライする
    },
  },
}
