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
    <Modal animationType='fade' visible={modalVisible}> 
      <View>
        <Text>
          Deseas eliminar el producto?
        </Text>
        <Pressable onPress={removeItem}> 
          <Text>
            Sí
          </Text>
        </Pressable>
        <Pressable onPress={()=>setModalVisible(false)}> 
          <Text>
            No
          </Text>
        </Pressable>
      </View>
    </Modal>);
  };

  export default RemoveModal;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#5F9EA0',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight
    },
  });