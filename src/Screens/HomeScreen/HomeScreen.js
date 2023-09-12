import React, { useState } from "react";
import { View, StyleSheet, Image, Dimensions, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import heroImage from "../../../assets/MainTopImg.jpeg";

const height = Dimensions.get("window").height;

// Define your screen components
const ForYouScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>FOR YOU</Text>
  </View>
);

const ARScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>AR</Text>
  </View>
);

const FavoritesScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>FAVORITES</Text>
  </View>
);

const initialLayout = { width: Dimensions.get("window").width };

const HomeScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "forYou", title: "FOR YOU" },
    { key: "ar", title: "AR" },
    { key: "favorites", title: "FAVORITES" },
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
        indicatorStyle={{ backgroundColor: "#000"}}
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
