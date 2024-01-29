interface GetSwapDto {
    src: string;
    dst: string;
    amount: string;
    from: string;
    /** @format double */
    slippage: number;
    protocols?: string;
    fee?: string;
    disableEstimate?: boolean;
    permit?: string;
    includeTokensInfo?: boolean;
    includeProtocols?: boolean;
    compatibility?: boolean;
    allowPartialFill?: boolean;
    parts?: string;
    mainRouteParts?: string;
    connectorTokens?: string;
    complexityLevel?: string;
    gasLimit?: string;
    gasPrice?: string;
    referrer?: string;
    receiver?: string;
    /** @format double */
    chainId?: number;
}
interface NonceResponse {
    /** @format double */
    nonce: number;
}
interface BalanceResponse {
    balance: string;
}
interface Tx {
    /** @format double */
    type?: number;
    /** @format double */
    chain_id?: number;
    data?: string;
    gas?: string;
    gas_price?: string;
    gas_tip_cap?: string | null;
    gas_fee_cap?: string | null;
    value?: string;
    /** @format double */
    nonce?: number;
    from?: string;
    to?: string | null;
    blob_gas?: string | null;
    blob_gas_fee_cap?: string | null;
    blob_hashes?: string[] | null;
    v?: string;
    r?: string;
    s?: string;
}
interface TransactionRequest {
    nonce?: string;
    data?: string;
    value?: string;
    to?: string;
    from?: string;
    maxFeePerGas?: string;
    maxPriorityFeePerGas?: string;
}
interface TransactionData {
    moon_scan_url?: string;
    transaction_hash: string;
    signed_transaction: string;
    signed_message?: string;
    raw_transaction?: string;
    signature?: string;
    transaction?: Tx;
    userOps?: TransactionRequest[];
    userop_transaction?: string;
}
interface Transaction {
    userop_transaction?: string;
    userOps?: TransactionRequest[];
    transaction?: Tx;
    signature?: string;
    moon_scan_url?: string;
    transactions?: TransactionData[];
    data?: string | null;
    raw_transaction?: string;
    signed_transaction?: string;
    transaction_hash?: string;
}
interface AccountResponse {
    keys?: string[];
    address?: string;
}
interface SignMessage {
    name?: string;
    data: string;
    encoding?: string;
    header?: boolean;
    signtype?: boolean;
}
interface EnsResolveResponse {
    address: string;
}
interface ENSReverseResolveResponse {
    domain: string;
}
interface AaveReservesData {
    current_atoken_balance: string;
    current_borrow_balance: string;
    principal_borrow_balance: string;
    borrow_rate_mode: string;
    borrow_rate: string;
    liquidity_rate: string;
    origination_fee: string;
    variable_borrow_index: string;
    last_update_timestamp: string;
    usage_as_collateral_enabled: string;
}
interface Erc20Response {
    /** @format double */
    type?: number;
    /** @format double */
    chain_id?: number;
    data?: string;
    gas?: string;
    gas_price?: string;
    gas_tip_cap?: string | null;
    gas_fee_cap?: string | null;
    value?: string;
    /** @format double */
    nonce?: number;
    from?: string;
    to?: string | null;
    blob_gas?: string | null;
    blob_gas_fee_cap?: string | null;
    blob_hashes?: string[] | null;
    v?: string;
    r?: string;
    s?: string;
    name?: string;
    symbol?: string;
    decimals?: string;
    totalSupply?: string;
    contract_address?: string;
    balanceOf?: string;
    allowance?: string;
}
interface Erc1155Response {
    /** @format double */
    type?: number;
    /** @format double */
    chain_id?: number;
    data?: string;
    gas?: string;
    gas_price?: string;
    gas_tip_cap?: string | null;
    gas_fee_cap?: string | null;
    value?: string;
    /** @format double */
    nonce?: number;
    from?: string;
    to?: string | null;
    blob_gas?: string | null;
    blob_gas_fee_cap?: string | null;
    blob_hashes?: string[] | null;
    v?: string;
    r?: string;
    s?: string;
    balance_of?: string;
    balance_of_batch?: string;
}
interface BroadCastRawTransactionResponse {
    success: boolean;
    message: string;
    data: string;
}
interface BitcoinTransactionOutput {
    signedTx?: string;
    transaction_hash?: string;
}
interface Erc721Response {
    /** @format double */
    type?: number;
    /** @format double */
    chain_id?: number;
    data?: string;
    gas?: string;
    gas_price?: string;
    gas_tip_cap?: string | null;
    gas_fee_cap?: string | null;
    value?: string;
    /** @format double */
    nonce?: number;
    from?: string;
    to?: string | null;
    blob_gas?: string | null;
    blob_gas_fee_cap?: string | null;
    blob_hashes?: string[] | null;
    v?: string;
    r?: string;
    s?: string;
    name?: string;
    symbol?: string;
    balance_of?: string;
    owner_of?: string;
    token_uri?: string;
    contract_address?: string;
    isApprovedForAll?: string;
}
interface AccountControllerResponse {
    data?: NonceResponse | BalanceResponse | Transaction | AccountResponse | SignMessage | EnsResolveResponse | ENSReverseResolveResponse | AaveReservesData | Erc20Response | Erc1155Response | BroadCastRawTransactionResponse | BitcoinTransactionOutput | Erc721Response;
    success?: boolean;
    message?: string;
}
interface InputBody {
    to?: string;
    data?: string;
    input?: string;
    value?: string;
    nonce?: string;
    gas?: string;
    gasPrice?: string;
    chain_id?: string;
    encoding?: string;
    EOA?: boolean;
    contract_address?: string;
    token_id?: string;
    token_ids?: string;
    approved?: boolean;
    broadcast?: boolean;
}
interface SignTypedData {
    data: string;
}
interface CreateAccountInput {
    private_key?: string;
}
interface DeployInput {
    chain_id?: string;
    abi: string;
    bytecode: string;
    constructor_args?: string;
}
interface BroadcastInput {
    chainId: string;
    rawTransaction: string;
}
interface AaveInput {
    to?: string;
    data?: string;
    input?: string;
    value?: string;
    nonce?: string;
    gas?: string;
    gasPrice?: string;
    chain_id?: string;
    encoding?: string;
    EOA?: boolean;
    contract_address?: string;
    token_id?: string;
    token_ids?: string;
    approved?: boolean;
    broadcast?: boolean;
    lending_pool?: string;
    amount?: string;
    atoken_to_redeeem?: string;
    ref_code?: string;
    interest_rate_mode?: string;
}
interface BitcoinInput {
    network?: string;
    private_key?: string;
}
interface BitcoinTransactionInput {
    to?: string;
    /** @format double */
    value?: number;
    network?: string;
    compress?: boolean;
}
interface BitcoinCashInput {
    network?: string;
    private_key?: string;
}
interface BitcoinCashTransactionInput {
    to?: string;
    /** @format double */
    value?: number;
    network?: string;
    compress?: boolean;
}
interface TransactionResponse {
    message: string;
    tx: {
        data: string;
        value: string;
        /** @format double */
        nonce: number;
        gas: string;
        to: string;
        from: string;
    };
    info: {
        conveyorGas: string;
        affiliateGas: string;
        affiliateAggregator: string;
        amountOut: string;
        amountOutMin: string;
    };
    /** @format double */
    chainId: number;
    /** @format double */
    currentBlockNumber: number;
}
interface ConveyorFinanceControllerResponse {
    input?: InputBody;
    convey?: TransactionResponse;
    data?: TransactionData;
    tx?: {
        data: string;
        value: string;
        /** @format double */
        nonce: number;
        gas: string;
        to: string;
        from: string;
    };
    signed?: Transaction;
    success: boolean;
    message: string;
}
interface TokenSwapParams {
    to?: string;
    data?: string;
    input?: string;
    value?: string;
    nonce?: string;
    gas?: string;
    gasPrice?: string;
    chain_id?: string;
    encoding?: string;
    EOA?: boolean;
    contract_address?: string;
    token_id?: string;
    token_ids?: string;
    approved?: boolean;
    broadcast?: boolean;
    tokenIn: string;
    tokenOut: string;
    /** @format double */
    tokenInDecimals: number;
    /** @format double */
    tokenOutDecimals: number;
    amountIn: string;
    slippage: string;
    recipient: string;
    referrer: string;
}
interface CosmosInput {
    network?: string;
    private_key?: string;
}
interface CosmosTransactionInput {
    to?: string;
    /** @format double */
    value?: number;
    network?: string;
    compress?: boolean;
}
interface DogeCoinInput {
    network?: string;
    private_key?: string;
}
interface DogeCoinTransactionInput {
    to?: string;
    /** @format double */
    value?: number;
    network?: string;
    compress?: boolean;
}
interface EnsResolveInput {
    domain: string;
    chain_id: string;
}
interface EosInput {
    network?: string;
    private_key?: string;
}
interface EosTransactionInput {
    to?: string;
    /** @format double */
    value?: number;
    network?: string;
    compress?: boolean;
}
interface Erc1155Request {
    to?: string;
    data?: string;
    input?: string;
    value?: string;
    nonce?: string;
    gas?: string;
    gasPrice?: string;
    chain_id?: string;
    encoding?: string;
    EOA?: boolean;
    contract_address?: string;
    token_id?: string;
    token_ids?: string;
    approved?: boolean;
    broadcast?: boolean;
}
interface Erc721Request {
    to?: string;
    data?: string;
    input?: string;
    value?: string;
    nonce?: string;
    gas?: string;
    gasPrice?: string;
    chain_id?: string;
    encoding?: string;
    EOA?: boolean;
    contract_address?: string;
    token_id?: string;
    token_ids?: string;
    approved?: boolean;
    broadcast?: boolean;
}
interface LitecoinInput {
    network?: string;
    private_key?: string;
}
interface LitecoinTransactionInput {
    to?: string;
    /** @format double */
    value?: number;
    network?: string;
    compress?: boolean;
}
interface CryptoCurrency {
    networkDisplayName: string;
    icon: string;
    /** @format double */
    chainId: number;
    address: string;
    /** @format double */
    decimals: number;
    network: string;
    symbol: string;
    name: string;
    code: string;
    id: string;
}
interface FiatCurrency {
    icon: string;
    symbol: string;
    name: string;
    code: string;
    id: string;
}
interface Message {
    fiat: FiatCurrency[];
    crypto: CryptoCurrency[];
}
interface SupportedCurrenciesResponse {
    message: Message;
}
interface PaymentType {
    icon: string;
    name: string;
    paymentTypeId: string;
}
interface SupportedPaymentTypesMessage {
    googlepay: PaymentType;
    applepay: PaymentType;
    creditcard: PaymentType;
}
interface SupportedPaymentTypesCurrencyResponse {
    message: SupportedPaymentTypesMessage;
}
interface SupportedDefaultResponse {
    defaults: {
        id: {
            provider: string;
            paymentMethod: string;
            /** @format double */
            amount: number;
            target: string;
            source: string;
        };
    };
    recommended: {
        provider: string;
        paymentMethod: string;
        /** @format double */
        amount: number;
        target: string;
        source: string;
    };
}
interface SupportedAssetResponse {
    country: string;
    assets: {
        crypto: string[];
        paymentMethods: string[];
        fiat: string;
    }[];
}
interface GetSupportedOnRampsResponse {
    message: {
        id: string;
        displayName: string;
        icons: {
            png: {
                '160x160': string;
                '32x32': string;
            };
            svg: string;
        };
        icon: string;
    }[];
}
interface AvailablePaymentMethod {
    icon: string;
    name: string;
    paymentTypeId: string;
}
interface Quote {
    recommendations: string[];
    paymentMethod: string;
    quoteId: string;
    ramp: string;
    availablePaymentMethods: AvailablePaymentMethod[];
    /** @format double */
    payout: number;
    /** @format double */
    transactionFee: number;
    /** @format double */
    networkFee: number;
    /** @format double */
    rate: number;
}
type Quotes = Quote[];
interface SellQuote {
    recommendations: string[];
    quoteId: string;
    paymentMethod: string;
    ramp: string;
    /** @format double */
    payout: number;
    /** @format double */
    transactionFee: number;
    /** @format double */
    networkFee: number;
    /** @format double */
    rate: number;
}
type SellQuotes = SellQuote[];
interface TransactionInput {
    supportedParams: {
        partnerData: {
            redirectUrl: {
                success: string;
            };
        };
        theme: {
            /** @format double */
            borderRadius: number | null;
            cardColor: string;
            secondaryTextColor: string;
            primaryTextColor: string;
            secondaryColor: string;
            primaryColor: string;
            themeName: string;
            isDark: boolean;
        };
    };
    wallet: {
        address: string;
    };
    metaData: {
        quoteId: string;
    };
    originatingHost: string;
    partnerContext: string;
    uuid: string;
    network: string;
    paymentMethod: string;
    type: string;
    /** @format double */
    amount: number;
    destination: string;
    source: string;
    onramp: string;
}
interface PaymentIntentResponse {
    metadata?: Record<string, string>;
    uri?: string;
    qr_code?: string;
    status?: string;
    destination?: string;
    /** @format double */
    amount?: number;
    network?: string;
    currency?: string;
    id?: string;
    message?: string;
    success: boolean;
}
interface CreatePaymentIntentInput {
    metadata: Record<string, string>;
    network?: string;
    /** @format double */
    amount: number;
    currency?: string;
}
interface Block {
    number: string;
    hash: string;
    timestamp: string;
}
interface TriggerOutput {
    value: any;
    name: string;
}
interface Log {
    triggers?: TriggerOutput[];
    logIndex: string;
    transactionHash: string;
    address: string;
    data: string;
    topic0: string | null;
    topic1: string | null;
    topic2: string | null;
    topic3: string | null;
}
interface InternalTransaction {
    from: string | null;
    to: string | null;
    value: string | null;
    transactionHash: string;
    gas: string | null;
}
interface AbiInput {
    name: string;
    type: string;
    indexed?: boolean;
    components?: AbiInput[];
    internalType?: string;
}
interface AbiOutput {
    name: string;
    type: string;
    components?: AbiOutput[];
    internalType?: string;
}
/**
 * The abi to parse the log object of the contract
 * @example {}
 */
