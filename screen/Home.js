import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { images, icons, COLORS, FONTS, SIZES } from '../constants'


const RenderHeader = () => {
    return (
        <View style={{paddingHorizontal: SIZES.padding }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <TouchableOpacity style={{ flex: 1 }}>
                    <Image
                        source={icons.menu}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25
                        }} 
                    />
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Image
                        source={icons.cart}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25
                        }} 
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const RenderTitle = ({title}) => {
    return (
        <View style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding }}>
            <Text style={{ color: COLORS.black, ...FONTS.largeTitle  }}>Collection of</Text>
            <Text style={{ color: COLORS.black, ...FONTS.largeTitle  }}>{title}</Text>
        </View>
    )
} 

const ScrollableTab = ({ tabList, selectedTab, onPress }) => {
    const renderItem = ({ item }) => {
        return(
            <TouchableOpacity
                style={{ marginHorizontal: SIZES.padding }}
                onPress={() => onPress(item)}
            >
                <Text style={{ color: COLORS.secondary, ...FONTS.body2 }}>{item.name}</Text>

                {
                    selectedTab.id == item.id && (
                        <View style={{ alignItems: 'center', marginTop: SIZES.base }}>
                            <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: COLORS.blue }}>

                            </View>
                        </View>
                    )
                }
            </TouchableOpacity>
        )
    }

    return(
        <View style={{ marginTop: SIZES.padding }}>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                data={tabList}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const ScrollableCard = ({ navigation, productList }) => {

    const renderCard = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ marginLeft: SIZES.padding }}
                onPress={() => navigation.navigate("ItemDetail", { "itemInfo": item })}
            >
                <View style={{width: SIZES.width / 2}}>
                    <Image 
                        source={item.image}
                        resizeMode="cover"
                        style={{ width: "100%", height: "100%", borderRadius: SIZES.radius }} 
                    />

                    <View style={{position: 'absolute', top: 5, left:'10%', right: '10%'}}>
                        <Text style={{ color: COLORS.lightGray2, ...FONTS.h3 }}>Furniture</Text>
                        <Text style={{ marginTop:SIZES.base ,color: COLORS.white, ...FONTS.h2 }}>{ item.productName }</Text>
                    </View>

                    <View style={{position: 'absolute', bottom: 20, left:10, borderRadius: 15, paddingVertical: 10, paddingHorizontal: 15, backgroundColor: COLORS.transparentLightGray }}>
                        <Text style={{  ...FONTS.h2 }}> ${item.price.toFixed(2)}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ marginTop: SIZES.padding }} >
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={productList}
                renderItem={renderCard}
                keyExtractor={item => item.productId}
            />
        </View>
    )
}

const RenderPromotionCard = () => {
    return(
        <View style={[ styles.shadow,{
             flexDirection: "row",
             marginHorizontal: SIZES.padding,
             padding: SIZES.radius,
             height: 110,
             borderRadius: 20,
             backgroundColor: COLORS.white
            }]}
        >
            <View style={{ 
                width: 50,
                alignItems:"center",
                justifyContent: "center",
                backgroundColor: COLORS.lightGray2,
                borderRadius: 20
                }}
            >
                <Image
                    source={images.sofa}
                    resizeMode="contain"
                    style={{ width: "60%", height: "60%" }}
                />
            </View>

            {/* wording section */}
            <View style={{ flex: 1, marginLeft: SIZES.radius, justifyContent: "center" }}>
                <Text style={{ ...FONTS.h2}}>Special Offer</Text>
                <Text style={{ ...FONTS.body3}}>Adding to your cart</Text>
            </View>

             {/* Button */}
             <View style={{ marginRight: SIZES.radius, alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: COLORS.primary,
                        justifyContent:"center",
                        alignItems: "center",
                        height: "70%",
                        width: 40,
                        borderRadius: 10,
                    }}
                    onPress={() => { console.log("promo on Clicked")}}
                >
                    <Image 
                        source={icons.chevron}
                        resizeMode="contain"
                        style={{
                            height: '50%',
                            width: "50%"
                        }}
                    />
                </TouchableOpacity>
             </View>
        </View>
    )
}

