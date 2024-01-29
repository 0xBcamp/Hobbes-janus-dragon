import { HttpClient, RequestParams, HttpResponse } from './http-client.mjs';
import { UniswapInput, AccountControllerResponse } from './data-contracts.mjs';

declare class Uniswap<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags UniSwap
     * @name AddLiquidity
     * @request POST:/uniswap/{name}/add-liquidity
     * @secure
     */
    addLiquidity: (name: string, data: UniswapInput, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags UniSwap
     * @name RemoveLiquidity
     * @request POST:/uniswap/{name}/remove-liquidity
     * @secure
     */
    removeLiquidity: (name: string, data: UniswapInput, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags UniSwap
     * @name SwapExactTokensForTokens
     * @request POST:/uniswap/{name}/swap-exact-tokens-for-tokens
     * @secure
     */
    swapExactTokensForTokens: (name: string, data: UniswapInput, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags UniSwap
     * @name SwapExactEthForTokens
     * @request POST:/uniswap/{name}/swap-exact-eth-for-tokens
     * @secure
     */
    swapExactEthForTokens: (name: string, data: UniswapInput, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
}

export { Uniswap };
