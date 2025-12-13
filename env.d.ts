declare global {
  namespace NodeJS {
    interface ProcessEnv {
      AZURE_STORAGE_ACCOUNT_BASEURL: string;
      AZURE_STORAGE_CONNECTION_STRING: string;
      AZURE_STORAGE_CONTAINER_NAME: string;
      NODE_ENV: 'development' | 'production' | 'test';
    }
  }
}

export {};