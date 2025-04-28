import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Mail, Phone, Clock, MapPin } from 'lucide-react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: 'https://aceleratucarrera.com/wp-content/uploads/2018/04/h%C3%A1bitos-de-emprendedores-con-%C3%A9xito-300x169.jpg' }}
        style={styles.coverImage}
      />
      
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Oh Yara Pay</Text>
          <Text style={styles.subtitle}>
            Transformando el futuro financiero de las personas
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nuestra Historia</Text>
          <Text style={styles.sectionText}>
            Oh Yara Pay nació con la visión de democratizar el acceso a servicios financieros. 
            Desde nuestro inicio, nos hemos comprometido a ofrecer soluciones innovadoras y accesibles 
            para todos los emprendedores y personas, con un enfoque en la transparencia y la satisfacción del cliente.
          </Text>
        </View>

        <View style={styles.valuesGrid}>
          <View style={styles.valueCard}>
            <Text style={styles.valueTitle}>Misión</Text>
            <Text style={styles.valueText}>
              Facilitar el acceso a préstamos personales de manera rápida y segura, 
              contribuyendo al crecimiento financiero de nuestros clientes.
            </Text>
          </View>

          <View style={styles.valueCard}>
            <Text style={styles.valueTitle}>Visión</Text>
            <Text style={styles.valueText}>
              Ser la plataforma líder en préstamos digitales, reconocida por nuestra 
              innovación, confiabilidad y compromiso con el cliente.
            </Text>
          </View>
        </View>

        <View style={styles.contactSection}>
          <Text style={styles.contactTitle}>Contáctanos</Text>
          
          <TouchableOpacity 
            style={styles.contactCard}
            onPress={() => Linking.openURL('tel:+123456789')}>
            <Phone size={24} color="#7C3AED" />
            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>Teléfono</Text>
              <Text style={styles.contactText}>+51955168658</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.contactCard}
            onPress={() => Linking.openURL('mailto:info@ohyarapay.com')}>
            <Mail size={24} color="#7C3AED" />
            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>Email</Text>
              <Text style={styles.contactText}>info@ohyarapay.com</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.contactCard}>
            <Clock size={24} color="#7C3AED" />
            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>Horario de Atención</Text>
              <Text style={styles.contactText}>Lun - Vie: 9:00 - 18:00</Text>
            </View>
          </View>

          <View style={styles.contactCard}>
            <MapPin size={24} color="#7C3AED" />
            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>Ubicación</Text>
              <Text style={styles.contactText}>
                Jr. Remigio silva 173, Comas
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  coverImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  content: {
    padding: 24,
  },
  header: {
    marginBottom: 32,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 16,
  },
  sectionText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  valuesGrid: {
    marginBottom: 32,
    gap: 16,
  },
  valueCard: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  valueTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7C3AED',
    marginBottom: 12,
  },
  valueText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  contactSection: {
    gap: 16,
  },
  contactTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 16,
  },
  contactCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  contactInfo: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  contactText: {
    fontSize: 16,
    color: '#1A1A1A',
    fontWeight: '500',
  },
});
