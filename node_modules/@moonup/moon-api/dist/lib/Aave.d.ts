import { HttpClient, RequestParams, HttpResponse } from './http-client.js';
import { AaveInput, AccountControllerResponse } from './data-contracts.js';

declare class Aave<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Aave
     * @name Lend
     * @request POST:/aave/{name}/lend
     * @secure
     */
    lend: (name: string, data: AaveInput, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Aave
     * @name Borrow
     * @request POST:/aave/{name}/borrow
     * @secure
     */
    borrow: (name: string, data: AaveInput, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Aave
     * @name UserReserveData
     * @request POST:/aave/{name}/user-reserve-data
     * @secure
     */
    userReserveData: (name: string, data: AaveInput, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Aave
     * @name Repay
     * @request POST:/aave/{name}/repay
     * @secure
     */
    repay: (name: string, data: AaveInput, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
}

export { Aave };
