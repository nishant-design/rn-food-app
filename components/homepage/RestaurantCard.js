import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LIGHT_TEAL_COLOR } from "../../colors";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = (props) => {
  const {name, imgUrl, rating, location, category, dishes} = props;
  const navigation = useNavigation();

  const redirect = () => {
    navigation.navigate("Restaurant", {
      name, 
      imgUrl, 
      rating, 
      location, 
      category,
      dishes,
    })
  }

  return (
    <TouchableOpacity onPress={() => redirect()} className="bg-white rounded shadow mr-4">
      <Image source={{ uri: imgUrl }} className="h-36 w-52 rounded-t" />
      <View className="p-2">
        <Text className="font-bold text-xl">{name}</Text>
        <View className="flex-row items-center space-x-1">
          <Ionicons name="star-outline" color={LIGHT_TEAL_COLOR} size={18} />
          <Text style={{color: "#00ccba"}} className="text-xs">{rating}.</Text>
          <Text className="text-gray-400 text-xs pl-1">{category}</Text>
        </View>
        <View className="flex-row items-center space-x-1 mt-1">
          <Ionicons name="location-outline" size={18} color={LIGHT_TEAL_COLOR} />
          <Text className="text-gray-400 text-xs pl-1">{location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
