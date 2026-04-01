import { SafeAreaView, ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native';

const MENU_ITEMS = [
  { label: 'Account Settings', icon: '⚙️' },
  { label: 'Notifications', icon: '🔔' },
  { label: 'Privacy', icon: '🔒' },
  { label: 'Help & Support', icon: '💬' },
  { label: 'About', icon: 'ℹ️' },
];

export default function ProfileScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const colors = {
    background: isDark ? '#0a0a0a' : '#f8f8f8',
    card: isDark ? '#1a1a1a' : '#ffffff',
    border: isDark ? '#2a2a2a' : '#e5e5e5',
    text: isDark ? '#ffffff' : '#0a0a0a',
    subtext: isDark ? '#888888' : '#666666',
    accent: '#6366f1',
  };

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.avatarContainer}>
          <View style={[styles.avatar, { backgroundColor: colors.accent }]}>
            <Text style={styles.avatarText}>U</Text>
          </View>
          <Text style={[styles.name, { color: colors.text }]}>Your Name</Text>
          <Text style={[styles.email, { color: colors.subtext }]}>user@example.com</Text>
        </View>

        <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
          {MENU_ITEMS.map((item, index) => (
            <View
              key={item.label}
              style={[
                styles.menuRow,
                index < MENU_ITEMS.length - 1 && {
                  borderBottomWidth: 1,
                  borderBottomColor: colors.border,
                },
              ]}
            >
              <Text style={styles.menuIcon}>{item.icon}</Text>
              <Text style={[styles.menuLabel, { color: colors.text }]}>{item.label}</Text>
              <Text style={[styles.chevron, { color: colors.subtext }]}>›</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scroll: {
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 120,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 34,
    fontWeight: '700',
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
  },
  card: {
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 20,
    overflow: 'hidden',
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    gap: 12,
  },
  menuIcon: {
    fontSize: 18,
    width: 24,
    textAlign: 'center',
  },
  menuLabel: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
  },
  chevron: {
    fontSize: 20,
    fontWeight: '300',
  },
});
