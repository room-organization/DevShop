import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Dollar } from "../../../../utils/currency";

export function Summary() {
  return(
    <View style={styles.container}>
      <Text style={{paddingBottom: 15, fontSize: 18,}}>Order Summary</Text>

      <View style={styles.total}>
        <Text style={styles.label}>Order Total:</Text>
        <Text style={styles.price}>{Dollar("100")}</Text>
      </View>

    </View>
  )
}