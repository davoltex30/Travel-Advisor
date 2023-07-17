import React, {useLayoutEffect} from 'react';
import * as Animatable from 'react-native-animatable'
import {StyleSheet, StatusBar, Platform, SafeAreaView, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {HeroImage} from "../../assets";

const HomeScreen = () => {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    return (
        <SafeAreaView style={styles.AndroidSafeArea} className='flex-1'>

            {/* First Section */}
            <View className={'flex-row px-6 mt-8 items-center space-x-2'}>
                <View className={'w-16 h-16 bg-black rounded-full items-center justify-center'}>
                    <Text className={'text-[#00BCC9] text-3xl font-semibold'}>Go</Text>
                </View>

                <Text className={'text-[#2A2B4B] text-3xl font-semibold'}>Travel</Text>
            </View>

            {/* Second Section */}
            <View className={'px-6 mt-8 space-y-3'}>
                <Text className={'text-[#3C6072] text-[42px]'}>Enjoy the trip with</Text>
                <Text className={'text-[#00BCC9] text-[42px] font-bold'}>Good Moments</Text>
                <Text className={'text-[#3C6072] text-base'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci delectus dignissimos doloribus ea explica
                </Text>
            </View>

            {/* Circle Section */}
            <View className={'w-[350px] h-[350px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36'}></View>
            <View className={'w-[350px] h-[350px] bg-[#E99265] rounded-full absolute -bottom-36 -left-36'}></View>

            {/* Image Container */}
            <View className={'flex-1 relative items-center justify-center'}>
                <Animatable.Image
                    animation={'fadeIn'}
                    easing={'ease-in-out'}
                    className={'w-full h-full mt-20 object-cover'}
                    source={HeroImage}
                />

                <TouchableOpacity
                    onPress={() => navigation.navigate('Discover')}
                    className={'absolute bottom-20 w-24 h-24 justify-center items-center border-x-2 border-t-4 border-[#00BCC9] rounded-full'}>
                        <Animatable.View
                            animation={'pulse'}
                            easing={'ease-in-out'}
                            iterationCount={'infinite'}
                            className={'w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]'}>
                            <Text className={'text-gray-50 text-[32px] font-semibold'}>Go</Text>
                        </Animatable.View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    AndroidSafeArea: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
});
export default HomeScreen;
