import { HttpClient, RequestParams, HttpResponse } from './http-client.mjs';
import { Erc1155Request, AccountControllerResponse } from './data-contracts.mjs';

declare class Erc1155<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags ERC1155
     * @name BalanceOf
     * @request POST:/erc1155/{name}/balance-of
     * @secure
     */
    balanceOf: (name: string, data: Erc1155Request, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags ERC1155
     * @name BalanceOfBatch
     * @request POST:/erc1155/{name}/balance-of-batch
     * @secure
     */
    balanceOfBatch: (name: string, data: Erc1155Request, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags ERC1155
     * @name SetApprovalForAll
     * @request POST:/erc1155/{name}/set-approval-for-all
     * @secure
     */
    setApprovalForAll: (name: string, data: Erc1155Request, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags ERC1155
     * @name IsApprovedForAll
     * @request POST:/erc1155/{name}/is-approved-for-all
     * @secure
     */
    isApprovedForAll: (name: string, data: Erc1155Request, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags ERC1155
     * @name SafeTransferFrom
     * @request POST:/erc1155/{name}/safe-transfer-from
     * @secure
     */
    safeTransferFrom: (name: string, data: Erc1155Request, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags ERC1155
     * @name SafeBatchTransferFrom
     * @request POST:/erc1155/{name}/safe-batch-transfer-from
     * @secure
     */
    safeBatchTransferFrom: (name: string, data: Erc1155Request, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
}

export { Erc1155 };
