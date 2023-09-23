import { ScrollView } from "react-native";
import {RowCardCategory} from '../../components/cardCategories';
import {styles} from './styles';

export const Categories=()=> {
    return (

        <ScrollView style={styles.container}
        showsVerticalScrollIndicator={false}>
            <RowCardCategory/>
            <RowCardCategory/>
            <RowCardCategory/>
            <RowCardCategory/>
            <RowCardCategory/>
            <RowCardCategory/>
            <RowCardCategory/>
            <RowCardCategory/>
        </ScrollView>
    );
};
