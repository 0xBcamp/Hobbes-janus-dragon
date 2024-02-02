import {
  AccountResponse,
  Accounts,
  ContentType,
} from '@moonup/moon-api';
async function main() {
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

    securityWorker: async (securityData: { token: string }) => {
      // Directly returning the object without wrapping it with Promise.resolve,
      // as async functions automatically wrap return values in a Promise.
      return {
        headers: {
          Authorization: `Bearer ${securityData.token}`,
        },
      };
    },
  });

  // Correctly passing the 'token' to setSecurityData.
  accountsSDK.setSecurityData({ token });

  // Assuming getAccount returns an AccountResponse or similar type, 
  // you should catch any errors that might occur during the API call.
  try {
    const account: AccountResponse = await accountsSDK.getAccount('0xB0739AaF97B5F12D3529ec6C109fbE1A9c9F6bAe');
    console.log(account);
  } catch (error) {
    console.error("Failed to fetch account", error);
  }
}

main();




  accountsSDK.setSecurityData({
      token: token, // get from authentication object 
    });
const account = await accountsSDK.getAccount('0xB0739AaF97B5F12D3529ec6C109fbE1A9c9F6bAe');
console.log(account);
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