interface AbiItem {
    anonymous?: boolean;
    constant?: boolean;
    inputs?: AbiInput[];
    name?: string;
    outputs?: AbiOutput[];
    payable?: boolean;
    stateMutability?: string;
    type: string;
    /** @format double */
    gas?: number;
}
interface IERC20Transfer {
    transactionHash: string;
    contract: string;
    logIndex: string;
    from: string;
    to: string;
    value: string;
    tokenDecimals: string;
    tokenName: string;
    tokenSymbol: string;
    valueWithDecimals?: string;
    triggers?: TriggerOutput[];
}
interface IERC20Approval {
    transactionHash: string;
    contract: string;
    logIndex: string;
    owner: string;
    spender: string;
    value: string;
    tokenDecimals: string;
    tokenName: string;
    tokenSymbol: string;
    valueWithDecimals?: string;
    triggers?: TriggerOutput[];
}
interface INFTTransfer {
    transactionHash: string;
    contract: string;
    logIndex: string;
    tokenContractType: string;
    tokenName: string;
    tokenSymbol: string;
    triggers?: TriggerOutput[];
    operator: string | null;
    from: string;
    to: string;
    tokenId: string;
    amount: string;
}
interface INativeBalance {
    address: string;
    balance: string;
}
interface INFTApprovalERC721 {
    transactionHash: string;
    contract: string;
    logIndex: string;
    owner: string;
    approved: string;
    tokenId: string;
    tokenContractType: string;
    tokenName: string;
    tokenSymbol: string;
}
interface INFTApprovalERC1155 {
    transactionHash: string;
    contract: string;
    logIndex: string;
    account: string;
    operator: string;
    approved: boolean;
    tokenContractType: string;
    tokenName: string;
    tokenSymbol: string;
}
interface IOldNFTApproval {
    ERC721: INFTApprovalERC721[];
    ERC1155: INFTApprovalERC1155[];
}
interface INFTApproval {
    transactionHash: string;
    contract: string;
    logIndex: string;
    tokenContractType: string;
    tokenName: string;
    tokenSymbol: string;
    account: string;
    operator: string;
    approvedAll: boolean;
    tokenId: string | null;
}
interface IWebhook {
    block: Block;
    chainId: string;
    logs: Log[];
    txs: Transaction[];
    txsInternal: InternalTransaction[];
    abi: AbiItem[];
    /** @format double */
    retries: number;
    confirmed: boolean;
    tag: string;
    streamId: string;
    erc20Transfers: IERC20Transfer[];
    erc20Approvals: IERC20Approval[];
    nftTransfers: INFTTransfer[];
    nativeBalances: INativeBalance[];
    /** @deprecated */
    nftApprovals: IOldNFTApproval;
    nftTokenApprovals: INFTApproval[];
}
interface PingResponse {
    message: string;
}
interface RippleInput {
    network?: string;
    private_key?: string;
}
interface RippleTransactionInput {
    to?: string;
    /** @format double */
    value?: number;
    network?: string;
    compress?: boolean;
}
interface SolanaInput {
    network?: string;
    private_key?: string;
}
interface SolanaTransactionInput {
    to?: string;
    /** @format double */
    value?: number;
    network?: string;
    compress?: boolean;
}
interface TronInput {
    network?: string;
    private_key?: string;
}
interface TronTransactionInput {
    to?: string;
    /** @format double */
    value?: number;
    network?: string;
    compress?: boolean;
}
interface UniswapInput {
    to?: string;
    data?: string;
    input?: string;
    value?: string;
    nonce?: string;
    gas?: string;
    gasPrice?: string;
    chain_id?: string;
    encoding?: string;
    EOA?: boolean;
    contract_address?: string;
    token_id?: string;
    token_ids?: string;
    approved?: boolean;
    broadcast?: boolean;
    token_a?: string;
    token_b?: string;
    amount_a?: string;
    amount_b?: string;
}

