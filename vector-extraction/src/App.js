import logo from './logo.svg';
import './App.css';
import { Auth } from '@moonup/moon-api';
import { Accounts } from '@moonup/moon-api';
import { BigNumber } from '@ethersproject/bignumber';

const moonApi = new Auth({
  Auth: {
    securityWorker: () => Promise.resolve('test'),
  },
});

async function main() {
  const account = await Accounts.getAccount('0xB0739AaF97B5F12D3529ec6C109fbE1A9c9F6bAe');

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


