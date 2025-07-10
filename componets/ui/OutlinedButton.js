import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native'; // ✅ added Text here
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/colors";

function OutlinedButton({ onPress, icon, children }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]} // ✅ fixed this
      onPress={onPress}
    >
      <Ionicons style={styles.icon} name={icon} size={18} color={Colors.primary500} />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

export default OutlinedButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row', // ✅ to make icon and text in one row
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    borderWidth: 1,
    borderColor: Colors.primary500,
    borderRadius: 4, // optional for better visuals
  },
  pressed: {
    opacity: 0.7,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    color: Colors.primary500,
  },
});
