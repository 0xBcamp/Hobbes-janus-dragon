import { HttpClient, RequestParams, HttpResponse } from './http-client.js';
import { AccountControllerResponse, EosInput, EosTransactionInput } from './data-contracts.js';

declare class Eos<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags eos
     * @name ListEosAccounts
     * @request GET:/eos
     * @secure
     */
    listEosAccounts: (params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags eos
     * @name CreateEosAccount
     * @request POST:/eos
     * @secure
     */
    createEosAccount: (data: EosInput, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags eos
     * @name GetEosAccount
     * @request GET:/eos/{accountName}
     * @secure
     */
    getEosAccount: (accountName: string, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags eos
     * @name SignEosTransaction
     * @request POST:/eos/{accountName}/sign-tx
     * @secure
     */
    signEosTransaction: (accountName: string, data: EosTransactionInput, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
}

export { Eos };
