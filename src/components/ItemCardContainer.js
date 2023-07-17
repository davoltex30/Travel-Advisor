import React from 'react';

import {Image, Text, TouchableOpacity, View} from 'react-native';
import {FontAwesome} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

const ItemCardContainer = ({imageSrc, title, location}) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            className={'rounded-md boder border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[182px] my-2'}
            onPress={() => navigation.navigate("ItemScreen", { param: data })}
        >
            <Image
                className={'w-full h-40 rounded-md object-cover'}
                source={{uri: imageSrc}}
            />

            {title ? (
                <>
                    <Text className={'text-[428288] text-[18px] font-bold'}>
                        {
                            title?.length > 14 ? `${title.slice(0, 14)}...` : title
                        }
                    </Text>

                    <View>
                        <FontAwesome name="map-marker" size={24} color="black" />
                        <Text className={'text-[#428288] text-[18px] font-bold'}>
                            {
                                title?.length > 14 ? `${title.slice(0, 14)}...` : title
                            }
                        </Text>
                    </View>
                </>
            ): (
                <></>
            )}
        </TouchableOpacity>
    );
};

export default ItemCardContainer;
