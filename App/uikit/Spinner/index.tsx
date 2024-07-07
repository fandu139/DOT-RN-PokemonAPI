import Colors from '../../theme/colors';
import React from 'react';
import {ActivityIndicator} from 'react-native';

interface Props {
  size?: 'large' | 'small' | number;
  color?: string;
  testID?: string;
  accessibilityLabel?: string;
}

const Spinner: React.FC<Props> = ({
  size = 'large',
  color =  Colors.GREEN_47,
  testID = 'loading-indicator',
  accessibilityLabel =  'loading-indicator',
}: Props) => (
  <ActivityIndicator
    testID={testID}
    accessibilityLabel={accessibilityLabel || testID}
    size={size}
    color={color}
  />
);

export default Spinner;
