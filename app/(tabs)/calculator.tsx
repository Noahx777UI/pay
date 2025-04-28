import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native'; // Import Alert
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

    // --- Validación de entradas ---
    if (isNaN(principal) || principal <= 0 || isNaN(numberOfMonths) || numberOfMonths <= 0) {
      Alert.alert(
        "Entrada inválida",
        "Por favor, ingresa un monto y un plazo válidos (números mayores que cero)."
      );
      setResult(null); // Limpia resultados anteriores si la entrada es inválida
      return; // Detiene la ejecución si la entrada no es válida
    }
    // --- Fin Validación ---

    // *** CAMBIO CLAVE AQUÍ ***
    // Directamente usa 11% como la tasa de interés MENSUAL
    const monthlyInterestRate = 0.11; // 11% mensual (¡Esto es una tasa muy alta!)
    // Ya no se necesita la tasa anual para este cálculo
    // const annualInterestRate = 0.11; // Ya no se usa así
    // const monthlyInterestRate = annualInterestRate / 12; // Ya no se calcula así

    // --- Manejo de caso especial: Tasa de interés cero ---
    // Aunque aquí la tasa es 0.11, es buena práctica manejar el 0%
    // La fórmula estándar falla con tasa 0 (división por cero)
    let monthlyPayment: number;
    if (monthlyInterestRate === 0) {
        monthlyPayment = principal / numberOfMonths;
    } else {
        // Fórmula estándar de amortización
        monthlyPayment =
        (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
        (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);
    }
    // --- Fin manejo tasa cero ---


    // --- Manejo de NaN/Infinity en resultados ---
    // Si el cálculo resulta en NaN o Infinity (puede pasar con valores extremos), maneja el error
    if (isNaN(monthlyPayment) || !isFinite(monthlyPayment)) {
       Alert.alert(
        "Error de Cálculo",
        "No se pudo calcular el préstamo con los valores ingresados. Verifica las entradas."
       );
       setResult(null);
       return;
    }
    // --- Fin manejo NaN/Infinity ---

    const totalPayment = monthlyPayment * numberOfMonths;
    const totalInterest = totalPayment - principal;

    setResult({
      monthlyPayment,
      totalPayment,
      totalInterest,
    });
  };

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      {/* 'keyboardShouldPersistTaps="handled"' ayuda a que el teclado se cierre al tocar fuera de los inputs */}
      <View style={styles.content}>
        <View style={styles.header}>
          <CalculatorIcon size={40} color="#7C3AED" />
          <Text style={styles.title}>Simulador de Préstamos</Text>
          <Text style={styles.subtitle}>Calcula tu préstamo al instante</Text>
          <Text style={styles.interestRateInfo}>(Tasa de Interés: 11% Mensual)</Text>
          {/* Añadido para claridad */}
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
    paddingBottom: 48, // Añade padding inferior para mejor scroll
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
    marginBottom: 8, // Espacio antes de la info de tasa
  },
  interestRateInfo: { // Estilo para la aclaración de la tasa
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
    marginTop: 8, // Añade un pequeño margen superior
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
    flexDirection: 'row', // Alinea etiqueta y valor horizontalmente
    justifyContent: 'space-between', // Espacio entre etiqueta y valor
    alignItems: 'center', // Centra verticalmente
  },
  resultLabel: {
    fontSize: 16,
    color: '#666',
    // marginBottom: 4, // No necesario con flex direction row
  },
  resultValue: {
    fontSize: 20, // Ligeramente más pequeño para caber mejor
    fontWeight: 'bold',
    color: '#7C3AED',
    textAlign: 'right', // Alinea el número a la derecha
  },
});
