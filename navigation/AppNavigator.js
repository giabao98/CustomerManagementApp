import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Colors from '../constants/colors';
import TabBarIcon from '../components/utils/TabBarIcon';
import TabBarText from '../components/utils/TabBarText';

import SecondScreen from '../screens/SecondScreen';
import About from '../screens/About';
import Profile from '../screens/Profile';
import Customer from '../screens/Customer';

const MainStack = createStackNavigator();
const Main = () => {
	return (
		<MainStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<MainStack.Screen name="MainTabs" component={MainTabs} />
			<MainStack.Screen name="SecondScreen" component={SecondScreen} />
		</MainStack.Navigator>
	);
};

const Tabs = createBottomTabNavigator();
const MainTabs = () => {
	return (
		<Tabs.Navigator
			tabBarOptions={{
				tabStyle: { borderTopWidth: 0 },
				style: { borderTopWidth: 1, borderColor: '#c0c0c0' },
				activeTintColor: Colors.primary,
			}}
		>
			{/* these icons using Ionicons */}
			<Tabs.Screen
				name="Phân nhóm"
				component={Profile}
				options={{
					tabBarLabel: ({ focused }) => (
						<TabBarText focused={focused} title="Phân nhóm" />
					),
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} icon={'people-outline'} />
					),
				}}
			/>
			<Tabs.Screen
				name="Quản lý"
				component={Customer}
				options={{
					tabBarLabel: ({ focused }) => (
						<TabBarText focused={focused} title="Quản lý" />
					),
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} icon={'person'} />
					),
				}}
			/>
			<Tabs.Screen
				name="Thống kê"
				component={About}
				options={{
					tabBarLabel: ({ focused }) => (
						<TabBarText focused={focused} title="Thống kê" />
					),
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} icon={'stats-chart-outline'} />
					),
				}}
			/>
		</Tabs.Navigator>
	);
};

export default () => {
	return (
		<NavigationContainer>
			<Main />
		</NavigationContainer>
	);
};
