import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { ArrowRight, Shield, Clock, CircleCheck as CheckCircle } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?w=800&auto=format&fit=crop' }}
          style={styles.heroImage}
        />
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>Oh Yara Pay</Text>
          <Text style={styles.heroSubtitle}>Tu aliado financiero</Text>
          <TouchableOpacity style={styles.heroButton}>
            <Text style={styles.heroButtonText}>Solicitar Préstamo</Text>
            <ArrowRight size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.featuresGrid}>
        <View style={styles.featureCard}>
          <Shield size={32} color="#7C3AED" />
          <Text style={styles.featureTitle}>100% Seguro</Text>
          <Text style={styles.featureText}>Préstamos respaldados y seguros</Text>
        </View>

        <View style={styles.featureCard}>
          <Clock size={32} color="#7C3AED" />
          <Text style={styles.featureTitle}>Rápido</Text>
          <Text style={styles.featureText}>Aprobación en 24 horas</Text>
        </View>

        <View style={styles.featureCard}>
          <CheckCircle size={32} color="#7C3AED" />
          <Text style={styles.featureTitle}>Simple</Text>
          <Text style={styles.featureText}>Sin papeleos complicados</Text>
        </View>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>¿Por qué Oh Yara Pay?</Text>
        <Text style={styles.sectionText}>
          Somos la solución financiera que estabas buscando. Con Oh Yara Pay, obtén préstamos personales de manera rápida y segura, con las mejores tasas del mercado.
        </Text>

        <View style={styles.benefitsList}>
          <View style={styles.benefitItem}>
            <Text style={styles.benefitTitle}>Tasas Competitivas</Text>
            <Text style={styles.benefitText}>Desde 11% anual</Text>
          </View>
          <View style={styles.benefitItem}>
            <Text style={styles.benefitTitle}>Montos Flexibles</Text>
            <Text style={styles.benefitText}>Hasta $50,000</Text>
          </View>
          <View style={styles.benefitItem}>
            <Text style={styles.benefitTitle}>Plazos Cómodos</Text>
            <Text style={styles.benefitText}>3 a 36 meses</Text>
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
  hero: {
    position: 'relative',
    height: 400,
  },
  heroImage: {
    width: '100%',
    height: 400,
    position: 'absolute',
  },
  heroContent: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 24,
    justifyContent: 'flex-end',
  },
  heroTitle: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 24,
    color: '#FFF',
    marginBottom: 24,
  },
  heroButton: {
    backgroundColor: '#7C3AED',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  heroButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  featuresGrid: {
    padding: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'space-between',
  },
  featureCard: {
    backgroundColor: '#FFF',
    padding: 24,
    borderRadius: 16,
    width: '48%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginTop: 12,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  infoSection: {
    padding: 24,
    backgroundColor: '#FFF',
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
    marginBottom: 24,
  },
  benefitsList: {
    gap: 16,
  },
  benefitItem: {
    backgroundColor: '#F3F4F6',
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#7C3AED',
  },
  benefitTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  benefitText: {
    fontSize: 16,
    color: '#666',
  },
});