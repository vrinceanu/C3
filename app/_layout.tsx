import { Stack } from 'expo-router/stack';

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: true, title:"C3 App"}} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false}} />
    </Stack>
  );
}

