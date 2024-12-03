import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductListItem = ({item_listings}) => {
  return (
    <View>
      <Text>{item_listings.name}</Text>
    </View>
  )
}

export default ProductListItem

const styles = StyleSheet.create({})