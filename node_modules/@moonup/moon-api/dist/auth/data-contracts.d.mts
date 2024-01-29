import { VerifiedRegistrationResponse, VerifiedAuthenticationResponse } from '@simplewebauthn/server';
import { PublicKeyCredentialCreationOptionsJSON, PublicKeyCredentialRequestOptionsJSON, RegistrationResponseJSON, AuthenticationResponseJSON } from '@simplewebauthn/typescript-types';

interface RefreshTokenInput {
    refreshToken: string;
}
interface RefreshTokenResponse {
    accessToken: string;
}
interface ProfileInput {
}
interface ProfileResponse {
    id: number;
    username: string;
    email: string;
    displayName: string;
    register_timestamp: number;
    login_timestamp: number;
    createdAt: Date;
    updatedAt: Date;
    githubId?: string;
    appleId?: string;
    discordId?: string;
    googleId?: string;
}
interface CreateOauth2ClientInput {
    name: string;
    redirect_uris: string[];
}
interface CreateOauth2ClientResponse {
    client_id: string;
    client_secret: string;
}
interface MoonOauth2QueryParamsInput {
    response_type: string;
    client_id: string;
    redirect_uri: string;
    scope: string;
    state: string;
}
interface MoonOauth2AuthorizeInput {
    authorizationCode: string;
    expiresAt: Date;
    redirectUri: string;
    scope: string;
}
interface MoonOauth2AuthorizeResponse {
    code: string;
    state: string;
    redirect_uri: string;
    client_id: string;
    scope: string;
}
interface MoonOauth2ExchangeInput {
    grant_type: string;
    client_id: string;
    client_secret: string;
    code: string;
    redirect_uri: string;
}
interface MoonOauth2ExchangeResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
}
interface GoogleCallbackInput {
    code: string;
    scope: string;
    authuser: string;
    hd: string;
    prompt: string;
}
interface GoogleCallbackResponse {
    token: string;
    refreshToken: string;
}
interface GoogleAltCallbackInput {
    code: string;
    scope: string;
    authuser: string;
    hd: string;
    prompt: string;
}
interface GoogleAltCallbackResponse {
    token: string;
    refreshToken: string;
}
interface DiscordCallbackInput {
}
interface DiscordCallbackResponse {
    token: string;
    refreshToken: string;
}
interface GithubCallbackInput {
}
interface GithubCallbackResponse {
    token: string;
    refreshToken: string;
}
interface WebAuthnRegisterInput {
    username: string;
}
interface WebAuthnRegisterResponse {
    message?: string;
    success?: boolean;
    register?: VerifiedRegistrationResponse;
    auth?: VerifiedAuthenticationResponse;
    options?: PublicKeyCredentialCreationOptionsJSON;
    optionsAuth?: PublicKeyCredentialRequestOptionsJSON;
}
interface WebAuthNRegisterVerifyInput extends RegistrationResponseJSON {
    username: string;
}
interface WebAuthNRegisterVerifyResponse {
    message: string;
}
interface WebAuthnLoginInput {
    username: string;
}
interface WebAuthnLoginResponse {
    message?: string;
    success?: boolean;
    register?: VerifiedRegistrationResponse;
    auth?: VerifiedAuthenticationResponse;
    options?: PublicKeyCredentialCreationOptionsJSON;
    optionsAuth?: PublicKeyCredentialRequestOptionsJSON;
}
interface WebAuthnLoginVerifyInput extends AuthenticationResponseJSON {
    username: string;
}
interface WebAuthnLoginVerifyResponse {
    token: string;
    refreshToken: string;
}
interface EmailSignupInput {
    email: string;
    password: string;
}
interface EmailSignupResponse {
    message: string;
}
interface EmailLoginInput {
    email: string;
    password: string;
}
interface EmailLoginResponse {
    token: string;
    refreshToken: string;
    expiry: number;
}
interface ResetPasswordInput {
    email: string;
}
interface ResetPasswordResponse {
    message: string;
}
interface ResetPasswordConfirmInput {
    token: string;
    password: string;
}
interface ResetPasswordConfirmResponse {
    message: string;
}
interface Enable2faInput {
    userId: number;
}
interface Enable2faResponse {
    message: string;
}
interface Verify2faInput {
    userId: number;
    token: string;
}
interface Verify2faResponse {
    message: string;
}
interface Disable2faInput {
    userId: number;
    code: string;
}
interface Disable2faResponse {
    message: string;
}

export type { CreateOauth2ClientInput, CreateOauth2ClientResponse, Disable2faInput, Disable2faResponse, DiscordCallbackInput, DiscordCallbackResponse, EmailLoginInput, EmailLoginResponse, EmailSignupInput, EmailSignupResponse, Enable2faInput, Enable2faResponse, GithubCallbackInput, GithubCallbackResponse, GoogleAltCallbackInput, GoogleAltCallbackResponse, GoogleCallbackInput, GoogleCallbackResponse, MoonOauth2AuthorizeInput, MoonOauth2AuthorizeResponse, MoonOauth2ExchangeInput, MoonOauth2ExchangeResponse, MoonOauth2QueryParamsInput, ProfileInput, ProfileResponse, RefreshTokenInput, RefreshTokenResponse, ResetPasswordConfirmInput, ResetPasswordConfirmResponse, ResetPasswordInput, ResetPasswordResponse, Verify2faInput, Verify2faResponse, WebAuthNRegisterVerifyInput, WebAuthNRegisterVerifyResponse, WebAuthnLoginInput, WebAuthnLoginResponse, WebAuthnLoginVerifyInput, WebAuthnLoginVerifyResponse, WebAuthnRegisterInput, WebAuthnRegisterResponse };
