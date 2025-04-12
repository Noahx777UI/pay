import { Tabs } from 'expo-router';
import { Calculator, Chrome as Home, Info } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#7C3AED',
        },
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#1A1A1A',
        },
        tabBarActiveTintColor: '#7C3AED',
        tabBarInactiveTintColor: '#888',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Oh Yara Pay',
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="calculator"
        options={{
          title: 'Simulador',
          tabBarIcon: ({ color, size }) => <Calculator size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Nosotros',
          tabBarIcon: ({ color, size }) => <Info size={size} color={color} />,
        }}
      />
    </Tabs>
  );
} 
