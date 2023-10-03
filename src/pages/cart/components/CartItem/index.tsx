import { View, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { Dollar } from "../../../../utils/currency";

export function CartItem() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../../../assets/images/Calcoes.png")}
        />
      </View>

      <View style={styles.details}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Camiseta 1</Text>
          </View>

          <View style={styles.icons}>
            <Feather name="trash" style={styles.icon}/>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.price}>{Dollar("10")}</Text>
        </View>
      </View>
    </View>
  );
}
