import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Calculator as CalculatorIcon } from 'lucide-react-native';

export default function CalculatorScreen() {
  const [amount, setAmount] = useState('');
  const [months, setMonths] = useState('');
  const [result, setResult] = useState<null | {
    monthlyPayment: number;
    totalPayment: number;
    totalInterest: number;
  }>(null);

  const calculateLoan = () => {
    const principal = parseFloat(amount);
    const numberOfMonths = parseInt(months);
    const annualInterestRate = 0.11; // 11%
    const monthlyInterestRate = annualInterestRate / 12;

    const monthlyPayment =
      (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
      (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

    const totalPayment = monthlyPayment * numberOfMonths;
    const totalInterest = totalPayment - principal;

    setResult({
      monthlyPayment,
      totalPayment,
      totalInterest,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <CalculatorIcon size={40} color="#7C3AED" />
          <Text style={styles.title}>Simulador de Préstamos</Text>
          <Text style={styles.subtitle}>Calcula tu préstamo al instante</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Monto del préstamo ($)</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={amount}
              onChangeText={setAmount}
              placeholder="Ej: 10000"
              placeholderTextColor="#666"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Plazo en meses</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={months}
              onChangeText={setMonths}
              placeholder="Ej: 12"
              placeholderTextColor="#666"
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={calculateLoan}>
            <Text style={styles.buttonText}>Calcular</Text>
          </TouchableOpacity>
        </View>

        {result && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultTitle}>Resumen del Préstamo</Text>
            
            <View style={styles.resultCard}>
              <Text style={styles.resultLabel}>Pago Mensual</Text>
              <Text style={styles.resultValue}>
                ${result.monthlyPayment.toFixed(2)}
              </Text>
            </View>

            <View style={styles.resultCard}>
              <Text style={styles.resultLabel}>Total a Pagar</Text>
              <Text style={styles.resultValue}>
                ${result.totalPayment.toFixed(2)}
              </Text>
            </View>

            <View style={styles.resultCard}>
              <Text style={styles.resultLabel}>Total Intereses</Text>
              <Text style={styles.resultValue}>
                ${result.totalInterest.toFixed(2)}
              </Text>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  content: {
    padding: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginTop: 16,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#1A1A1A',
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  button: {
    backgroundColor: '#7C3AED',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 32,
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 16,
  },
  resultCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  resultLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  resultValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7C3AED',
  },
});