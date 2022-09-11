/* eslint-disable import/no-mutable-exports */
import * as cdkOutputs from "cdk-outputs.json";
const cdkOutputsVars = cdkOutputs[Object.keys(cdkOutputs)[0]];

export const TWITTER_URL = "https://twitter.com/mylocalegg";
export const INSTA_URL = "https://www.instagram.com/mylocalegg/";
export const FACEBOOK_URL = "https://www.facebook.com/The-Local-Egg-108732465172233";

let REGION = "";
let API_BASE_URL = "";
let USER_POOL_CLIENT_ID = "";
let USER_POOL_ID = "";
let IDENTITY_POOL_ID = "";
let OAUTH_DOMAIN = "";
let S3_BUCKET_NAME = "";
let FRONTEND_BASE_URL = "";

const DEV_API_URL = cdkOutputsVars.apiUrl;
const DEV_API_URL_WITHOUT_TRAILING_SLASH = DEV_API_URL.slice(0, DEV_API_URL.length - 1);
API_BASE_URL = DEV_API_URL_WITHOUT_TRAILING_SLASH;
REGION = cdkOutputsVars.region;
USER_POOL_CLIENT_ID = cdkOutputsVars.userPoolClientId;
USER_POOL_ID = cdkOutputsVars.userPoolId;
IDENTITY_POOL_ID = cdkOutputsVars.identityPoolId;
OAUTH_DOMAIN = cdkOutputsVars.oauthdomain;
S3_BUCKET_NAME = cdkOutputsVars.bucketName;
FRONTEND_BASE_URL = cdkOutputsVars.siteDomain;

export const S3_BUCKET_URL = `https://${S3_BUCKET_NAME}.s3.amazonaws.com`;
export const MAX_FILE_SIZE_BYTES = 1000000;

export const JWT_LOCALSTORAGE_KEY = "cognito_id_token";
export const IDENTITY_LOCALSTORAGE_KEY = "cognito_identity_id";
export const TEMP_PWD_LOCALSTORAGE_KEY = "auto_sign_in";

export enum ROUTE_PATHS {
  LOGIN = "/auth/login",
  REGISTER = "/auth/register",
  RESEND_REGISTRATION_LINK = "/auth/resend-registration-link",
  RESET_PASSWORD = "/auth/reset-password",
  REQUEST_PASSWORD_RESET = "/auth/request-password-reset",
  CONFIRM_RESET_PASSWORD = "/auth/confirm-reset-password",
  SETTINGS = "/settings",
  CONTACTS = "/contacts",
}

export enum IMAGE_PATHS {
  OPEN_GRAPH = "/images/global/og.webp",
  PAGE_NOT_FOUND = "/images/404/page-not-found.svg",
  MAN_DOOR = "/images/auth/login/man-door.svg",
  COMPLETE_PASSWORD_RESET = "/images/auth/complete-password-reset/man-shield.svg",
  WOMAN_SIGNING_UP = "/images/auth/register/woman-signing-up.svg",
  TEXT_FIELD = "/images/auth/request-password-reset/text-field.svg",
  WOMAN_CONFIRMING = "/images/auth/resend-registration-link/woman-confirming.svg",
  CONTACTS = "/images/contacts/contacts.svg",
  MAIL_ICON = "/images/contacts/mail-icon.svg",
}

export { REGION, API_BASE_URL, USER_POOL_CLIENT_ID, USER_POOL_ID, IDENTITY_POOL_ID, OAUTH_DOMAIN, FRONTEND_BASE_URL };
