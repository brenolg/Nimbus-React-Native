import { useWeather } from "@/context/WeatherContext";
import { useTheme } from "@/theme/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Modal, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createStyles } from "./styles";

type Option = {
  label: string;
  value: string;
};

type Props = {
  readonly onChange: (value: string) => void;
  readonly options: Option[];
  readonly iconName?: keyof typeof Ionicons.glyphMap;
};

export default function SelectModal({ onChange, options, iconName }: Props) {
  const { theme } = useTheme();

  const styles = createStyles(theme);

  const { openSearch, setOpenSearch } = useWeather(); // Estado global para abrir/fechar o modal

  return (
    <Modal visible={openSearch} transparent animationType="fade">
      <SafeAreaView style={styles.modalContainer}>
        {/* Overlay clicável para fechar o modal ao tocar fora */}
        <Pressable
          style={styles.overlay}
          onPress={() => setOpenSearch(false)}
        />
        {/* lista  */}
        <View
          style={[styles.listContainer, { backgroundColor: theme.colors.card }]}
        >
          <FlatList
            data={options}
            keyExtractor={(item) => item.value}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <Pressable
                style={[
                  styles.option,
                  index === options.length - 1 && { borderBottomWidth: 0 },
                ]}
                onPress={() => {
                  onChange(item.value);
                  setOpenSearch(false);
                }}
              >
                {iconName && (
                  <Ionicons
                    name={iconName}
                    size={18}
                    color={theme.colors.primary}
                    style={{ marginRight: 10 }}
                  />
                )}
                <Text style={styles.label}>{item.label}</Text>
              </Pressable>
            )}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
}
