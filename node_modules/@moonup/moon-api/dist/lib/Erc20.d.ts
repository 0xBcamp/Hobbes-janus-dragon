import { HttpClient, RequestParams, HttpResponse } from './http-client.js';
import { InputBody, AccountControllerResponse } from './data-contracts.js';

declare class Erc20<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Erc20
     * @name NameErc20
     * @request POST:/erc20/{name}/name
     * @secure
     */
    nameErc20: (name: string, data: InputBody, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Erc20
     * @name SymbolErc20
     * @request POST:/erc20/{name}/symbol
     * @secure
     */
    symbolErc20: (name: string, data: InputBody, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Erc20
     * @name DecimalsErc20
     * @request POST:/erc20/{name}/decimals
     * @secure
     */
    decimalsErc20: (name: string, data: InputBody, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Erc20
     * @name TotalSupplyErc20
     * @request POST:/erc20/{name}/total-supply
     * @secure
     */
    totalSupplyErc20: (name: string, data: InputBody, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Erc20
     * @name BalanceOfErc20
     * @request POST:/erc20/{name}/balance-of
     * @secure
     */
    balanceOfErc20: (name: string, data: InputBody, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Erc20
     * @name AllowanceErc20
     * @request POST:/erc20/{name}/allowance
     * @secure
     */
    allowanceErc20: (name: string, data: InputBody, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Erc20
     * @name TransferErc20
     * @request POST:/erc20/{name}/transfer
     * @secure
     */
    transferErc20: (name: string, data: InputBody, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Erc20
     * @name ApproveErc20
     * @request POST:/erc20/{name}/approve
     * @secure
     */
    approveErc20: (name: string, data: InputBody, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Erc20
     * @name TransferFromErc20
     * @request POST:/erc20/{name}/transfer-from
     * @secure
     */
    transferFromErc20: (name: string, data: InputBody, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
}

export { Erc20 };
