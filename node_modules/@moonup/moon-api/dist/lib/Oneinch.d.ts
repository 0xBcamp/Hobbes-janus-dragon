import { HttpClient, RequestParams, HttpResponse } from './http-client.js';
import { GetSwapDto } from './data-contracts.js';

declare class Oneinch<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags oneinch
     * @name Tokens
     * @request POST:/oneinch/tokens
     * @secure
     */
    tokens: (data: any, params?: RequestParams) => Promise<HttpResponse<any, any>>;
    /**
     * No description
     *
     * @tags oneinch
     * @name Protocols
     * @request POST:/oneinch/protocols
     * @secure
     */
    protocols: (data: any, params?: RequestParams) => Promise<HttpResponse<any, any>>;
    /**
     * No description
     *
     * @tags oneinch
     * @name Quote
     * @request POST:/oneinch/quote
     * @secure
     */
    quote: (data: any, params?: RequestParams) => Promise<HttpResponse<any, any>>;
    /**
     * No description
     *
     * @tags oneinch
     * @name Swap
     * @request POST:/oneinch/{accountName}/swap
     * @secure
     */
    swap: (accountName: string, data: GetSwapDto, params?: RequestParams) => Promise<HttpResponse<any, any>>;
    /**
     * No description
     *
     * @tags oneinch
     * @name ApproveSpender
     * @request POST:/oneinch/approve-spender
     * @secure
     */
    approveSpender: (data: any, params?: RequestParams) => Promise<HttpResponse<any, any>>;
    /**
     * No description
     *
     * @tags oneinch
     * @name ApproveCallData
     * @request POST:/oneinch/approve-call-data
     * @secure
     */
    approveCallData: (data: any, params?: RequestParams) => Promise<HttpResponse<any, any>>;
}

export { Oneinch };
