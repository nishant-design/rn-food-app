import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import DeliveryGuy from "../../assets/delivery-guy.jpeg";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TEAL_COLOR } from "../../colors";
// import { useHomepageContext } from "../hooks/useHomepageContext";

const Header = () => {
  // const {featuredData} = useHomepageContext();
  return (
    <View className="p-4 bg-white">
      <View className="flex-row items-center justify-between">
        <View className="flex-row space-x-3 items-center">
          <Image source={DeliveryGuy} className="h-8 w-8 rounded-full" />
          <View>
            <Text className="text-gray-400 text-xs font-bold">Deliver Now</Text>
            <View className="flex-row space-x-1 items-end">
              <Text className="text-xl font-bold">Current Location</Text>
              <Ionicons name="chevron-down-outline" size={20} color={TEAL_COLOR} />
            </View>
          </View>
        </View>
        <Ionicons name="person-circle-outline" size={36} color={TEAL_COLOR} />
      </View>

      <View className="flex-row mt-4 space-x-5">
        <View className="flex-row items-center bg-gray-200 p-2 flex-1 space-x-2 rounded-sm">
          <Ionicons name="search-outline" size={20} color="gray" />
          <TextInput keyboardType="default" placeholder="Search"/>
        </View>
        <Ionicons name="filter-outline" size={28} color={TEAL_COLOR} />
      </View>
    </View>
    
  );
};

export default Header;
