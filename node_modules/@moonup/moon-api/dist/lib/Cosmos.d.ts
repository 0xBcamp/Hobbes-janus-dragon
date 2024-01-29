import { HttpClient, RequestParams, HttpResponse } from './http-client.js';
import { AccountControllerResponse, CosmosInput, CosmosTransactionInput } from './data-contracts.js';

declare class Cosmos<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Cosmos
     * @name ListCosmosAccounts
     * @request GET:/cosmos
     * @secure
     */
    listCosmosAccounts: (params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Cosmos
     * @name CreateCosmosAccount
     * @request POST:/cosmos
     * @secure
     */
    createCosmosAccount: (data: CosmosInput, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Cosmos
     * @name GetCosmosAccount
     * @request GET:/cosmos/{accountName}
     * @secure
     */
    getCosmosAccount: (accountName: string, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Cosmos
     * @name SignCosmosTransaction
     * @request POST:/cosmos/{accountName}/sign-tx
     * @secure
     */
    signCosmosTransaction: (accountName: string, data: CosmosTransactionInput, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
}

export { Cosmos };
