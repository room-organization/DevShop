import { Text, View } from "react-native";
import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { HomeProductScreenProp } from "../../routers/type.routes";

interface HeaderProps {
  title?: string;
}

export function Header({ title }: HeaderProps) {
  const navigation = useNavigation<HomeProductScreenProp>();

  function openHome() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <Ionicons name="arrow-back" size={24} color="black" onPress={openHome} />
      <Text style={{ flex: 1, textAlign: "center" }}>{title}</Text>
    </View>
  );
}
