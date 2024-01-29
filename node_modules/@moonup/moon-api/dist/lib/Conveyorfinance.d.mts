import { HttpClient, RequestParams, HttpResponse } from './http-client.mjs';
import { TokenSwapParams, ConveyorFinanceControllerResponse } from './data-contracts.mjs';

declare class Conveyorfinance<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags ConveyorFinance
     * @name Swap
     * @request POST:/conveyorfinance/{name}/swap
     * @secure
     */
    swap: (name: string, data: TokenSwapParams, params?: RequestParams) => Promise<HttpResponse<ConveyorFinanceControllerResponse, any>>;
}

export { Conveyorfinance };
