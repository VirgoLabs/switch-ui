import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

interface SwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
  label?: string;
  offLabel?: string;
  labelPosition?: 'left' | 'right';
  activeColor?: string;
  inactiveColor?: string;
  thumbColor?: string;
  offThumbColor?: string;
  trackStyle?: ViewStyle;
  thumbStyle?: ViewStyle;
  labelStyle?: TextStyle;
  size?: number;
  rounded?: number | boolean;
  isError?: boolean;
  errorColor?: string;
}

const Switch: React.FC<SwitchProps> = ({
  value,
  onValueChange,
  disabled = false,
  label,
  offLabel,
  labelPosition = 'right',
  activeColor,
  inactiveColor,
  thumbColor = "#FFF",
  offThumbColor,
  trackStyle,
  thumbStyle,
  labelStyle,
  size = 30,
  rounded = true,
  isError = false,
  errorColor = '#FF5252',
}) => {

  const [switched, setSwitched] = useState(value || false);
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  activeColor = activeColor || colors.tint;
  inactiveColor = inactiveColor || colors.tabIconDefault;

  const animatedValue = React.useRef(new Animated.Value(switched ? 1 : 0)).current;

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: switched ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [switched]);

  useEffect(() => {
    if (switched !== value) {
      setSwitched(value);
    }
  }, [value]);

  const trackWidth = useMemo(() => animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [size * (2 - 0.2), size * (2 - 0.2)],
  }), [animatedValue, size]);

  const trackHeight = useMemo(() => animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [size * 1, size * 1],
  }), [animatedValue, size]);

  const thumbSize = useMemo(() => animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [size * (0.8), size * (0.8)],
  }), [animatedValue, size]);

  rounded = useMemo(() => (rounded ? (typeof rounded === 'number' ? rounded : size / 2) : 0), [rounded, size]);

  const translateX = useMemo(() => animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [size * (0.1 * 1), size * ((2 - 0.2) - 0.8 - (0.1 * 1))],
  }), [animatedValue, size]);

  const trackBackgroundColor = useMemo(() => animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [isError ? errorColor : inactiveColor, isError ? errorColor : activeColor],
  }), [animatedValue, inactiveColor, activeColor, isError, errorColor]);

  const thumbBackgroundColor = useMemo(() => animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [offThumbColor || thumbColor, thumbColor],
  }), [animatedValue, offThumbColor, thumbColor]);

  const roundedSwitch = useMemo(() => animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [rounded, rounded],
  }), [animatedValue, rounded]);

  const roundedThumbSwitch = useMemo(() => animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [rounded * 0.75, rounded * 0.75],
  }), [animatedValue, rounded]);

  const handlePress = useCallback(() => {
    if (!disabled) {
      setSwitched(!switched);
      onValueChange(!switched);
    }
  }, [disabled, switched, onValueChange]);

  return (
    <TouchableOpacity
      style={[styles.container, {
        opacity: disabled ? 0.5 : 1
      }]}
      onPress={handlePress}
      disabled={disabled}
    >
      {(label || offLabel) && labelPosition === 'left' && (
        <Text style={[styles.label, { color: colors.text }, labelStyle]}>{switched ? label : offLabel || label}</Text>
      )}
      <Animated.View
        style={[
          styles.track,
          {
            width: trackWidth,
            height: trackHeight,
            borderRadius: roundedSwitch,
            backgroundColor: trackBackgroundColor,
          },
          trackStyle,
        ]}
      >
        <Animated.View
          style={[
            styles.thumb,
            {
              width: thumbSize,
              height: thumbSize,
              borderRadius: roundedThumbSwitch,
              backgroundColor: thumbBackgroundColor,
              transform: [{ translateX }],
            },
            thumbStyle,
          ]}
        />
      </Animated.View>
      {(label || offLabel) && labelPosition === 'right' && (
        <Text style={[styles.label, { color: colors.text }, labelStyle]}>{switched ? label : offLabel || label}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  track: {
    justifyContent: 'center',
    position: 'relative',
  },
  thumb: {
    position: 'absolute',
  },
  label: {
    marginHorizontal: 8,
    fontSize: 16,
  },
});

export default Switch;