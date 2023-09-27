import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import theme from "../../global/styles/theme";
import { ScrollView } from "react-native-gesture-handler";

export const ItemDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.showcase}>
        <View style={styles.icon}>
          <Feather name="arrow-left" size={32} />
        </View>

        <Image
          source={require("../../assets/images/T_Shirt.png")}
          style={styles.image}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.details}>
          <Text style={styles.title}>Camiseta 1</Text>
          <Text style={styles.label}>Product details</Text>
          <Text style={styles.description}>
            Aliquam elementum molestie pretium. Vestibulum congue ornare
            convallis. Mauris laoreet placerat tellus, quis rhoncus mauris
            dapibus vitae. Vestibulum at pellentesque sapien. Quisque rutrum
            porttitor nibh vel congue.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.paymentContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>Total Price</Text>
          <Text style={styles.price}>$18,00</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Add to card</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
