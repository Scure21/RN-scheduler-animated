import { View } from "react-native";
import { Day } from "@/components/Day";
import { weekDays } from "@/constants";
import { _spacing } from "@/theme/layout";

/**
 * Scheduler component
 * @returns Scheduler component
 */
export default function Scheduler() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: _spacing,
        gap: _spacing,
        backgroundColor: "white",
      }}
    >
      {weekDays.map((day) => (
        <Day day={day} key={`day-${day}`} />
      ))}
    </View>
  );
}
