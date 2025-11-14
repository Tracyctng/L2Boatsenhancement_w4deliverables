import { Text, View, Image } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'

const Boat = ({icon_name, title, description, poster})=> {
    return (
        <View style={{padding: 5, borderBottomColor: '#9370db'}}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <FontAwesome6 name={icon_name} size={20} color="#808080"/>
                <Text>{title}</Text>
            </View>
            <Text style={{textAlign: 'center'}}>{description}</Text>
            <Image source = {poster} style={{width: '100%', height: 170}}/>
        </View>
    );
};

export default Boat;