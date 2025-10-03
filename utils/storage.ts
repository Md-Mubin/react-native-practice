import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'allTasks';

export const saveTasksToStorage = async (tasks: any) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.log('Error saving tasks:', error);
  }
};

export const loadTasksFromStorage = async () => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log('Error loading tasks:', error);
    return [];
  }
};
