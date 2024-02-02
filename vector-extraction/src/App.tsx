import React from 'react';
import {
  AccountResponse,
  Accounts,
  ContentType,
} from '@moonup/moon-api';
async function main() {
  try {
    const accountsSDK = new Accounts({
      baseUrl: 'https://vault-api.usemoon.ai',
      baseApiParams: {
        secure: true,
        type: ContentType.Json,
        format: 'json',
      },
      securityWorker: async (securityData: any) => {
        return Promise.resolve({
          headers: {
            Authorization: `Bearer ${securityData.token}`,
          },
        });
    });

  accountsSDK.setSecurityData({
      token: token, // get from authentication object 
    });
const account = await accountsSDK.getAccount('0xB0739AaF97B5F12D3529ec6C109fbE1A9c9F6bAe');
console.log(account);
} catch (error) {
  console.error(`Error: ${error}`);
}


main();

function App() {
  return (
    <div className="App">
      <h1> Connect Your Wallet</h1>
      <button>Download</button>
    </div>
  );
}

export default App;
