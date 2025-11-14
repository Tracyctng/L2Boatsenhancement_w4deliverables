import { StatusBar } from 'expo-status-bar';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Boat from './Boat';

const L2boats = () => {
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.title}>GetABoat - For Sale</Text>

            <View style={[styles.innerBox, {bottom: 50}]}>
                <Boat icon_name="sailboat" title="Sea Ray 500 Sundancer" description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away." poster={require('./image/sea_ray.jpg')}/>
            </View>

            <View style={[styles.innerBox, {bottom: 40}]}>
                <Boat icon_name="sailboat" title="Four Winns Horizon 180" description="A sporty look and refined details truly set the Horizon 180 above all others." poster={require('./image/four_winns.jpg')}/>
            </View>

            <View style={[styles.innerBox, {bottom: 30}]}>
                <Boat icon_name="sailboat" title="Flipper 640 ST" description="A modern take on the classic, traditional hardtop and perfect for a family picnic." poster={require('./image/flipper.jpg')}/>
            </View>

            <View style={[styles.innerBox, {bottom: 20}]}>
                <Boat icon_name="sailboat" title="Princess V48" description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior." poster={require('./image/princess.jpg')}/>
            </View>

            <View style={[styles.innerBox, {bottom: 10}]}>
                <Boat icon_name="sailboat" title="Bayliner 175 Bowrider" description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance." poster={require('./image/bayliner.jpg')}/>
            </View>

            <View style={styles.innerBox}>
                <Boat icon_name="sailboat" title="Fairline Targa 47" description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit." poster={require('./image/fairline.jpg')}/>
            </View>
                <StatusBar style="auto"/>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        paddingBottom: 30,
        backgroundColor: '#fff0f5'
    },

    innerBox: {
        flex: 1,
        backgroundColor: '#e6e6fa',
        borderWidth: 5,
        borderBottomWidth: 5,
        borderColor: '#9370db',
    },

    title: {
        fontSize: 20,
        fontWeight: 500,
        textAlign: 'center',
        marginVertical: 30,
        bottom: 25,
        borderWidth: 3,
        borderBottomWidth: 3,
        borderColor: '#9370db',
    }
})

export default L2boats;