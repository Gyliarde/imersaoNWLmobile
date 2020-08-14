import React from 'react'
import { View , Image, Text} from 'react-native'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatssappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{ uri: 'https://avatars3.githubusercontent.com/u/10583923?s=460&u=9b433eafe3dab97004d4a44a60b3d09d7020117c&v=4' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.titleName}>Gyliarde Farias</Text>
                    <Text style={styles.subject}>Quimica </Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Texto da Biografia de Teste
                {'\n'}{'\n'}
                Texto da Biografia de Teste
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'  '}
                    <Text style={styles.priceValue}> R$ 20,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon}></Image> */}
                        <Image source={unfavoriteIcon}></Image>
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatssappIcon}></Image>
                        <Text style={styles.contactButtonText}>Entrar em contato </Text>
                    </RectButton>
                </View>
            </View>  
        </View>
    )
};

export default TeacherItem;