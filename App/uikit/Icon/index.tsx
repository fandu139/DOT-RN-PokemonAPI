import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import iconConfig from '../../assets/icon/Icon.json';
import { StyleProp, TextStyle, TouchableOpacity } from 'react-native';
import AppStyles from '../../theme/appStyles';

interface Props {
  name?: string;
  size: number | undefined;
  style?: StyleProp<TextStyle>;
  color?: string | undefined;
  onPress?: () => void;
  disabled?: boolean;
  testID?: string;
  accessibilityLabel?: string;
}

const ColectionIcon = createIconSetFromIcoMoon(iconConfig);

const Icon: React.FC<Props> = ({
  name = '',
  size,
  style = {},
  color = '',
  onPress = () => true,
  disabled = false,
  testID = 'button-icon',
  accessibilityLabel = 'button-icon',
}: Props) => {
  if (name) {
    return (
      <TouchableOpacity
        disabled={disabled || onPress === undefined}
        onPress={onPress}
        testID={testID}
        accessibilityLabel={accessibilityLabel || testID}
        hitSlop={AppStyles.HitSlopValue}
      >
        <ColectionIcon
          name={name}
          size={size}
          style={{ ...(style as Record<string, unknown>), color }}
        />
      </TouchableOpacity>
    );
  }
  return null;
};

export default Icon;
