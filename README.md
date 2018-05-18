# JS Wallet App v2 for coins.ph
# Installation
1. git clone;
2. npm i;
3. npm run build;
4. npm run server;
5. install local https://github.com/BitGo/BitGoJS, see `Installation`;
6. cd bin in installed BitGoJS folder and run `./bitgo-express --debug --port 3080 --env test --bind localhost`

# Issues
* BitGoJS SDK still couldn't be installed (updated); https://github.com/BitGo/BitGoJS/issues/123

# Current App State
* authentication and unlock are happening when the App is loaded;
* as https://www.bitgo.com/api/v2/#send-transaction says - `This endpoint should be called through BitGo Express if used without the SDK, such as when using cURL.`, using BitGoJS installed locally;
* v2 was redone with the `redux-saga` usage instead of redux-thunk, #TODO: write actions/sagas tests;
* used HTTP client - `axios` by default (Application/JSON format) sends OPTIONS request right before the POST one. but the BitGoJS express-server fails on the OPTION request with and error: 'next is not a function';
at the same time it doesn't support the application/x-www-form-urlencoded format (https://github.com/axios/axios#using-applicationx-www-form-urlencoded-format);
* also for local BitGoJS express-server cross-origin resource sharing should be enabled;
* to test to auth/unlock/balance functionality just change `LOCAL_BITGO_URL` to `API_URL_V2` in `http.js;`
