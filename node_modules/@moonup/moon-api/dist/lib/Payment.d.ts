import { HttpClient, RequestParams, HttpResponse } from './http-client.js';
import { CreatePaymentIntentInput, PaymentIntentResponse, IWebhook } from './data-contracts.js';

declare class Payment<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags payment
     * @name PaymentGetAvailableChains
     * @request GET:/payment/chains
     * @secure
     */
    paymentGetAvailableChains: (params?: RequestParams) => Promise<HttpResponse<string[], any>>;
    /**
     * No description
     *
     * @tags payment
     * @name PaymentCreatePaymentIntent
     * @request POST:/payment
     * @secure
     */
    paymentCreatePaymentIntent: (data: CreatePaymentIntentInput, params?: RequestParams) => Promise<HttpResponse<PaymentIntentResponse, any>>;
    /**
     * No description
     *
     * @tags payment
     * @name PaymentGetAllPaymentIntents
     * @request GET:/payment
     * @secure
     */
    paymentGetAllPaymentIntents: (params?: RequestParams) => Promise<HttpResponse<PaymentIntentResponse[], any>>;
    /**
     * No description
     *
     * @tags payment
     * @name PaymentDeletePaymentIntent
     * @request DELETE:/payment/{id}
     * @secure
     */
    paymentDeletePaymentIntent: (id: string, params?: RequestParams) => Promise<HttpResponse<PaymentIntentResponse, any>>;
    /**
     * No description
     *
     * @tags payment
     * @name PaymentUpdatePaymentIntent
     * @request PUT:/payment/{id}
     * @secure
     */
    paymentUpdatePaymentIntent: (id: string, data: CreatePaymentIntentInput, params?: RequestParams) => Promise<HttpResponse<PaymentIntentResponse, any>>;
    /**
     * No description
     *
     * @tags payment
     * @name PaymentGetPaymentIntent
     * @request GET:/payment/{id}
     * @secure
     */
    paymentGetPaymentIntent: (id: string, params?: RequestParams) => Promise<HttpResponse<PaymentIntentResponse, any>>;
    /**
     * No description
     *
     * @tags payment
     * @name MoralisWebhook
     * @request POST:/payment/webhook/{id}
     * @secure
     */
    moralisWebhook: (id: string, data: IWebhook, params?: RequestParams) => Promise<HttpResponse<any, any>>;
    /**
     * No description
     *
     * @tags payment
     * @name TatumWebhook
     * @request POST:/payment/tatum/webhook/{id}
     * @secure
     */
    tatumWebhook: (id: string, data: any, params?: RequestParams) => Promise<HttpResponse<any, any>>;
}

export { Payment };
