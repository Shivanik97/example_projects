import * as msal from 'msal'

const msalConfig = {
    auth: {
        clientId: "7b6c09a9-ebec-4c02-9262-5bffb5899175",
        authority: 'https://login.microsoftonline.com/0d989537-00ff-424b-ab8b-b5e67c791f68',
        redirectURI: 'http://localhost:8080/'
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: true
    }
};
export const graphScopes = {scopes: ['user.read']};
export const myMSALObj = new msal.UserAgentApplication(msalConfig);
console.log(myMSALObj)