import Ionicons from '@expo/vector-icons/Ionicons';
import { SymbolView, type SFSymbol } from 'expo-symbols';
import { Platform, type ColorValue } from 'react-native';

type AppIconName =
  | 'grid'
  | 'search'
  | 'person'
  | 'bolt'
  | 'compass'
  | 'palette'
  | 'devices'
  | 'code'
  | 'rocket'
  | 'settings'
  | 'bell'
  | 'lock'
  | 'message'
  | 'info'
  | 'chevron-right'
  | 'arrow-left';

const iconMap: Record<
  AppIconName,
  {
    ios: SFSymbol;
    android: keyof typeof Ionicons.glyphMap;
  }
> = {
  grid: { ios: 'rectangle.grid.2x2.fill', android: 'grid' },
  search: { ios: 'magnifyingglass', android: 'search' },
  person: { ios: 'person.fill', android: 'person' },
  bolt: { ios: 'bolt.fill', android: 'flash' },
  compass: { ios: 'safari.fill', android: 'compass' },
  palette: { ios: 'paintpalette.fill', android: 'color-palette' },
  devices: { ios: 'iphone.gen3', android: 'phone-portrait' },
  code: { ios: 'chevron.left.forwardslash.chevron.right', android: 'code-slash' },
  rocket: { ios: 'paperplane.fill', android: 'rocket' },
  settings: { ios: 'gearshape.fill', android: 'settings' },
  bell: { ios: 'bell.fill', android: 'notifications' },
  lock: { ios: 'lock.fill', android: 'lock-closed' },
  message: { ios: 'message.fill', android: 'chatbubble' },
  info: { ios: 'info.circle.fill', android: 'information-circle' },
  'chevron-right': { ios: 'chevron.right', android: 'chevron-forward' },
  'arrow-left': { ios: 'arrow.left', android: 'arrow-back' },
};

type AppIconProps = {
  name: AppIconName;
  size?: number;
  color?: ColorValue;
};

export function AppIcon({ name, size = 20, color }: AppIconProps) {
  const icon = iconMap[name];

  if (Platform.OS === 'ios') {
    return (
      <SymbolView
        name={icon.ios}
        size={size}
        tintColor={color}
        weight="medium"
        fallback={<Ionicons name={icon.android} size={size} color={color} />}
      />
    );
  }

  return <Ionicons name={icon.android} size={size} color={color} />;
}
