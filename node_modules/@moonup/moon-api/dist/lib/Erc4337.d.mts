import { HttpClient, RequestParams, HttpResponse } from './http-client.mjs';
import { InputBody, AccountControllerResponse } from './data-contracts.mjs';

declare class Erc4337<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Erc4337
     * @name GetAddress
     * @request POST:/erc4337/{accountName}/address
     * @secure
     */
    getAddress: (accountName: string, data: InputBody, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Erc4337
     * @name SignBroadcastUserOpTx
     * @request POST:/erc4337/{accountName}/sign-broadcast-userop-tx
     * @secure
     */
    signBroadcastUserOpTx: (accountName: string, data: InputBody, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
}

export { Erc4337 };
