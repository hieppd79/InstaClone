import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {PostDetail, PostList} from '../screens/main';
import {Routes} from './routes';

type AppNavigationProps = {};
const AppStack = createStackNavigator();

const AppNavigation: FC<AppNavigationProps> = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName={Routes.main.post_list}>
        <AppStack.Screen
          name={Routes.main.post_list}
          component={PostList}
          options={{
            headerShown: false,
          }}
        />
        <AppStack.Screen
          name={Routes.main.post_detail}
          component={PostDetail}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation;
