import AsyncStorage from '@react-native-async-storage/async-storage';


// Function to store data in AsyncStorage
export const setLocalData = async (key: string, value: any) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log('Error storing data:', error);
    }
  };
  
  // Function to retrieve data from AsyncStorage
  export const getLocalData = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value != null ? JSON.parse(value) : null;
    } catch (error) {
      console.log('Error retrieving data:', error);
      return null;
    }
  };
  
  // Function to remove data from AsyncStorage
  export const removeLocalData = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log('Error removing data:', error);
    }
  };