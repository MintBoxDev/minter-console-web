export const MAINNET = 'mainnet';
export const TESTNET = 'testnet';
export const NETWORK = process.env.APP_ENV === MAINNET ? MAINNET : TESTNET;
export const APP_BASE_URL =  process.env.APP_BASE_URL || '/';
export const BASE_TITLE_NETWORK = NETWORK === MAINNET ? '' : 'Testnet ';
export const BASE_TITLE_END = ' — Minter';
export const BASE_TITLE = BASE_TITLE_NETWORK + 'Console' + BASE_TITLE_END;
export const BASE_DESCRIPTION = `Minter Console is by far the most advanced part of our project that lets you manage all your activities on our ${NETWORK === TESTNET ? 'test ': ''}network.`;
export const BASE_COIN = NETWORK === MAINNET ? 'BIP' : 'MNT';
/**
 * @deprecated
 * @type {string}
 */
export const COIN_NAME = BASE_COIN;
export const CHAIN_ID = NETWORK === MAINNET ? 1 : 2;
export const ACCOUNTS_API_URL = process.env.APP_ACCOUNTS_API_URL;
export const GATE_API_URL = process.env.APP_GATE_API_URL;
export const AUTO_DELEGATION_API_URL = process.env.APP_AUTO_DELEGATION_API_URL;
export const EXPLORER_API_URL = process.env.APP_EXPLORER_API_URL;
export const EXPLORER_RTM_URL = process.env.APP_EXPLORER_RTM_URL;
export const EXPLORER_HOST = process.env.APP_EXPLORER_HOST;
export const MNS_API_URL = process.env.APP_MNS_API_URL;
export const MNS_PUBLIC_KEY = process.env.APP_MNS_PUBLIC_KEY;
export const ETHEREUM_API_URL = 'https://ropsten.dl-dev.ru/';
export const ETHERSCAN_HOST = NETWORK === MAINNET ? 'https://etherscan.io' : 'https://ropsten.etherscan.io';
export const LANGUAGE_COOKIE_KEY = 'minter-language';
export const USERNAME_MIN_LENGTH = 5;
export const USERNAME_MAX_LENGTH = 16;
export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MAX_LENGTH = 100;
export const I18N_ROUTE_NAME_SEPARATOR = '___';

export const CONVERT_TYPE = {
    BANCOR: 'bancor',
    POOL: 'pool',
    OPTIMAL: 'optimal',
};
