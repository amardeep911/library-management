import { View, Text } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import "../../global.css";
export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-900">
      <Text className="text-2xl text-red-500 font-bold">Hello world</Text>
    </View>
  );
}
