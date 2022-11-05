import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NativeBaseProvider, VStack } from "native-base";

/* ======= APP ======= */
export default function App() {
  return (
    <NativeBaseProvider>
      <VStack flex={1} bgColor="fuchsia.400" alignItems="center" justifyContent="center">
        <Text style={styles.title}>Sapup3!</Text>
        <StatusBar style="auto" />
      </VStack>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
  },
});
