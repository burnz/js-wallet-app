# JS Wallet App for coins.ph
# Installation
1. git clone;
2. npm i;
3. npm run build;
4. npm run server;
5. install local https://github.com/BitGo/BitGoJS, see `Installation`;
6. cd bin in installed BitGoJS folder and run `./bitgo-express --debug --port 3080 --env test --bind localhost`

# Issues
* BitGoJS SDK couldn't be installed; https://github.com/BitGo/BitGoJS/issues/123
* v1 API doesn't work as expected and I couldn't find the `sendcoins` endpoint in the documentation;

# Current App State
* authentication and unlock are happening when the App is loaded;
* as https://www.bitgo.com/api/v2/#send-transaction says - `This endpoint should be called through BitGo Express if used without the SDK, such as when using cURL.`, using BitGoJS installed locally;
`Send payments to another wallet` doesn't work because of the `Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.`. Currently facing this issue but wasn't able to resolve it yet;
