import { HttpClient, RequestParams, HttpResponse } from './http-client.js';
import { Erc721Request, AccountControllerResponse } from './data-contracts.js';

declare class Erc721<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Erc721
     * @name TokenUri
     * @request POST:/erc721/{name}/token-uri
     * @secure
     */
    tokenUri: (name: string, data: Erc721Request, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Erc721
     * @name Transfer
     * @request POST:/erc721/{name}/transfer
     * @secure
     */
    transfer: (name: string, data: Erc721Request, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Erc721
     * @name TransferFrom
     * @request POST:/erc721/{name}/transfer-from
     * @secure
     */
    transferFrom: (name: string, data: Erc721Request, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Erc721
     * @name Approve
     * @request POST:/erc721/{name}/approve
     * @secure
     */
    approve: (name: string, data: Erc721Request, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Erc721
     * @name GetApproved
     * @request POST:/erc721/{name}/get-approved
     * @secure
     */
    getApproved: (name: string, data: Erc721Request, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Erc721
     * @name IsApprovedForAll
     * @request POST:/erc721/{name}/is-approved-for-all
     * @secure
     */
    isApprovedForAll: (name: string, data: Erc721Request, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Erc721
     * @name Name
     * @request POST:/erc721/{name}/name
     * @secure
     */
    name: (name: string, data: Erc721Request, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Erc721
     * @name Symbol
     * @request POST:/erc721/{name}/symbol
     * @secure
     */
    symbol: (name: string, data: Erc721Request, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Erc721
     * @name BalanceOf
     * @request POST:/erc721/{name}/balance-of
     * @secure
     */
    balanceOf: (name: string, data: Erc721Request, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Erc721
     * @name OwnerOf
     * @request POST:/erc721/{name}/owner-of
     * @secure
     */
    ownerOf: (name: string, data: Erc721Request, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Erc721
     * @name SafeTransferFrom
     * @request POST:/erc721/{name}/safe-transfer-from
     * @secure
     */
    safeTransferFrom: (name: string, data: Erc721Request, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Erc721
     * @name SetApprovalForAll
     * @request POST:/erc721/{name}/set-approval-for-all
     * @secure
     */
    setApprovalForAll: (name: string, data: Erc721Request, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
}

export { Erc721 };
