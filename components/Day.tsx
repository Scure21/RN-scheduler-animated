import { Switch, Text, View } from "react-native";
import { useState } from "react";
import Animated from "react-native-reanimated";
import { _borderRadius, _color, _layout, _spacing } from "@/theme/layout";
import { weekDays } from "@/constants";
import { DayBlock } from "./DayBlock";

/**
 * Day container with toggle to show/hide day blocks
 * @param day - day of the week
 * @returns Day component
 */
export const Day = ({ day }: { day: (typeof weekDays)[number] }) => {
  const [isOn, setIsOn] = useState(false);

  return (
    <Animated.View
      layout={_layout}
      style={{
        borderColor: _color,
        borderRadius: _borderRadius,
        borderWidth: 1,
        padding: _spacing,
        backgroundColor: isOn ? "transparent" : _color,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 12 }}>{day}</Text>
        <Switch
          value={isOn}
          onValueChange={setIsOn}
          trackColor={{ true: "#666" }}
          style={{
            transformOrigin: ["100%", "50%", 0],
            transform: [{ scale: 0.7 }],
          }}
        />
      </View>
      {isOn && <DayBlock />}
    </Animated.View>
  );
};
