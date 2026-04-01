import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';
import { isLiquidGlassAvailable } from 'expo-glass-effect';
import { DynamicColorIOS, Platform } from 'react-native';

const tintColor = '#6366f1';

const inactiveTintColor = Platform.select({
  ios: '#00000090',
  android: '#888888',
  default: '#00000090',
});

const labelSelectedStyle = Platform.OS === 'ios' ? { color: tintColor } : undefined;

function IOSTabLayout() {
  return (
    <NativeTabs
      badgeBackgroundColor={tintColor}
      labelStyle={{
        color:
          isLiquidGlassAvailable()
            ? DynamicColorIOS({ light: '#000000', dark: '#ffffff' })
            : inactiveTintColor,
      }}
      iconColor={
        isLiquidGlassAvailable()
          ? DynamicColorIOS({ light: '#000000', dark: '#ffffff' })
          : inactiveTintColor
      }
      tintColor={DynamicColorIOS({ light: tintColor, dark: tintColor })}
      labelVisibilityMode="labeled"
      indicatorColor={tintColor + '25'}
      disableTransparentOnScrollEdge={true}
    >
      <NativeTabs.Trigger name="index">
        <Icon sf="rectangle.grid.2x2.fill" selectedColor={tintColor} />
        <Label selectedStyle={labelSelectedStyle}>Home</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="explore">
        <Icon sf="magnifyingglass" selectedColor={tintColor} />
        <Label selectedStyle={labelSelectedStyle}>Explore</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <Icon sf="person.fill" selectedColor={tintColor} />
        <Label selectedStyle={labelSelectedStyle}>Profile</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

function AndroidTabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: tintColor,
        tabBarInactiveTintColor: '#888888',
        tabBarStyle: {
          backgroundColor: '#1a1a1a',
          borderTopColor: '#2a2a2a',
          borderTopWidth: 1,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarIcon: ({ focused, color, size }) => {
          const icons: Record<string, { focused: keyof typeof Ionicons.glyphMap; unfocused: keyof typeof Ionicons.glyphMap }> = {
            index: { focused: 'grid', unfocused: 'grid-outline' },
            explore: { focused: 'search', unfocused: 'search-outline' },
            profile: { focused: 'person', unfocused: 'person-outline' },
          };
          const iconSet = icons[route.name] ?? icons.index;
          return (
            <Ionicons
              name={focused ? iconSet.focused : iconSet.unfocused}
              size={size}
              color={color}
            />
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
