import { DevConfig } from './dev-config';
import { UatConfig } from './uat-config';
import { Config } from './config';

// why export? encounter this error: Reference to a local (non-exported) symbol
export const configFactory = () => {
  const hostname = window.location.hostname;
  switch (hostname) {
    case'127.0.0.1':
      console.log('Initializing DEV env');
      return new DevConfig();
    case 'localhost':
      console.log('Initializing UAT env');
      return new UatConfig();
    default:
      console.log('Initializing DEFAULT DEV env');
      return new DevConfig();
  }
};

export const configProvider = {
  provide: Config,
  useFactory: configFactory
};
