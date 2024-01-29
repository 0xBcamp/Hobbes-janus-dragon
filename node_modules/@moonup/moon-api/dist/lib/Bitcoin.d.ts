import { HttpClient, RequestParams, HttpResponse } from './http-client.js';
import { AccountControllerResponse, BitcoinInput, BitcoinTransactionInput } from './data-contracts.js';

declare class Bitcoin<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Bitcoin
     * @name ListBitcoinAccounts
     * @request GET:/bitcoin
     * @secure
     */
    listBitcoinAccounts: (params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Bitcoin
     * @name CreateBitcoinAccount
     * @request POST:/bitcoin
     * @secure
     */
    createBitcoinAccount: (data: BitcoinInput, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Bitcoin
     * @name GetBitcoinAccount
     * @request GET:/bitcoin/{accountName}
     * @secure
     */
    getBitcoinAccount: (accountName: string, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Bitcoin
     * @name SignBitcoinTransaction
     * @request POST:/bitcoin/{accountName}/sign-tx
     * @secure
     */
    signBitcoinTransaction: (accountName: string, data: BitcoinTransactionInput, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
}

export { Bitcoin };
