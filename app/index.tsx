import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import products from '../assets/products.json'

import ProductListItem from '../components/ProductListItem'

const index = () => {
  { /*Needs two properties, data and renderItem render-tem = { ({variable}) => ()} */}
  return (
      <FlatList data={products} renderItem={({item}) => <ProductListItem item_listings = {item}/>
     
      }>
      </FlatList>

  )
}

export default index

const styles = StyleSheet.create({
  text: {

  },
})