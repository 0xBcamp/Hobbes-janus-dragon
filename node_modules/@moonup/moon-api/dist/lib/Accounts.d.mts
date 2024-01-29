import { HttpClient, RequestParams, HttpResponse } from './http-client.mjs';
import { AccountControllerResponse, InputBody, SignMessage, SignTypedData, CreateAccountInput, DeployInput, BroadcastInput } from './data-contracts.mjs';

declare class Accounts<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Accounts
     * @name GetNonce
     * @request GET:/accounts/{accountName}/nonce
     * @secure
     */
    getNonce: (accountName: string, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Accounts
     * @name GetBalance
     * @request GET:/accounts/{accountName}/balance
     * @secure
     */
    getBalance: (accountName: string, query: {
        chainId: string;
    }, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Accounts
     * @name TransferEth
     * @request POST:/accounts/{accountName}/transfer-eth
     * @secure
     */
    transferEth: (accountName: string, data: InputBody, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Accounts
     * @name SignMessage
     * @request POST:/accounts/{accountName}/sign-message
     * @secure
     */
    signMessage: (accountName: string, data: SignMessage, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Accounts
     * @name SignTransaction
     * @request POST:/accounts/{accountName}/sign-transaction
     * @secure
     */
    signTransaction: (accountName: string, data: InputBody, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Accounts
     * @name SignTypedData
     * @request POST:/accounts/{accountName}/sign-typed-data
     * @secure
     */
    signTypedData: (accountName: string, data: SignTypedData, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Accounts
     * @name ListAccounts
     * @request GET:/accounts
     * @secure
     */
    listAccounts: (params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Accounts
     * @name CreateAccount
     * @request POST:/accounts
     * @secure
     */
    createAccount: (data: CreateAccountInput, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Accounts
     * @name GetAccount
     * @request GET:/accounts/{accountName}
     * @secure
     */
    getAccount: (accountName: string, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Accounts
     * @name DeleteAccount
     * @request DELETE:/accounts/{accountName}
     * @secure
     */
    deleteAccount: (accountName: string, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Accounts
     * @name DeployContract
     * @request POST:/accounts/{accountName}/deploy
     * @secure
     */
    deployContract: (accountName: string, data: DeployInput, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Accounts
     * @name BroadcastTx
     * @request POST:/accounts/{accountName}/broadcast-tx
     * @secure
     */
    broadcastTx: (accountName: string, data: BroadcastInput, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
}

export { Accounts };
