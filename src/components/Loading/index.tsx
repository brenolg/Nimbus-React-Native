import React from "react";
import { ActivityIndicator, View } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import { createStyles } from "./styles";

export default function Loading() {
  const { theme } = useTheme();

  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
}
