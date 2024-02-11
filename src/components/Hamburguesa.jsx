import {View, Image, Pressable, StyleSheet, Text, ScrollView} from 'react-native'
import React from 'react'
import burguer1 from "../../assets/img_burguer1.png";

const Hamburguesa = () =>{

    
        return(  
            <View> 
                <Pressable onPress={Hamburguesa} style={styles.pressable}> 
                        <Image style={styles.img} source={burguer1}/>
                        <Text style={styles.textoingr}>Le Grande Burguer. Ingredientes: triple queso cheddar, tomates secos, mayonesa, doble
                            medallón de 100gr de carne, salsa especial</Text>
                </Pressable>
            </View>               
        );
    };          

export default Hamburguesa;

const styles = StyleSheet.create({
    pressable: {
        flexDirection: "row"
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginTop: 10
    },
    textoingr: {
        fontSize: 20,
        fontWeight: '300',
        padding: 10
    }
})



/*

export default function Hamburguesa() {
    return (
        
        <Pressable style={styles.pressable}>
            <Image style={styles.img} source={burguer1}/>
            <Text style={styles.textoingr}>Le Grande Burguer. Ingredientes: triple queso cheddar, tomates secos, mayonesa, doble
                medallón de 100gr de carne, salsa especial</Text>
        </Pressable>
)
}*/
/*
    function Categories() {
  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryItem category={item}/>}
        keyExtractor={(category) => category}
      />
    </View>
  );
}
export default Categories;
    */
