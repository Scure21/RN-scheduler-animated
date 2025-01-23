import { Text, View } from "react-native";
import { useState } from "react";
import Animated from "react-native-reanimated";
import { Pressable } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  _borderRadius,
  _color,
  _layout,
  _spacing,
  _entering,
  _exiting,
} from "@/theme/layout";
import { _startHour } from "@/constants";
import { HourBlock } from "./HourBlock";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

/**
 * Day block with hours and add/remove button
 * @returns Day block component
 */
export const DayBlock = () => {
  const [hours, setHours] = useState<number[]>([_startHour]);

  return (
    <Animated.View
      entering={_entering}
      exiting={_exiting}
      layout={_layout}
      style={{
        gap: _spacing,
      }}
    >
      {hours.map((hour) => (
        <Animated.View
          entering={_entering}
          exiting={_exiting}
          layout={_layout}
          key={`hour-${hour}`}
          style={{
            gap: _spacing,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 12 }}>From: </Text>
          <HourBlock hour={hour} />
          <Text style={{ fontSize: 12 }}>To: </Text>
          <HourBlock hour={hour + 1} />

          {/* Remove Button */}
          <Pressable
            onPress={() => {
              console.log("remove hour block");
              setHours((prev) => [...prev.filter((k) => k !== hour)]);
            }}
          >
            <View
              style={{
                backgroundColor: _color,
                height: 24,
                aspectRatio: 1,
                borderRadius: _borderRadius - _spacing,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign name="close" size={14} color="#555" />
            </View>
          </Pressable>
        </Animated.View>
      ))}

      {/* Add Button */}
      <AnimatedPressable
        layout={_layout}
        onPress={() => {
          if (hours.length === 0) {
            setHours([_startHour]);
            return;
          }
          setHours((prev) => [...prev, prev[prev.length - 1] + 1]);
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: _spacing / 2,
            padding: _spacing / 2,
            borderRadius: _borderRadius - _spacing / 2,
            backgroundColor: _color,
            marginBottom: _spacing / 2,
          }}
        >
          <MaterialCommunityIcons name="plus" size={18} color="#333" />
          <Text style={{ fontSize: 12, color: "#333" }}>Add More</Text>
        </View>
      </AnimatedPressable>
    </Animated.View>
  );
};
