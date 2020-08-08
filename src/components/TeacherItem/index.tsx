import React, { useState } from 'react'
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import api from '../../services/api';

import styles from './styles';

interface ITeacherItemProps {
  teacher: ITeacher;
  favorite: boolean;
}

export interface ITeacher {
  id: number,
  name: string,
  avatar: string,
  bio: string,
  subject: string,
  cost: number,
  whatsapp: string,
}

const TeacherItem: React.FC<ITeacherItemProps> = ({ teacher, favorite }) => {
  const [isFavorite, setIsFavorite] = useState(favorite);
  
  function handleLinkToWhatsapp() {
    Linking.openURL(`whatsapp://send?text=Quero pegar uma aula braba contigo!&phone=+55${teacher.whatsapp}`);
    
    api.post('connections', {
      user_id: teacher.id,
    });
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites');
    let favoritesArray: Array<ITeacher> = [];
    
    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorite) {
      const favoriteIndex = favoritesArray.findIndex((teacherItem: ITeacher) => {
        return teacherItem.id === teacher.id;
      });
      
      favoritesArray.splice(favoriteIndex, 1);
    } else {
      favoritesArray.push(teacher);
    }

    setIsFavorite(!isFavorite);
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image 
          style={styles.avatar}
          source={{ uri: teacher.avatar}}
        />
        
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        {teacher.bio}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>{`R$ ${teacher.cost}`}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton 
            onPress={handleToggleFavorite}
            style={[
              styles.favoriteButton, 
              isFavorite ? styles.unfavoriteButton : { }
            ]}
          >
            { isFavorite 
              ? <Image source={unfavoriteIcon} /> 
              : <Image source={heartOutlineIcon} /> 
            }
          </RectButton>

          <RectButton 
            onPress={handleLinkToWhatsapp}
            style={styles.contactButton}
          >
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>

    </View>
  );
};

export default TeacherItem;
