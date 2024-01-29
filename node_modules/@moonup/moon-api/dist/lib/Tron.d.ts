import { HttpClient, RequestParams, HttpResponse } from './http-client.js';
import { AccountControllerResponse, TronInput, TronTransactionInput } from './data-contracts.js';

declare class Tron<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Tron
     * @name ListTronAccounts
     * @request GET:/tron
     * @secure
     */
    listTronAccounts: (params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Tron
     * @name CreateTronAccount
     * @request POST:/tron
     * @secure
     */
    createTronAccount: (data: TronInput, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Tron
     * @name GetTronAccount
     * @request GET:/tron/{accountName}
     * @secure
     */
    getTronAccount: (accountName: string, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Tron
     * @name SignTronTransaction
     * @request POST:/tron/{accountName}/sign-tx
     * @secure
     */
    signTronTransaction: (accountName: string, data: TronTransactionInput, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
}

export { Tron };
