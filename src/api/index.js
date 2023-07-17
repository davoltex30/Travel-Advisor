import axios from 'axios';

export const getPlacesData = async () => {
    try {
        const {data: {data}} = await axios.get('https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
            {
                params: {
                    bl_latitude: '11.847676',
                    tr_latitude: '12.838442',
                    bl_longitude: '9.6999972',
                    tr_longitude: '4.0499998',
                    limit: '30',
                    currency: 'USD',
                    lunit: 'km',
                    lang: 'en_US'
                },
                headers: {
                    'X-RapidAPI-Key': '89e479458dmsh46393faf5aa33cbp1651e1jsn1408fc6e37a2',
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                }
            }
        )
        return data;
    } catch (error) {
        return null;
    }
};
