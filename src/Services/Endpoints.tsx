import { getStringValue } from './../JBridge/SharedPreferencesModule';
import { localConfig } from '../../localConfig';

var BASE_URL = localConfig.BASE_URL;

export const fetchAndStoreBaseUrl = async (): Promise<void> => {
    try {
      // Fetch BASE_URL from shared preferences
      const fetchedBaseUrl = await getStringValue('BASE_URL');
      BASE_URL = fetchedBaseUrl;
    } catch (error) {
      console.error('Error fetching and storing BASE_URL:', error);
    }
  };

// fetchAndStoreBaseUrl();
  
type Endpoints = {
  login: string;
  getUser: string;
  authVerify : String;
  // Add more endpoints as needed
};

const endpoints: Endpoints = {
  login: '/auth',
  getUser: '/user/:userId', // Example with a dynamic parameter
  authVerify : '/auth/:authId/verify'

  // Add more endpoints as needed
};

type Params = Record<string, string>;

export const getEndpoint = (key: keyof Endpoints, params: Params = {}): string => {
  let endpoint = endpoints[key] || '';

  // Replace dynamic parameters in the endpoint
  Object.keys(params).forEach(param => {
    endpoint = endpoint.replace(`:${param}`, params[param]);
  });

  console.log("zxc BASE_URL " + BASE_URL);
  
  return `${BASE_URL}${endpoint}`;
};