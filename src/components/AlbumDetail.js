import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) =>{
    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailFrameStyle}>
                    <Image
                    style={styles.thumbnailStyle}
                     source={ {uri: props.album.thumbnail_image}} />
                </View>
            <View style={styles.headerContentStyle}> 
            <Text style={styles.titleTextStyle}>{props.album.title}</Text>
            <Text>{props.album.artist}</Text>
            </View>
            </CardSection>
            <CardSection>
                <Image
                style={styles.imageStyle}
                 source= {{ uri: props.album.image}}/>
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(props.album.url) } />
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailFrameStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    titleTextStyle: {
        fontSize:18
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }

};

export default AlbumDetail;