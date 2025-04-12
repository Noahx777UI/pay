import { Tabs } from 'expo-router';
import { Calculator, Chrome as Home, Info } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#FFD700', // amarillo (puedes cambiarlo por otro tono si deseas)
        },
        headerTintColor: '#000', // negro para el texto del header
        tabBarStyle: {
          backgroundColor: '#1A1A1A', // fondo oscuro en la barra de navegación inferior
        },
        tabBarActiveTintColor: '#FFD700', // íconos activos amarillos
        tabBarInactiveTintColor: '#888', // íconos inactivos grises
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
