import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { DynamicColorIOS, Platform, useColorScheme } from 'react-native';
import { getTheme } from '../../theme';

function IOSTabLayout() {
  const theme = getTheme(useColorScheme());
  const tintColor = theme.colors.accent;
  const labelSelectedStyle = { color: tintColor };
  const dynamicInactiveColor = DynamicColorIOS({
    light: '#00000090',
    dark: '#ffffff90',
  });

  return (
    <NativeTabs
      badgeBackgroundColor={tintColor}
      labelStyle={{ color: dynamicInactiveColor }}
      iconColor={dynamicInactiveColor}
      tintColor={DynamicColorIOS({ light: tintColor, dark: tintColor })}
      labelVisibilityMode="labeled"
      indicatorColor={theme.colors.indicator}
      disableTransparentOnScrollEdge={true}
    >
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Icon
          sf={{ default: 'rectangle.grid.2x2', selected: 'rectangle.grid.2x2.fill' }}
          selectedColor={tintColor}
        />
        <NativeTabs.Trigger.Label selectedStyle={labelSelectedStyle}>Home</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="explore">
        <NativeTabs.Trigger.Icon sf="magnifyingglass" selectedColor={tintColor} />
        <NativeTabs.Trigger.Label selectedStyle={labelSelectedStyle}>
          Explore
        </NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Icon
          sf={{ default: 'person', selected: 'person.fill' }}
          selectedColor={tintColor}
        />
        <NativeTabs.Trigger.Label selectedStyle={labelSelectedStyle}>
          Profile
        </NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

function AndroidTabLayout() {
  const theme = getTheme(useColorScheme());

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.colors.accent,
        tabBarInactiveTintColor: theme.colors.textMuted,
        tabBarStyle: {
          backgroundColor: theme.colors.tabBarBackground,
          borderTopColor: theme.colors.border,
          borderTopWidth: 1,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          fontFamily: theme.fonts.sans,
        },
        tabBarIcon: ({ focused, color, size }) => {
          const icons: Record<
            'index' | 'explore' | 'profile',
            { focused: keyof typeof Ionicons.glyphMap; unfocused: keyof typeof Ionicons.glyphMap }
          > = {
            index: { focused: 'grid', unfocused: 'grid-outline' },
            explore: { focused: 'search', unfocused: 'search-outline' },
            profile: { focused: 'person', unfocused: 'person-outline' },
          };
          const routeName = (route.name in icons ? route.name : 'index') as keyof typeof icons;
          const iconSet = icons[routeName];

          return (
            <Ionicons name={focused ? iconSet.focused : iconSet.unfocused} size={size} color={color} />
          );
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="explore" options={{ title: 'Explore' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
}

export default function TabLayout() {
  if (Platform.OS !== 'ios') {
    return <AndroidTabLayout />;
  }

  return <IOSTabLayout />;
}
