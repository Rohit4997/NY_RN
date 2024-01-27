
import { NativeModules } from 'react-native';

// Define the type for the native module
interface MySharedPreferencesModule {
  setStringValue(key: string, value: string): void;
  getStringValue(key: string): Promise<string>;
}

// Access the native module
const { MySharedPreferencesModule } = NativeModules as {
  MySharedPreferencesModule: MySharedPreferencesModule;
};

export const setStringValue = (key: string, value: string): void => {
  MySharedPreferencesModule.setStringValue(key, value);
};

export const getStringValue = async (key: string): Promise<string> => {
  return MySharedPreferencesModule.getStringValue(key);
};



// export const getStringValue = async (key: string): Promise<string> => {
//     //   return MySharedPreferencesModule.getStringValue(key);
//       let x = MySharedPreferencesModule.getStringValue(key)
//       .then(result => console.log('Result:', result))
//       .catch(error => console.error('Error:', error));
//       console.log("zxc x", x);
//       return "";
//     };