import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import Categories from "../components/homepage/Categories";
import Header from "../components/homepage/Header";
import FeaturedRows from "../components/homepage/FeaturedRows";
import { FEATURES_ROWS_DATA } from "../components/homepage/content";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1">
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} className="mb-4">
        <Categories />
        {FEATURES_ROWS_DATA.map((feature) => (
          <FeaturedRows key={feature.title} title={feature.title} desc={feature.desc} restaurants={feature.restaurants} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
