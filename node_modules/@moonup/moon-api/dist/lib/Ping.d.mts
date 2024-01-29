import { HttpClient, RequestParams, HttpResponse } from './http-client.mjs';
import { PingResponse } from './data-contracts.mjs';

declare class Ping<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @name GetMessage
     * @request GET:/ping
     */
    getMessage: (params?: RequestParams) => Promise<HttpResponse<PingResponse, any>>;
}

export { Ping };
