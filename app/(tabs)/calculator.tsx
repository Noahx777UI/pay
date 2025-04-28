import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
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

    // Validación de entradas
    if (isNaN(principal) || principal <= 0 || isNaN(numberOfMonths) || numberOfMonths <= 0) {
      Alert.alert(
        "Entrada inválida",
        "Por favor, ingresa un monto y un plazo válidos (números mayores que cero)."
      );
      setResult(null);
      return;
    }

    // --- LÓGICA DE INTERÉS SIMPLE ---
    // *** CAMBIO CLAVE AQUÍ: Tasa al 11% simple mensual ***
    const simpleMonthlyRate = 0.11; // 11% mensual simple sobre el capital inicial

    // 1. Calcular Interés Total
    const totalInterest = principal * simpleMonthlyRate * numberOfMonths;

    // 2. Calcular Pago Total
    const totalPayment = principal + totalInterest;

    // 3. Calcular Pago Mensual (simple división)
    const monthlyPayment = totalPayment / numberOfMonths;
    // --- FIN LÓGICA DE INTERÉS SIMPLE ---


    // Comprobación básica por si acaso
    if (isNaN(monthlyPayment) || !isFinite(monthlyPayment) || isNaN(totalPayment) || !isFinite(totalPayment) || isNaN(totalInterest) || !isFinite(totalInterest) ) {
       Alert.alert(
        "Error de Cálculo",
        "No se pudo calcular el préstamo con los valores ingresados."
       );
       setResult(null);
       return;
    }

    setResult({
      monthlyPayment,
      totalPayment,
      totalInterest,
    });
  };

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.content}>
        <View style={styles.header}>
          <CalculatorIcon size={40} color="#7C3AED" />
          <Text style={styles.title}>Simulador de Préstamos</Text>
          <Text style={styles.subtitle}>Calcula tu préstamo al instante</Text>
          {/* *** TEXTO INFORMATIVO ACTUALIZADO *** */}
          <Text style={styles.interestRateInfo}>(Interés Simple: 11% del monto por mes)</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Monto del préstamo ($)</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={amount}
              onChangeText={setAmount}
              placeholder="Ej: 1000"
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
              placeholder="Ej: 1 ó 3"
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

// --- ESTILOS (Iguales a la versión anterior) ---
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F9FAFB',
    },
    content: {
      padding: 24,
      paddingBottom: 48,
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
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 16,
      color: '#666',
      textAlign: 'center',
      marginBottom: 8,
    },
    interestRateInfo: { // Estilo para la aclaración de la tasa/método
      fontSize: 14,
      color: '#DC2626', // Rojo para advertir que es alta
      fontWeight: '500',
      textAlign: 'center',
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
      marginTop: 8,
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
      textAlign: 'center',
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
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    resultLabel: {
      fontSize: 16,
      color: '#666',
    },
    resultValue: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#7C3AED',
      textAlign: 'right',
    },
  });
