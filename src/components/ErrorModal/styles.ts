import { StyleSheet } from "react-native";

export const createStyles = (theme: any) =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.4)",
      justifyContent: "center",
      alignItems: "center",
    },
    modalContainer: {
      width: "80%",
      padding: 30,
      borderRadius: 10,
      backgroundColor: theme.colors.card,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
      color: theme.colors.text,
    },
    message: {
      marginBottom: 20,
      color: theme.colors.text,
    },
    button: {
      padding: 10,
      borderRadius: 6,
      alignItems: "center",
      backgroundColor: theme.colors.primary,
    },
    buttonText: {
      color: "#fff",
      fontWeight: "bold",
    },
  });
