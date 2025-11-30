import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DiaryScreen from './src/screens/DiaryScreen';
import HabitScreen from './src/screens/HabitScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: { paddingBottom: 5, paddingTop: 5 },
          }}
        >
          <Tab.Screen 
            name="Diary" 
            component={DiaryScreen} 
            options={{ title: '日記' }}
          />
          <Tab.Screen 
            name="Habits" 
            component={HabitScreen} 
            options={{ title: '習慣' }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
