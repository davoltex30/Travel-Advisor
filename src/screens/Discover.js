import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
    ActivityIndicator,
    Image,
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {Attractions, Avatar, Hotels, NotFound, Restaurants} from "../../assets";
import MenuContainer from "../components/MenuContainer";
import ItemCardContainer from "../components/ItemCardContainer";
import {FontAwesome} from '@expo/vector-icons';
import {getPlacesData} from "../api";

const Discover = () => {

    const navigation = useNavigation()

    const [type, setType] = useState('restaurants');
    const [mainData, setMainData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    useEffect(() => {
        setIsLoading(true)
        getPlacesData().then(data => {
            setMainData(data);
            setInterval(() => {
                setIsLoading(false)
            }, 2000)
        })
    }, [])
    return (
        <SafeAreaView style={styles.AndroidSafeArea} className='flex-1 bg-white relative'>
            <View className={'flex-row items-center justify-between px-8'}>
                <View>
                    <Text className={'text-[40px] text-[#0B646B] font-bold'}>Discover</Text>
                    <Text className={'text-[36px] text-[#527283]'}>the Beauty today</Text>
                </View>
                <View className={'w-12 h-12 bg-gray-400 rounded-md items-center justify-center'}>
                    <Image
                        source={Avatar}
                        className={'w-full h-full rounded-md object-cover'}
                    />
                </View>
            </View>

            <View>
                {/*    fetchDetails={true} */}
                {/*    GooglePlacesDetailsQuery={{fields: 'geometry'}} */}
            </View>

            {/* Menu container*/}
            {isLoading ? (
                <View className=" flex-1 items-center justify-center">
                    <ActivityIndicator size="large" color="#0B646B"/>
                </View>
            ) : (
                <ScrollView>
                    <View className={'flex-row items-center justify-between px-8 mt-6'}>
                        <MenuContainer
                            key={'hotel'}
                            title={'Hotels'}
                            imageSrc={Hotels}
                            type={type}
                            setType={setType}
                        />
                        <MenuContainer
                            key={'attractions'}
                            title={'Attractions'}
                            imageSrc={Attractions}
                            type={type}
                            setType={setType}
                        />
                        <MenuContainer
                            key={'restaurants'}
                            title={'Restaurants'}
                            imageSrc={Restaurants}
                            type={type}
                            setType={setType}
                        />
                    </View>
                    <View>
                        <View className={'flex-row items-center justify-between px-4 mt-8'}>
                            <Text className={'text-[#2C7379] text-[20px] font-bold'}>Top Tips</Text>
                            <TouchableOpacity className={'flex-row items-center justify-center space-x-2'}>
                                <Text>Explore</Text>
                                <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7"/>
                            </TouchableOpacity>
                        </View>

                        <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
                            {mainData?.length > 0 ? (
                                <>
                                    {mainData?.map((data, i) => (
                                        <ItemCardContainer
                                            key={i}
                                            imageSrc={
                                                data?.photo?.images?.medium?.url
                                                    ? data?.photo?.images?.medium?.url
                                                    : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"
                                            }
                                            title={data?.name}
                                            location={data?.location_string}
                                            data={data}
                                        />
                                    ))}
                                </>
                            ) : (
                                <>
                                    <View className="w-full h-[400px] items-center space-y-8 justify-center">
                                        <Image
                                            source={NotFound}
                                            className=" w-32 h-32 object-cover"
                                        />
                                        <Text className="text-2xl text-[#428288] font-semibold">
                                            Opps...No Data Found
                                        </Text>
                                    </View>
                                </>
                            )}
                        </View>
                    </View>
                </ScrollView>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    AndroidSafeArea: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
});
export default Discover;
