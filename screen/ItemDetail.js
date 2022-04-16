import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, icons, SIZES } from '../constants'


const ItemDetail = ({ route, navigation }) => {

  // header
  const RenderHeader = () => {
    return (
      <View
          style={{
              marginTop: SIZES.padding * 2,
              marginHorizontal: SIZES.padding,
          }}
      >
          <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, alignItems: 'flex-start' }}>
                  <TouchableOpacity
                      onPress={() => console.log('Menu on clicked')}
                  >
                      <Image
                          source={icons.menu}
                          resizeMode="contain"
                          style={{
                              tintColor: COLORS.white,
                              width: 25,
                              height: 25
                          }}
                      />
                  </TouchableOpacity>
              </View>

              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                  <TouchableOpacity
                      onPress={() => console.log('Search on clicked')}
                  >
                      <Image
                          source={icons.search}
                          resizeMode="contain"
                          style={{
                              tintColor: COLORS.white,
                              width: 25,
                              height: 25
                          }}
                      />
                  </TouchableOpacity>
              </View>
          </View>
      </View>
    )
  }

  // render
  const RenderInfo = () => {
    let { itemInfo } = route.params

    if(itemInfo) {
      return (
        <ImageBackground 
          source={itemInfo.image}
          resizeMode="cover"
          style={{ width: "100%", height: "100%"}}
        >
          <RenderHeader />
          <RenderFooter />

          {/* product tag */}
          <View style={{
              position:"relative",
              top: "40%",
              left:"15%",
              borderRadius: 80,
              backgroundColor: COLORS.transparentLightGray1,
              height: 40,
              width: 40,
              alignItems:'center',
              justifyContent: 'center'
            }}
          >
            <View style={{ 
                borderRadius: 20,
                backgroundColor: COLORS.blue,
                height: 10,
                width: 10
              }}
            >
            </View>
          </View>

          <View style={{
                position: "absolute",
                top: '47%',
                left: "30%",
                flexDirection: 'row',
                padding:SIZES.radius * 1.5,
                backgroundColor: COLORS.transparentLightGray1,
                borderRadius:10,
                width: '50%',
              }}
            >
              <View style={{ flex: 2 }}>
                <Text style={{ color: COLORS.darkGray, ...FONTS.h3 }}>{itemInfo.productName}</Text>
              </View>

              <View style={{ flex: 1.5, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                <Text> ${itemInfo.price.toFixed(2)} </Text>
              </View>
          </View>

          <View style={{
            position: 'absolute',
            bottom: '20%',
            left: SIZES.padding,
            right: SIZES.padding
          }}>
              <Text style={{ color: COLORS.lightGray2, ...FONTS.body2 }}>Furniture</Text>
              <Text style={{ marginTop: SIZES.radius, color: COLORS.white, ...FONTS.h1 }}>{itemInfo.productName}</Text>
          </View>
        </ImageBackground>
      )
    } else {
      <View></View>
    }
  }

  const RenderFooter = () => {
    return(
      <View style={{
          position: 'absolute',
          bottom: '5%',
          left: SIZES.padding,
          right: SIZES.padding,
          flexDirection: 'row',
          height: 70,
          backgroundColor: COLORS.white,
          borderRadius: 35
        }}
      >
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <Image 
              source={icons.dashboard} 
              style={{ tintColor: COLORS.gray, width: 25, height: 25 }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 50,
              width: 50,
              borderRadius: 10,
              backgroundColor: COLORS.primary
            }}
          >
            <Image 
              source={icons.plus} 
              style={{ tintColor: COLORS.white, width: 25, height: 25 }}
              onPress={() => console.log("add button clicked")}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <Image 
              source={icons.user} 
              style={{ tintColor: COLORS.gray, width: 25, height: 25 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <View style={{ flex:1, backgroundColor: COLORS.white }}>
      <RenderInfo /> 
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({})