import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome5';
import { Tabs } from 'expo-router';
import { Link } from 'expo-router';
import { View, Text, Pressable} from 'react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
                 tabBarActiveTintColor: 'cornflowerblue', 
                 headerRight: () => 
                   <Link href="/" asChild>
                     <Pressable style = {{paddingRight: 22 }}>
                          <FontAwesome size={20} name="sign-out-alt" />
                     </Pressable>
                   </Link>
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          title: 'Info',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="book-reader" color={color} />,
        }}
      />
      <Tabs.Screen
        name="buddy"
        options={{
          title: 'Ask',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="comments" color={color} />,
        }}
      />
      <Tabs.Screen
        name="locate"
        options={{
          title: 'Locate',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="map-marked-alt" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user-cog" color={color} />,
        }}
      />
    </Tabs>
  );
}