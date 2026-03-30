import { StyleSheet } from "react-native";

export const createStyles = (theme: any) =>
  StyleSheet.create({
    selectButton: {
      borderWidth: 1,
      borderRadius: 12,
      padding: 12,
    },

    label: { color: theme.colors.text },

    row: {
      flexDirection: "row",
      alignItems: "center",
    },

    modalContainer: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.4)",
      justifyContent: "flex-start",
      padding: 40,
    },

    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },

    listContainer: {
      borderRadius: 10,
      overflow: "hidden",
    },

    option: {
      flexDirection: "row",
      alignItems: "center",
      padding: 14,
      borderBottomWidth: 1,
      borderColor: theme.colors.border,
      marginHorizontal: 10,
    },
  });
