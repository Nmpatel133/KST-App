import { Stack } from 'expo-router';
import { AuthProvider } from './context/AuthContext';
import { useEffect } from 'react';
import { router } from 'expo-router';

export default function RootLayout() {
  useEffect(() => {
    // Force initial route to login
    router.replace('/login');
  }, []);

  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" />
        <Stack.Screen name="index" />
      </Stack>
    </AuthProvider>
  );
}
