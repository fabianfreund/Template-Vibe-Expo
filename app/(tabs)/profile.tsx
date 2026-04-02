import { SafeAreaView, ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { AppIcon } from '../../components/app-icon';
import { getTheme, themeTokens } from '../../theme';

const MENU_ITEMS = [
  { label: 'Account Settings', icon: 'settings' },
  { label: 'Notifications', icon: 'bell' },
  { label: 'Privacy', icon: 'lock' },
  { label: 'Help & Support', icon: 'message' },
  { label: 'About', icon: 'info' },
] as const;

export default function ProfileScreen() {
  const theme = getTheme(useColorScheme());

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.avatarContainer}>
          <View style={[styles.avatar, { backgroundColor: theme.colors.accent }]}>
            <Text style={styles.avatarText}>U</Text>
          </View>
          <Text style={[styles.name, { color: theme.colors.text }]}>Your Name</Text>
          <Text style={[styles.email, { color: theme.colors.textMuted }]}>user@example.com</Text>
        </View>

        <View
          style={[styles.card, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border }]}
        >
          {MENU_ITEMS.map((item, index) => (
            <View
              key={item.label}
              style={[
                styles.menuRow,
                index < MENU_ITEMS.length - 1 && {
                  borderBottomWidth: 1,
                  borderBottomColor: theme.colors.border,
                },
              ]}
            >
              <View style={[styles.menuIconWrap, { backgroundColor: theme.colors.surfaceMuted }]}>
                <AppIcon name={item.icon} size={18} color={theme.colors.accent} />
              </View>
              <Text style={[styles.menuLabel, { color: theme.colors.text }]}>{item.label}</Text>
              <AppIcon name="chevron-right" size={16} color={theme.colors.textMuted} />
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
    fontFamily: themeTokens.fonts.sans,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    fontFamily: themeTokens.fonts.sans,
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    fontFamily: themeTokens.fonts.sans,
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
  menuIconWrap: {
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuLabel: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
    fontFamily: themeTokens.fonts.sans,
  },
});
