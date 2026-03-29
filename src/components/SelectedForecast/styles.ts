import { StyleSheet } from "react-native";

export const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginTop: 16,
      paddingHorizontal: 36,
    },
    headerRow: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      marginVertical: 16,
    },

    line: {
      flex: 1,
      height: 1,
      backgroundColor: theme.colors.border,
      opacity: 0.6,
    },

    description: {
      marginRight: 12,
      color: theme.colors.secondaryText,
      fontSize: 14,
      fontWeight: "500",
      lineHeight: 16,
    },
    item: {
      width: "48%",
      backgroundColor: theme.colors.card,
      borderRadius: 12,
      padding: 12,
      marginBottom: 12,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },

    label: {
      fontSize: 12,
      color: theme.colors.secondaryText,
      marginTop: 4,
    },

    value: {
      fontSize: 16,
      fontWeight: "600",
      color: theme.colors.text,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
    },
  });
