import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LIGHT_TEAL_COLOR, TEAL_COLOR } from "../colors";
import DishRow from "../components/restaurant/DishRow";

const RestaurantScreen = ({ route }) => {
  const { name, imgUrl, rating, location, category, dishes } = route.params;
  const [totalItems, setTotalItems] = useState([]);
  const [totalSum, setTotalSum] = useState(0);
  const navigate = useNavigation();

  useLayoutEffect(() => {
    navigate.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    if (totalSum >= 0) {
      const sum = totalItems.reduce((acc, num) => acc + Number(num), 0);
      setTotalSum(sum);
    }
  }, [totalItems]);

  return (
    <>
      <ScrollView className="mb-1 relative">
        <View className="relative">
          <Image source={{ uri: imgUrl }} className="w-full h-56" />
          <TouchableOpacity onPress={navigate.goBack} className="absolute bg-gray-100 p-2 top-14 left-5 rounded-full shadow-full">
            <Ionicons name="arrow-back" color={LIGHT_TEAL_COLOR} size={20} />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="p-4">
            <Text className="font-bold text-3xl">{name}</Text>
            <View className="flex-row space-x-2 items-center">
              <Ionicons name="star" color={LIGHT_TEAL_COLOR} size={16} />
              <Text style={{ color: "#00ccba" }}>{rating}</Text>
              <Ionicons name="location" color="gray" size={18} />
              <Text>{location}</Text>
              <Text>| {category}</Text>
            </View>
            <Text className="text-gray-500 mt-2">
              Welcome to our restaurant where we serve authentic food inspired by taste around the world. A place for positive eating for positive living!
            </Text>
          </View>

          <TouchableOpacity className="flex-row items-center space-x-2 border-y border-gray-300 px-4 py-3">
            <Ionicons name="help-circle" size={22} />
            <Text className="flex-1 font-black">Having a food allergy?</Text>
            <Ionicons name="chevron-forward" color={LIGHT_TEAL_COLOR} size={20} />
          </TouchableOpacity>
        </View>

        <Text className="text-xl font-bold p-4">Menu</Text>
        {dishes.map((dish, i) => (
          <DishRow key={i} totalItems={totalItems} setTotalItems={setTotalItems} data={dish} />
        ))}
        <View className="bg-white py-14"></View>
      </ScrollView>
      
      <View className={`w-full absolute -bottom-20 z-50 ${totalSum > 0 && 'bottom-10'}`}>
        <View style={{ backgroundColor: TEAL_COLOR }} className="p-4 w-11/12 mx-auto rounded-lg flex-row items-center justify-between">
          <View className="flex-row items-center space-x-2">
            <Text className="text-white bg-[#01a296] px-2 py-1 font-extrabold text-lg rounded">{totalItems.length}</Text>
            <Text className="text-white font text-lg rounded">Items</Text>
          </View>
          <View className="flex-row items-center space-x-2 justify-between">
            <Text className="text-white font-extrabold text-lg text-center">Cart Total</Text>
            <Text className="text-white font-extrabold text-lg w-16 text-right">₹ {totalSum}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default RestaurantScreen;
