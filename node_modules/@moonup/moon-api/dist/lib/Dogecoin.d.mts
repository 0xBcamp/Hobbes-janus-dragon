import { HttpClient, RequestParams, HttpResponse } from './http-client.mjs';
import { AccountControllerResponse, DogeCoinInput, DogeCoinTransactionInput } from './data-contracts.mjs';

declare class Dogecoin<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags DogeCoin
     * @name ListDogeCoinAccounts
     * @request GET:/dogecoin
     * @secure
     */
    listDogeCoinAccounts: (params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags DogeCoin
     * @name CreateDogeCoinAccount
     * @request POST:/dogecoin
     * @secure
     */
    createDogeCoinAccount: (data: DogeCoinInput, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags DogeCoin
     * @name GetDogeCoinAccount
     * @request GET:/dogecoin/{accountName}
     * @secure
     */
    getDogeCoinAccount: (accountName: string, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags DogeCoin
     * @name SignDogeCoinTransaction
     * @request POST:/dogecoin/{accountName}/sign-tx
     * @secure
     */
    signDogeCoinTransaction: (accountName: string, data: DogeCoinTransactionInput, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
}

export { Dogecoin };
