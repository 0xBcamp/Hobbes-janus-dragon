import { HttpClient, RequestParams, HttpResponse } from './http-client.mjs';
import { AccountControllerResponse, LitecoinInput, LitecoinTransactionInput } from './data-contracts.mjs';

declare class Litecoin<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Litecoin
     * @name ListLitecoinAccounts
     * @request GET:/litecoin
     * @secure
     */
    listLitecoinAccounts: (params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Litecoin
     * @name CreateLitecoinAccount
     * @request POST:/litecoin
     * @secure
     */
    createLitecoinAccount: (data: LitecoinInput, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Litecoin
     * @name GetLitecoinAccount
     * @request GET:/litecoin/{accountName}
     * @secure
     */
    getLitecoinAccount: (accountName: string, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Litecoin
     * @name SignLitecoinTransaction
     * @request POST:/litecoin/{accountName}/sign-tx
     * @secure
     */
    signLitecoinTransaction: (accountName: string, data: LitecoinTransactionInput, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
}

export { Litecoin };
