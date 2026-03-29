import { StyleSheet } from "react-native";

export const createStyles = (theme: any) =>
  StyleSheet.create({
    safe: {
      flex: 1,
    },
    header: {
      marginBottom: 12,
      paddingHorizontal: 36,
    },
    locationRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 4,
    },
    locationText: {
      color: theme.colors.secondaryText,
      fontSize: 14,
      fontWeight: "500",
      marginLeft: 4,
    },
    temp: {
      color: theme.colors.text,
      fontSize: 60,
      fontWeight: "700",
    },
    description: {
      color: theme.colors.secondaryText,
      fontSize: 14,
      fontWeight: "500",
      marginTop: 16,
    },
    divider: {
      height: 1,
      backgroundColor: theme.colors.border,
      marginBottom: 16,
      opacity: 0.6,
    },
  });
