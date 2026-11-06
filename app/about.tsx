import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Profil Developer" }} />
      <View style={styles.container}>
        <Text style={styles.title}>Diary App</Text>
        <Text style={styles.text}>Versi 1.0.0</Text>
        <View style={styles.card}>
          <Text style={styles.bold}>Dibuat oleh:</Text>
          <Text style={styles.text}>Sofi Hadi Permana</Text>
          <Text style={styles.text}>NIM: 2440511004</Text>
          <Text style={styles.text}>Prodi: Teknik Informatika</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 10, marginTop: 40 },
  card: {
    marginTop: 30,
    padding: 20,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 12,
    width: "100%",
  },
  bold: { fontSize: 16, fontWeight: "700", marginBottom: 5 },
  text: { fontSize: 16, marginBottom: 5, color: "#374151" },
});
