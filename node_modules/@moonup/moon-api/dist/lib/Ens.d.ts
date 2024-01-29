import { HttpClient, RequestParams, HttpResponse } from './http-client.js';
import { EnsResolveInput, AccountControllerResponse } from './data-contracts.js';

declare class Ens<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags ENS
     * @name Resolve
     * @request POST:/ens/resolve
     * @secure
     */
    resolve: (data: EnsResolveInput, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
}

export { Ens };
