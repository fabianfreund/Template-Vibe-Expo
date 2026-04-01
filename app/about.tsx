import { useRouter } from 'expo-router';
import { Pressable, SafeAreaView, StyleSheet, Text, View, useColorScheme } from 'react-native';

export default function AboutScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const colors = {
    background: isDark ? '#0a0a0a' : '#f8f8f8',
    card: isDark ? '#1a1a1a' : '#ffffff',
    border: isDark ? '#2a2a2a' : '#e5e5e5',
    text: isDark ? '#ffffff' : '#0a0a0a',
    subtext: isDark ? '#888888' : '#666666',
    accent: '#6366f1',
    accentText: '#ffffff',
  };

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <View style={styles.container}>
        <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Text style={[styles.heading, { color: colors.text }]}>Navigation works!</Text>
          <Text style={[styles.body, { color: colors.subtext }]}>
            This is the About screen, demonstrating Expo Router v4 file-based navigation.
            Each file in the{' '}
            <Text style={[styles.mono, { color: colors.text }]}>app/</Text> directory
            automatically becomes a route.
          </Text>
          <View style={[styles.divider, { backgroundColor: colors.border }]} />
          <Text style={[styles.tip, { color: colors.subtext }]}>
            Add new screens by creating files in{' '}
            <Text style={[styles.mono, { color: colors.text }]}>app/</Text>
          </Text>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: colors.accent, opacity: pressed ? 0.85 : 1 },
          ]}
          onPress={() => router.back()}
        >
          <Text style={[styles.buttonText, { color: colors.accentText }]}>← Go Back</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
    gap: 20,
  },
  card: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 24,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
  },
  body: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 20,
  },
  mono: {
    fontFamily: 'monospace',
    fontWeight: '600',
  },
  divider: {
    height: 1,
    marginBottom: 16,
  },
  tip: {
    fontSize: 14,
    lineHeight: 20,
  },
  button: {
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
