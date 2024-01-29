import { HttpClient, RequestParams, HttpResponse } from './http-client.mjs';
import { SupportedCurrenciesResponse, SupportedPaymentTypesCurrencyResponse, SupportedDefaultResponse, SupportedAssetResponse, GetSupportedOnRampsResponse, Quotes, SellQuotes, TransactionInput } from './data-contracts.mjs';

declare class Onramper<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags onramper
     * @name OnRamperGetSupportedCurrencies
     * @request GET:/onramper/currencies
     * @secure
     */
    onRamperGetSupportedCurrencies: (query: {
        type: string;
    }, params?: RequestParams) => Promise<HttpResponse<SupportedCurrenciesResponse, any>>;
    /**
     * No description
     *
     * @tags onramper
     * @name OnRamperGetSupportedPaymentTypes
     * @request GET:/onramper/payment-types
     * @secure
     */
    onRamperGetSupportedPaymentTypes: (query: {
        fiat: string;
        country: string;
        type: string;
    }, params?: RequestParams) => Promise<HttpResponse<SupportedPaymentTypesCurrencyResponse, any>>;
    /**
     * No description
     *
     * @tags onramper
     * @name OnRamperGetSupportedPaymentTypesFiat
     * @request GET:/onramper/payment-types/fiat
     * @secure
     */
    onRamperGetSupportedPaymentTypesFiat: (query: {
        fiat: string;
        country: string;
    }, params?: RequestParams) => Promise<HttpResponse<SupportedPaymentTypesCurrencyResponse, any>>;
    /**
     * No description
     *
     * @tags onramper
     * @name OnRamperGetSupportedDefaultsAll
     * @request GET:/onramper/defaults
     * @secure
     */
    onRamperGetSupportedDefaultsAll: (query: {
        country: string;
        type: string;
    }, params?: RequestParams) => Promise<HttpResponse<SupportedDefaultResponse, any>>;
    /**
     * No description
     *
     * @tags onramper
     * @name OnRamperGetSupportedAssets
     * @request GET:/onramper/assets
     * @secure
     */
    onRamperGetSupportedAssets: (query: {
        source: string;
        country: string;
    }, params?: RequestParams) => Promise<HttpResponse<SupportedAssetResponse, any>>;
    /**
     * No description
     *
     * @tags onramper
     * @name OnRamperGetSupportedOnRampsAll
     * @request GET:/onramper/onramps
     * @secure
     */
    onRamperGetSupportedOnRampsAll: (params?: RequestParams) => Promise<HttpResponse<GetSupportedOnRampsResponse, any>>;
    /**
     * No description
     *
     * @tags onramper
     * @name OnRamperGetQuotesBuy
     * @request GET:/onramper/quotes/buy
     * @secure
     */
    onRamperGetQuotesBuy: (query: {
        fiat: string;
        crypto: string;
        /** @format double */
        amount: number;
        /** @default "creditcard" */
        paymentMethod?: string;
        /** @default "" */
        uuid?: string;
        /** @default "" */
        clientName?: string;
        /** @default "" */
        country?: string;
    }, params?: RequestParams) => Promise<HttpResponse<Quotes, any>>;
    /**
     * No description
     *
     * @tags onramper
     * @name OnRamperGetQuotesSell
     * @request GET:/onramper/quotes/sell
     * @secure
     */
    onRamperGetQuotesSell: (query: {
        fiat: string;
        crypto: string;
        /** @format double */
        amount: number;
        /** @default "creditcard" */
        paymentMethod?: string;
        /** @default "" */
        uuid?: string;
        /** @default "" */
        clientName?: string;
        /** @default "" */
        country?: string;
    }, params?: RequestParams) => Promise<HttpResponse<SellQuotes, any>>;
    /**
     * No description
     *
     * @tags onramper
     * @name OnRamperCheckout
     * @request POST:/onramper/fund/${accountName}
     * @secure
     */
    onRamperCheckout: (accountName: string, data: TransactionInput, params?: RequestParams) => Promise<HttpResponse<any, any>>;
}

export { Onramper };
