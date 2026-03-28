import React from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import { createStyles } from "./styles";

type Props = {
  readonly visible: boolean;
  readonly message: string | null;
  readonly onClose: () => void;
};

export default function ErrorModal({ visible, message, onClose }: Props) {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Ocorreu um erro</Text>
          <Text style={styles.message}>{message}</Text>

          <Pressable style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Fechar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
