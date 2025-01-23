import { Text, View } from "react-native";
import { _borderRadius, _color, _spacing } from "@/theme/layout";

/**
 * Hour block with hour and AM/PM
 * @param hour - hour of the day
 * @returns Hour block component
 */
export const HourBlock = ({ hour }: { hour: number }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: _spacing / 4,
        borderWidth: 1,
        borderColor: _color,
        borderRadius: _borderRadius - _spacing,
      }}
    >
      <Text style={{ fontSize: 12 }}>
        {hour > 9 ? hour : `0${hour}`}:00
        {hour > 11 && hour < 24 ? "PM" : "AM"}
      </Text>
    </View>
  );
};
