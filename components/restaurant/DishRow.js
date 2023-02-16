import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { LIGHT_TEAL_COLOR } from "../../colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const DishRow = ({totalItems, setTotalItems, data}) => {
  const { name, desc, imgUrl, price } = data;
  const [itemSelected, setItemSelected] = useState([]);

  const addProduct = () => {
    setItemSelected([...itemSelected, price]);
    const newTotalItems = [...totalItems];
    newTotalItems.push(price);
    setTotalItems(newTotalItems);
  };

  const removeProduct = () => {
    if (itemSelected.length < 0) return;
    const newArr = [...itemSelected];
    newArr.pop();
    setItemSelected([...newArr]);

    const itemIndex = totalItems.indexOf(price);
    if(itemIndex > -1){
      const newTotalItems = [...totalItems];
      newTotalItems.splice(itemIndex, 1)
      setTotalItems(newTotalItems);
    }
  };

  return (
    <View className="bg-white p-4 flex-row justify-between relative">
      <View className="w-3/4">
        <Text className="font-bold text-lg">{name}</Text>
        <Text className="text-gray-500">{desc}</Text>
        <Text className="text-gray-500 mt-1">₹ {price}</Text>
        <View className="flex-row space-x-2 items-center mt-2">
          <TouchableOpacity onPress={removeProduct}>
            {itemSelected.length > 0 ? (
              <Ionicons name="remove-circle" color={LIGHT_TEAL_COLOR} size={30} />
            ) : (
              <Ionicons name="remove-circle-outline" color={LIGHT_TEAL_COLOR} size={30} />
            )}
          </TouchableOpacity>
          <Text>{itemSelected.length}</Text>
          <TouchableOpacity onPress={addProduct}>
            <Ionicons name="add-circle" color={LIGHT_TEAL_COLOR} size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <Image source={{ uri: imgUrl }} className="w-14 h-14 rounded" />
    </View>
  );
};

export default DishRow;
