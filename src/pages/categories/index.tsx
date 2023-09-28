import { ScrollView, View } from "react-native";
import {CategoryItem} from '../../components/categoryItem';
import {styles} from './styles';
import {Header} from '../../components/header/';

export const Categories=()=> {
    return (

        <ScrollView style={styles.container}
        showsVerticalScrollIndicator={false}>
            <Header title="Category" />

            <View style={styles.items}>

                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
            </View>
        </ScrollView>
    );
};
