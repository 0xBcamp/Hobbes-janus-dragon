import { HttpClient, RequestParams, HttpResponse } from './http-client.mjs';
import { AccountControllerResponse, SolanaInput, SolanaTransactionInput } from './data-contracts.mjs';

declare class Solana<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Solana
     * @name ListSolanaAccounts
     * @request GET:/solana
     * @secure
     */
    listSolanaAccounts: (params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Solana
     * @name CreateSolanaAccount
     * @request POST:/solana
     * @secure
     */
    createSolanaAccount: (data: SolanaInput, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Solana
     * @name GetSolanaAccount
     * @request GET:/solana/{accountName}
     * @secure
     */
    getSolanaAccount: (accountName: string, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
    /**
     * No description
     *
     * @tags Solana
     * @name SignSolanaTransaction
     * @request POST:/solana/{accountName}/sign-tx
     * @secure
     */
    signSolanaTransaction: (accountName: string, data: SolanaTransactionInput, params?: RequestParams) => Promise<HttpResponse<AccountControllerResponse, any>>;
}

export { Solana };
