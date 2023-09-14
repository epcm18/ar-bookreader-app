import React, { useState } from "react";
import { View, StyleSheet, Image, Dimensions, Text, ScrollView } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import heroImage from "../../../assets/MainTopImg.jpeg";
import Books from "../../components/Books/Books";
import { BooksRecent } from "../../components/Books/Books";
import { BooksReccomended } from "../../components/Books/Books";
import { BooksFavourites } from "../../components/Books/Books";
import { BooksAR } from "../../components/Books/Books";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faThumbsUp, faHeart, faVrCardboard } from "@fortawesome/free-solid-svg-icons";

const height = Dimensions.get("window").height;

// Define your screen components
const ForYouScreen = () => (
  <ScrollView>
    <View style={{ flex: 1 }}>
      <BooksRecent />
      <BooksReccomended />
      <BooksFavourites />
      <BooksAR />
    </View>
  </ScrollView>
);

const ARScreen = () => (
  <ScrollView>
  <View style={{ flex: 1 }}>
    <BooksAR />
  </View>
  </ScrollView>
);

const FavoritesScreen = () => (
  <ScrollView>
  <View style={{ flex: 1 }}>
    <BooksFavourites />
  </View>
  </ScrollView>
);

const initialLayout = { width: Dimensions.get("window").width };

const HomeScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "forYou", title: "FOR YOU", icon: faThumbsUp },
    { key: "ar", title: "AR", icon: faVrCardboard },
    { key: "favorites", title: "FAVORITES", icon: faHeart },
  ]);

  const renderScene = SceneMap({
    forYou: ForYouScreen,
    ar: ARScreen,
    favorites: FavoritesScreen,
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      style={styles.tabBar}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color: "#000", margin: 8 }}>{route.title}</Text>
      )}
      renderIcon={({ route, focused, color }) => (
        <FontAwesomeIcon
          icon={route.icon}
          size={20} // Adjust the size as needed
          color={focused ? "#0A96E6" : "#999"} // Customize the color based on focus
        />
      )}
    />
  );

  return (
    <View style={styles.container}>
      <Image source={heroImage} style={styles.hero} resizeMode="cover" />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
        indicatorStyle={{ backgroundColor: "#000" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hero: {
    width: "100%",
    height: height * 0.25,
  },
  tabBar: {
    backgroundColor: "#fff", // Customize the tab bar background color
  },
});

export default HomeScreen;
