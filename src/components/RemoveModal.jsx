import Constants from 'expo-constants';
import {StyleSheet, Text, View, Pressable, Modal} from 'react-native';
import React from 'react'


const RemoveModal = ({ modalVisible, cartItems, setCartItems, setModalVisible, itemSelected}
  )=> {
  const removeItem = ()=>{
    const filteredArray = cartItems.filter((item)=>item.id !== itemSelected)
    setCartItems(filteredArray);
    setModalVisible(false)
  };
  return ( 
    <Modal animationType='fade' visible={modalVisible} > 
      <View style={styles.stlmodal}>
        <Text style={{fontSize: 30, fontWeight: 400, marginTop: 10 }}>
          Deseas eliminar el producto?
        </Text>
        <Pressable onPress={removeItem}> 
          <Text style={{fontSize: 40, fontWeight: 600, margin: 50 }}>
            Sí
          </Text>
        </Pressable>
        <Pressable onPress={()=>setModalVisible(false)}> 
          <Text style={{fontSize: 40, fontWeight: 600, margin: 50 }}>
            No
          </Text>
        </Pressable>
      </View>
    </Modal>);
  };

  export default RemoveModal;

  const styles = StyleSheet.create({
    stlmodal: {
      flex: 1,
      backgroundColor: '#ea1313',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight
    },
  });