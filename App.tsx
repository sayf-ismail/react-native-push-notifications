import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import registerNNPushToken from 'native-notify'

import Home from './screens/Home';
import ChosenTask from './screens/ChosenTask';
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  // push notifications
  registerNNPushToken(7906, '8eUxkdUkqd3AyXffe9b7aT');

  // globalstate management
  const [toDoList, setToDoList] = useState<toDoList[]>([{ id: 1, task: 'brush your teeth' }]);
  const [task, setTask] = useState<string>('');
  const [chosenTask, setChosenTask] = useState<string>('');

  const GlobalState = {
    toDoList, setToDoList,
    task, setTask,
    chosenTask, setChosenTask
  }

  // navigation

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {props => <Home {...props} GlobalState={GlobalState} />}
        </Stack.Screen>

        <Stack.Screen name="ChosenTask" options={{ headerShown: false }}>
          {props => <ChosenTask {...props} GlobalState={GlobalState} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