export type { AaveInput, AaveReservesData, AbiInput, AbiItem, AbiOutput, AccountControllerResponse, AccountResponse, AvailablePaymentMethod, BalanceResponse, BitcoinCashInput, BitcoinCashTransactionInput, BitcoinInput, BitcoinTransactionInput, BitcoinTransactionOutput, Block, BroadCastRawTransactionResponse, BroadcastInput, ConveyorFinanceControllerResponse, CosmosInput, CosmosTransactionInput, CreateAccountInput, CreatePaymentIntentInput, CryptoCurrency, DeployInput, DogeCoinInput, DogeCoinTransactionInput, ENSReverseResolveResponse, EnsResolveInput, EnsResolveResponse, EosInput, EosTransactionInput, Erc1155Request, Erc1155Response, Erc20Response, Erc721Request, Erc721Response, FiatCurrency, GetSupportedOnRampsResponse, GetSwapDto, IERC20Approval, IERC20Transfer, INFTApproval, INFTApprovalERC1155, INFTApprovalERC721, INFTTransfer, INativeBalance, IOldNFTApproval, IWebhook, InputBody, InternalTransaction, LitecoinInput, LitecoinTransactionInput, Log, Message, NonceResponse, PaymentIntentResponse, PaymentType, PingResponse, Quote, Quotes, RippleInput, RippleTransactionInput, SellQuote, SellQuotes, SignMessage, SignTypedData, SolanaInput, SolanaTransactionInput, SupportedAssetResponse, SupportedCurrenciesResponse, SupportedDefaultResponse, SupportedPaymentTypesCurrencyResponse, SupportedPaymentTypesMessage, TokenSwapParams, Transaction, TransactionData, TransactionInput, TransactionRequest, TransactionResponse, TriggerOutput, TronInput, TronTransactionInput, Tx, UniswapInput };
