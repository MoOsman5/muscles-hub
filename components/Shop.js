import React from 'react';
import {View, StyleSheet,Text,Image,TouchableOpacity,ScrollView} from 'react-native';
import styles from '../styles/shopStyle';

const Shop = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor:'#303030'}}>
    <View  style={styles.containr}>
      <Text style={styles.mainText}>Choose the item you want to buy </Text>
      <View style={styles.containr2}>
        <TouchableOpacity style={styles.containr3} onPress={()=>navigation.navigate("Creatine")}>
          <Image 
            source={{uri:'https://th.bing.com/th/id/OIP.pYCDmdYuI8W9w_2YO4bz8wHaE8?pid=ImgDet&w=3000&h=2000&rs=1'}}
            style={styles.img}
            />
            <Text style={styles.bText}>Creatine</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.containr3} onPress={()=>navigation.navigate("Protien")}>
          <Image 
            source={{uri:'https://th.bing.com/th/id/OSK.HEROJiCErRf2JJ5xCFU5DIzVypuJBlgDZ6ChtaNZ7VGfDOQ?pid=ImgDet&rs=1'}}
            style={styles.img}
            />
            <Text style={styles.bText}>Protein</Text>

        </TouchableOpacity>

      </View>
      <View style={styles.containr2}>
        <TouchableOpacity style={styles.containr3} onPress={()=>navigation.navigate("lArginine")}>
          <Image 
            source={{uri:'https://media.gettyimages.com/photos/arginine-an-amino-acid-is-a-dietary-supplement-picture-id564032027'}}
            style={styles.img}
            />
            <Text style={styles.bText}>L-Arginine</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.containr3} onPress={()=>navigation.navigate("Glutamine")}>
          <Image 
            source={{uri:'https://th.bing.com/th?id=OIP.tCyuT9RB4f8GhrIZcssXZAHaDY&w=188&h=94&c=2&o=6&dpr=1.3&pid=SupCap'}}
            style={styles.img}
            />
            <Text style={styles.bText}>Glutamine</Text>

        </TouchableOpacity>

      </View>
      <View style={styles.containr2}>
        <TouchableOpacity style={styles.containr3} onPress={()=>navigation.navigate("Omega3")}>
          <Image 
            source={{uri:'https://th.bing.com/th/id/R.c7cc5ec413cc121addb12b9c9d6e05a4?rik=XAwotjgOxFcHcg&pid=ImgRaw&r=0'}}
            style={styles.img}
            />
            <Text style={styles.bText}>Omega 3</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.containr3} onPress={()=>navigation.navigate("Carb")}>
          <Image 
            source={{uri:'https://greensmoothiegirl.com/wp-content/uploads/2017/05/close-protein-powder-scoops-why-is-whey-protein-bad-ss-FEATURE--768x430.jpg'}}
            style={styles.img}
            />
            <Text style={styles.bText}>Carb</Text>

        </TouchableOpacity>

      </View>
      <View style={styles.containr2}>
        <TouchableOpacity style={styles.containr3} onPress={()=>navigation.navigate("Vitamins")}>
          <Image 
            source={{uri:'https://www.shefinds.com/files/2020/09/vitamins-top-photo.jpg'}}
            style={styles.img}
            />
            <Text style={styles.bText}>Vitamins</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.containr3} onPress={()=>navigation.navigate("FitEquipment")}>
          <Image 
            source={{uri:'https://max.test.centrierp.com/web/image/1368245/fitness-img.jpg'}}
            style={styles.img}
            />
            <Text style={[styles.bText,{fontSize:18}]}>Fitness Equipment's</Text>

        </TouchableOpacity>

      </View>
      
  </View>
  </ScrollView>
  );
}


export default Shop;
