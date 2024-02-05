require('dotenv').config();
import React, { useEffect } from 'react';
import { Network, Alchemy, AssetTransfersCategory } from 'alchemy-sdk';

const settings = {
    apiKey: process.env.ALCHEMY_API_KEY,
    network: Network.ETH_SEPOLIA,
};

const alchemy = new Alchemy(settings);

const main = async () => {
    // Assign the contract address to a variable
    let toAddress = "0x1E6E8695FAb3Eb382534915eA8d7Cc1D1994B152";

    // The response fetches the transactions for the specified addresses.
    let response = await alchemy.core.getAssetTransfers({
        fromBlock: "0x0",
        fromAddress: "0xB0739AaF97B5F12D3529ec6C109fbE1A9c9F6bAe",
        toAddress: toAddress,
        excludeZeroValue: true,
        category: [AssetTransfersCategory.ERC721],
    });

    // Logging the response to the console
    console.log(response);
};

main();

const App = () => {
    return (
        <div className="App">
            <h1>Connect Your Wallet</h1>
            <button>Download</button>
        </div>
    );
};

export default App;
