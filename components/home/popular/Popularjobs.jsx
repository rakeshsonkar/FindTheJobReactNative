import { useRouter } from "expo-router";
import { View, Text, ActivityIndicator} from "react-native";
import styles from "../popular/popularjobs.style";
import { TouchableOpacity } from "react-native-gesture-handler";
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import { COLORS, SIZES } from "../../../constants";
import { FlatList } from "react-native-web";
import useFetch from '../../../hook/useFetch';

const Popularjobs = () => {
  const router = useRouter();
  const {data ,isLoading,error}=useFetch('serch',{query:'React developer',num_pages:1})
console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Popular jobs
        </Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>
          Show all
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ):error?(
          <Text>Something went wrong</Text>
        ):(
          <FlatList 
          data={[1,2,3,4]}
          renderItem={({item})=>(
            <PopularJobCard 
            item={item}
            />
          )}
          keyExtractor={item=>item?.job_id}
          contentContainerStyle={{columnGap:SIZES.medium}}
          horizontal
          />
        )}
      </View>
    </View>

  );
};

export default Popularjobs;
