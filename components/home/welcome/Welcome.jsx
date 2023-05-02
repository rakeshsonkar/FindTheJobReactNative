import {  useRouter } from 'expo-router';
import { View, Text } from "react-native";
import styles from "./welcome.style";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { TouchableOpacity,Image } from "react-native";
import { useState } from "react";
import { SIZES,icons } from "../../../constants";
const jobTypes = ["Full-Time", "Part-time", "Contractor"]
const Welcome = () => {
  const [activeJobType, setActiveJobType] = useState('Full-Time')
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>
          Hello Rakesh
        </Text>

        <Text style={styles.welcomeMessage}> Find your Perfect job </Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput}
            value=" " onChange={() => { }}
            placeholder="What are you looking for?"
          />

        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => { }}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />

        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer} >
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
