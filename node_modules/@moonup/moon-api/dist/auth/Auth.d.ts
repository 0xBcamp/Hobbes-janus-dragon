import { HttpClient, RequestParams, HttpResponse } from './http-client.js';
import { RefreshTokenInput, RefreshTokenResponse, ProfileResponse, CreateOauth2ClientInput, CreateOauth2ClientResponse, MoonOauth2QueryParamsInput, MoonOauth2AuthorizeInput, MoonOauth2AuthorizeResponse, MoonOauth2ExchangeInput, MoonOauth2ExchangeResponse, GoogleCallbackInput, GoogleCallbackResponse, GoogleAltCallbackInput, EmailSignupInput, EmailSignupResponse, EmailLoginInput, EmailLoginResponse, GithubCallbackInput, GithubCallbackResponse, DiscordCallbackInput, DiscordCallbackResponse, WebAuthnRegisterInput, WebAuthnRegisterResponse, WebAuthNRegisterVerifyInput, WebAuthNRegisterVerifyResponse, WebAuthnLoginInput, WebAuthnLoginResponse, WebAuthnLoginVerifyInput, WebAuthnLoginVerifyResponse, ResetPasswordInput, ResetPasswordResponse, ResetPasswordConfirmInput, ResetPasswordConfirmResponse, Enable2faInput, Verify2faInput, Verify2faResponse, Disable2faInput } from './data-contracts.js';
import '@simplewebauthn/server';
import '@simplewebauthn/typescript-types';

declare class Auth<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Accounts
     * @name TransferEth
     * @request POST:/accounts/{accountName}/transfer-eth
     */
    refreshToken: (data: RefreshTokenInput, params?: RequestParams) => Promise<HttpResponse<RefreshTokenResponse, any>>;
    profile: (params?: RequestParams) => Promise<HttpResponse<ProfileResponse, any>>;
    createOauth2Client(data: CreateOauth2ClientInput, params?: RequestParams): Promise<HttpResponse<CreateOauth2ClientResponse, any>>;
    moonOauth2: (query: MoonOauth2QueryParamsInput, params?: RequestParams) => Promise<HttpResponse<ProfileResponse, any>>;
    moonOauth2Authorize: (data: MoonOauth2AuthorizeInput, params?: RequestParams) => Promise<HttpResponse<MoonOauth2AuthorizeResponse, any>>;
    moonOauth2Exchange: (data: MoonOauth2ExchangeInput, params?: RequestParams) => Promise<HttpResponse<MoonOauth2ExchangeResponse, any>>;
    googleOauth2: (query: MoonOauth2QueryParamsInput, params?: RequestParams) => Promise<HttpResponse<ProfileResponse, any>>;
    googleOauth2Callback: (data: GoogleCallbackInput, params?: RequestParams) => Promise<HttpResponse<GoogleCallbackResponse, any>>;
    googleAltOauth2: (query: MoonOauth2QueryParamsInput, params?: RequestParams) => Promise<HttpResponse<ProfileResponse, any>>;
    googleAltOauth2Callback: (data: GoogleAltCallbackInput, params?: RequestParams) => Promise<HttpResponse<GoogleCallbackResponse, any>>;
    emailSignup: (data: EmailSignupInput, params?: RequestParams) => Promise<HttpResponse<EmailSignupResponse, any>>;
    emailLogin: (data: EmailLoginInput, params?: RequestParams) => Promise<HttpResponse<EmailLoginResponse, any>>;
    githubOauth2: (query: MoonOauth2QueryParamsInput, params?: RequestParams) => Promise<HttpResponse<ProfileResponse, any>>;
    githubOauth2Callback: (query: GithubCallbackInput, params?: RequestParams) => Promise<HttpResponse<GithubCallbackResponse, any>>;
    discordOAuth2: (query: MoonOauth2QueryParamsInput, params?: RequestParams) => Promise<HttpResponse<ProfileResponse, any>>;
    discordOAuth2Callback: (query: DiscordCallbackInput, params?: RequestParams) => Promise<HttpResponse<DiscordCallbackResponse, any>>;
    webauthn: (data: RefreshTokenInput, params?: RequestParams) => Promise<HttpResponse<RefreshTokenResponse, any>>;
    webauthnRegister: (data: WebAuthnRegisterInput, params?: RequestParams) => Promise<HttpResponse<WebAuthnRegisterResponse, any>>;
    webauthnRegisterVerify: (data: WebAuthNRegisterVerifyInput, params?: RequestParams) => Promise<HttpResponse<WebAuthNRegisterVerifyResponse, any>>;
    webAuthnLogin: (data: WebAuthnLoginInput, params?: RequestParams) => Promise<HttpResponse<WebAuthnLoginResponse, any>>;
    webauthnLoginVerify: (data: WebAuthnLoginVerifyInput, params?: RequestParams) => Promise<HttpResponse<WebAuthnLoginVerifyResponse, any>>;
    resetPassword: (data: ResetPasswordInput, params?: RequestParams) => Promise<HttpResponse<ResetPasswordResponse, any>>;
    resetPasswordVerify: (data: ResetPasswordConfirmInput, params?: RequestParams) => Promise<HttpResponse<ResetPasswordConfirmResponse, any>>;
    enable2fa: (data: Enable2faInput, params?: RequestParams) => Promise<HttpResponse<Enable2faInput, any>>;
    verify2fa: (data: Verify2faInput, params?: RequestParams) => Promise<HttpResponse<Verify2faResponse, any>>;
    disable2fa: (data: Disable2faInput, params?: RequestParams) => Promise<HttpResponse<Disable2faInput, any>>;
}

export { Auth };
