import { Environment } from '@abp/ng.core';

// const baseUrl = 'http://localhost:4200';

// export const environment = {
//   production: false,
//   application: {
//     baseUrl,
//     name: 'Abp',
//     logoUrl: '',
//   },
//   oAuthConfig: {
//     issuer: 'https://localhost:44366/',
//     redirectUri: baseUrl,
//     clientId: 'Abp_App',
//     responseType: 'code',
//     scope: 'offline_access Abp',
//     requireHttps: true,
//   },
//   apis: {
//     default: {
//       url: 'https://localhost:44366',
//       rootNamespace: 'Further.Abp',
//     },
//   },
// } as Environment;


const baseUrl = 'https://{0}.admin.getabp.net';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'Abp',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://{0}.api.getabp.net/',
    redirectUri: baseUrl,
    clientId: 'Abp_App',
    responseType: 'code',
    scope: 'offline_access Abp',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://{0}.api.getabp.net',
      rootNamespace: 'Further.Abp',
    },
  },
} as Environment;