const Home = ({ navigation }) => {

    const [tabList, setTabList] = useState([
        {
            id: 0,
            name: "Chair",
            title: "chairs",
            productList: [
                {
                    productId: 1,
                    productName: 'Chair Green Colour',
                    price: 19.00,
                    image: images.greenChair,
                },
                {
                    productId: 2,
                    productName: 'Chair Peach Colour',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 3,
                    productName: 'Chair White Colour',
                    price: 11.00,
                    image: images.whiteChair,
                },
                {
                    productId: 4,
                    productName: 'Chair Simple Design Black Colour',
                    price: 12.00,
                    image: images.chair_02,
                },
                {
                    productId: 5,
                    productName: 'Chair String with White Colour',
                    price: 15.00,
                    image: images.chair_03,
                },
                {
                    productId: 6,
                    productName: 'Chair Blue Colour feather',
                    price: 15.00,
                    image: images.fancyChair,
                },
            ]
        },
        {
            id: 1,
            name: "Cupboard",
            title: 'cupboards',
            productList: [
                {
                    productId: 7,
                    productName: 'Product 4',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 8,
                    productName: 'Product 5',
                    price: 17.00,
                    image: images.cupBoards,
                },
                {
                    productId: 9,
                    productName: 'Product 6',
                    price: 12.00,
                    image: images.cupBoards_02,
                },
                {
                    productId: 10,
                    productName: 'Product 7',
                    price: 19.00,
                    image: images.cupBoards_03,
                },

            ]
        },
        {
            id: 2,
            name: "Table",
            title: 'tables',
            productList: [
                {
                    productId: 11,
                    productName: 'Product 8',
                    price: 18.00,
                    image: images.table,
                },
                {
                    productId: 12,
                    productName: 'Product 9',
                    price: 16.00,
                    image: images.table_02,
                },
                {
                    productId: 13,
                    productName: 'Product 10',
                    price: 15.00,
                    image: images.table_03,
                },
                {
                    productId: 14,
                    productName: 'Product 11',
                    price: 30.00,
                    image: images.table_04,
                },
                {
                    productId: 15,
                    productName: 'Product 12',
                    price: 20.00,
                    image: images.table_05,
                },

            ]
        },
        {
            id: 3,
            name: "Accessories",
            title: 'accessories',
            productList: [
                {
                    productId: 14,
                    productName: 'Product 10',
                    price: 19.00,
                    image: images.accessories,
                },
                {
                    productId: 15,
                    productName: 'Product 11',
                    price: 10.00,
                    image: images.accessories_02,
                },
                {
                    productId: 16,
                    productName: 'Product 12',
                    price: 12.00,
                    image: images.accessories_03,
                },
                {
                    productId: 17,
                    productName: 'Product 13',
                    price: 13.00,
                    image: images.accessories_04,
                },
                {
                    productId: 18,
                    productName: 'Product 14',
                    price: 11.00,
                    image: images.accessories_05,
                },

            ]
        }
    ])

    const [selectedTab, setSelectedTab] = React.useState({
        id: 0,
        name: "Chair",
        title: 'chairs',
        productList: [
            {
                productId: 1,
                productName: 'Chair Green Colour',
                price: 19.00,
                image: images.greenChair,
            },
            {
                productId: 2,
                productName: 'Chair Peach Colour',
                price: 10.00,
                image: images.redChair,
            },
            {
                productId: 3,
                productName: 'Chair White Colour',
                price: 11.00,
                image: images.whiteChair,
            },
            {
                productId: 4,
                productName: 'Chair Simple Design Black Colour',
                price: 12.00,
                image: images.chair_02,
            },
            {
                productId: 5,
                productName: 'Chair String with White Colour',
                price: 15.00,
                image: images.chair_03,
            },
            {
                productId: 6,
                productName: 'Chair Blue Colour feather',
                price: 15.00,
                image: images.fancyChair,
            },

        ]
    })

    return (
        <SafeAreaView style={styles.container}>
            <RenderHeader />
            <RenderTitle title={selectedTab.title}  />

            <ScrollableTab 
                tabList={tabList}
                selectedTab={selectedTab}
                onPress={(item) => setSelectedTab(item)}
            />

            <View style={{ flex:1 }}>
                <ScrollableCard
                    navigation={navigation}
                    productList={selectedTab.productList}
                />
            </View>

            { /* footer - Promotion Card */}
            <View style={{height: "19%", justifyContent: "flex-end" }}>
                <RenderPromotionCard />
            </View>
      
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    shadow:{
        shadowColor: "#000", 
        shadowOffset:{
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
  
})