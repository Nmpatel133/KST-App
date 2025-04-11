import { View, Text } from 'react-native';
import { useAuth } from './context/AuthContext';

export default function IndexScreen() {
  const { user } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome {user?.email}</Text>
    </View>
  );
}
