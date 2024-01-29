import { HttpClient, RequestParams, HttpResponse } from './http-client.js';
import { AccountControllerResponse, BitcoinCashInput, BitcoinCashTransactionInput } from './data-contracts.js';

declare class Bitcoincash<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags bitcoincash
     * @name ListBitcoinCashAccounts
     * @request GET:/bitcoincash
     * @secure
     */
    listBitcoinCashAccounts: (params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags bitcoincash
     * @name CreateBitcoinCashAccount
     * @request POST:/bitcoincash
     * @secure
     */
    createBitcoinCashAccount: (data: BitcoinCashInput, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags bitcoincash
     * @name GetBitcoinCashAccount
     * @request GET:/bitcoincash/{accountName}
     * @secure
     */
    getBitcoinCashAccount: (accountName: string, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags bitcoincash
     * @name SignBitcoinCashTransaction
     * @request POST:/bitcoincash/{accountName}/sign-tx
     * @secure
     */
    signBitcoinCashTransaction: (accountName: string, data: BitcoinCashTransactionInput, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
}

export { Bitcoincash };
