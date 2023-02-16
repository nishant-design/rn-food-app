import { View, Text, ScrollView } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TEAL_COLOR } from "../../colors";
import RestaurantCard from "./RestaurantCard";

const FeaturedRows = ({ title, desc, restaurants }) => {
  return (
    <View className="p-4 pb-0">
      <View className="flex-row items-center justify-between">
        <Text className="font-bold text-xl">{title}</Text>
        <Ionicons name="arrow-forward-outline" size={26} color={TEAL_COLOR} />
      </View>
      <Text className="font-bold text-xs text-gray-500">{desc}</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4">
        {restaurants.map((res) => (
          <RestaurantCard
            key={res.id}
            name={res.name}
            imgUrl={res.imgUrl}
            rating={res.rating}
            location={res.location}
            category={res.category}
            dishes={res.dishes}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRows;
