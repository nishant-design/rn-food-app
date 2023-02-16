import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import {CATEGORY_CONTENT} from './content';

const Categories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pt-4 pb-0" contentContainerStyle={{paddingHorizontal: 15}}>
      {
        CATEGORY_CONTENT.map((item, i) => (
          <CategoryCard title={item.title} imgUrl={item.imgUrl} key={i} />
        ))
      }
    </ScrollView>
  )
}

export default Categories