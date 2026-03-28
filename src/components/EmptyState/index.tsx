import { Ionicons } from "@expo/vector-icons";
import React, { useMemo } from "react";
import { Text, View } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import { createStyles } from "./styles";

type Props = {
  title?: string;
  description?: string;
  icon?: keyof typeof Ionicons.glyphMap;
};

export default function EmptyState({
  title = "Nada por aqui",
  description = "Sem dados filtrados",
  icon = "cloud-offline-outline",
}: Readonly<Props>) {
  const { theme } = useTheme();

  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Ionicons
        name={icon}
        size={60}
        color={theme.colors.secondaryText}
        style={styles.icon}
      />

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}
