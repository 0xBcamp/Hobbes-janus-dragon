import { HttpClient, RequestParams, HttpResponse } from './http-client.mjs';
import { InputBody, AccountControllerResponse } from './data-contracts.mjs';

declare class Yearn<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags yearn
     * @name AddLiquidity
     * @request POST:/yearn/{name}/add-liquidity
     * @secure
     */
    addLiquidity: (name: string, data: InputBody, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags yearn
     * @name RemoveLiquidity
     * @request POST:/yearn/{name}/remove-liquidity
     * @secure
     */
    removeLiquidity: (name: string, data: InputBody, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags yearn
     * @name AddLiquidityWeth
     * @request POST:/yearn/{name}/add-liquidity-weth
     * @secure
     */
    addLiquidityWeth: (name: string, data: InputBody, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags yearn
     * @name RemoveLiquidityWeth
     * @request POST:/yearn/{name}/remove-liquidity-weth
     * @secure
     */
    removeLiquidityWeth: (name: string, data: InputBody, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
}

export { Yearn };
