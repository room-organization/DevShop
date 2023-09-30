import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "../styles";
import { ScrollView } from "react-native-gesture-handler";
import { Product } from "../../../utils/types";
import { Dollar } from "../../../utils/currency";


interface ProductInfoProps {
  data: Product
};




export function ProductInfo({data}: ProductInfoProps) {
  return (
    <View style={styles.container}>
      <View style={styles.showcase}>
        <View style={styles.icon}>
          <Feather name="arrow-left" size={32} />
        </View>

        <Image
          source={{uri: data.images?.[0]?.url}}
          style={styles.image}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.details}>
          <Text style={styles.title}>{data.name}</Text>
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
          <Text style={styles.priceText}>Total price</Text>
          <Text style={styles.price}>{Dollar(data.price)}</Text>
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
