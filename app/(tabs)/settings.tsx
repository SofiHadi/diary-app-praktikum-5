import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pengaturan</Text>

      <Pressable style={styles.button} onPress={() => router.push("/about")}>
        <Text style={styles.buttonText}>Lihat Profil Developer</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "700", marginBottom: 20 },
  button: {
    backgroundColor: "#f3f4f6",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  buttonText: { fontSize: 16, fontWeight: "600", color: "#1f2937" },
});
