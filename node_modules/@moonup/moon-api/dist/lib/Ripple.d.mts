import { HttpClient, RequestParams, HttpResponse } from './http-client.mjs';
import { AccountControllerResponse, RippleInput, RippleTransactionInput } from './data-contracts.mjs';

declare class Ripple<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags ripple
     * @name ListRippleAccounts
     * @request GET:/ripple
     * @secure
     */
    listRippleAccounts: (params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags ripple
     * @name CreateRippleAccount
     * @request POST:/ripple
     * @secure
     */
    createRippleAccount: (data: RippleInput, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags ripple
     * @name GetRippleAccount
     * @request GET:/ripple/{accountName}
     * @secure
     */
    getRippleAccount: (accountName: string, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags ripple
     * @name SignRippleTransaction
     * @request POST:/ripple/{accountName}/sign-tx
     * @secure
     */
    signRippleTransaction: (accountName: string, data: RippleTransactionInput, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
}

export { Ripple };
