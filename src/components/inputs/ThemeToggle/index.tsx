import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Switch, View } from "react-native";
import { useTheme } from "../../../theme/ThemeProvider";
import { createStyles } from "./styles";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const styles = createStyles(theme);

  const isDark = theme.mode === "dark";

  return (
    <View style={styles.container}>
      <Ionicons
        name="sunny"
        size={12}
        color={isDark ? theme.colors.text : theme.colors.primary}
      />

      <Switch
        value={isDark}
        onValueChange={toggleTheme}
        trackColor={{
          false: "#767577",
          true: theme.colors.primary,
        }}
        thumbColor="#fff"
        style={styles.switch}
      />

      <Ionicons
        name="moon"
        size={12}
        color={isDark ? theme.colors.primary : theme.colors.text}
      />
    </View>
  );
}
