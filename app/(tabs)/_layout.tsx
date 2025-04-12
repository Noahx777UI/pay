import { Tabs } from 'expo-router';
import { Calculator, Chrome as Home, Info } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#E1B000', // amarillo mostaza
        },
        headerTintColor: '#000', // texto negro en el header
        tabBarStyle: {
          backgroundColor: '#1A1A1A', // fondo oscuro para la barra inferior
        },
        tabBarActiveTintColor: '#E1B000', // íconos activos en amarillo mostaza
        tabBarInactiveTintColor: '#888', // íconos inactivos en gris
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

