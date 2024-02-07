import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';
import RemoveModal from './src/components/RemoveModal';
import burguer1 from './assets/img_burguer1.png';
import burguer2 from './assets/img_burguer2.png';
import burguer3 from './assets/img_burguer3.png';
import burguer4 from './assets/img_burguer4.png';
import burguer5 from './assets/img_burguer5.png';
import burguer6 from './assets/img_burguer6.png';



const DATA = [
  {
    name: "Le Grande Burguer",
    id: 1,
  },
  {
    name: "La Smash Burguer",
    id: 2,
  },
  { 
    name: "Big Bross Burguer",
    id: 3,
  },
  {
    name: "Bacon Burguer",
    id: 4,
  },
  {
    name: "Veggie Burguer",
    id: 5,
  },
  {
    name: "Monster Burguer",
    id: 6,
  },
];

export default function App() {
  //useState - useEffect
const [counter, setCounter] = useState(0);
const [inputValue, setInputValue] = useState('');
const [cartItems, setCartItems] = useState([]);
const [modalVisible, setModalVisible] = useState(false);
const [itemSelected, setItemSelected] = useState(null);

const handleAddCounter = ()=> setCounter(counter + 1);

const handleInputChange = (value)=> setInputValue(value);

const handleModal = (id)=> {
  setModalVisible(true);
  setItemSelected(id);
  console.log(id);
};

const addItem = ()=> {
  const newItem = {
    name: inputValue,
    id: new Date().getTime()
  };
  setCartItems([...cartItems, newItem]);
};
return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <RemoveModal       
      modalVisible={modalVisible}
      cartItems={cartItems}
      setCartItems={setCartItems}
      setModalVisible={setModalVisible}
      itemSelected={itemSelected}
      />
      <View> 
        <Text style={ {fontSize: 40, fontWeight: 'bold'}}> Menú </Text>
      </View>
      <View > 
        <View style={{flexDirection: 'row'}}>  
          <Pressable onPress={addItem}> 
            <Image style={{width: 100, height:100, borderRadius: 10, marginTop:10}} source={burguer1}/>
          </Pressable>
          <Text style={ {fontSize: 20, fontWeight: '300', padding: 10}} >Le Grande Burguer. Ingredientes: triple queso cheddar, tomates secos, mayonesa, doble medallón de 100gr de carne, salsa especial</Text>
        </View>
        <View style={{flexDirection: 'row'}}> 
          <Pressable onPress={addItem}> 
            <Image style={{width: 100, height:100, borderRadius: 10, marginTop:10}} source={burguer2}/>
          </Pressable>
          <Text style={ {fontSize: 20, fontWeight: '300', padding: 10}} >La Smash Burguer. Ingredientes: queso danbo, doble medallón de 150gr de carne smasheada, cebolla caramelizada</Text>
        </View>
        <View style={{flexDirection: 'row'}}>  
          <Pressable onPress={addItem}> 
            <Image style={{width: 100, height:100, borderRadius: 10, marginTop:10}} source={burguer3}/>
          </Pressable>
          <Text style={ {fontSize: 20, fontWeight: '300', padding: 10}} >Big Bross Burguer. Ingredientes: pan con sésamo, lechuga, tomate, 200gr de carne, mayonesa</Text>
        </View>
        <View style={{flexDirection: 'row'}}> 
          <Pressable onPress={addItem}> 
            <Image style={{width: 100, height:100, borderRadius: 10, marginTop:10}} source={burguer4}/>
          </Pressable>
          <Text style={ {fontSize: 20, fontWeight: '300', padding: 10}} >Bacon Burguer. Ingredientes: doble bacon, doble medallón de 150gr de carne, lechuga repollada</Text>
        </View>
        <View style={{flexDirection: 'row'}}> 
          <Pressable onPress={addItem}> 
            <Image style={{width: 100, height:100, borderRadius: 10, marginTop:10}} source={burguer5}/>
          </Pressable>
          <Text style={ {fontSize: 20, fontWeight: '300', padding: 10}} >Veggie Burguer. Ingredientes: medallón de 150gr de lenteja, tomates secos, salsa alioli</Text>
        </View>
        <View style={{flexDirection: 'row'}}> 
          <Pressable onPress={addItem}> 
            <Image style={{width: 100, height:100, borderRadius: 10, marginTop:10}} source={burguer6}/>
          </Pressable>
          <Text style={ {fontSize: 20, fontWeight: '300', padding: 10}} >Monster Burguer. Ingredientes: triple medallón de 150gr de carne, queso cheddar, doble bacon</Text>
        </View>
      </View>
      <View style={{marginTop: 30}}> 
        <TextInput onChangeText={handleInputChange} placeholder='Desea agregar ingredientes a tu pedido?' value={inputValue} style={{ backgroundColor: '#87CEEB', borderColor: '#FFF8DC', borderWidth: 5, borderRadius: 8, width: 400, height: 20, padding: 30, justifyContent: 'center', alignItems: 'center' }} /> 
        <Pressable onPress={addItem}> 
          <Text style={ {fontSize: 30, fontWeight: 'bold', padding: 10}} >+</Text>
        </Pressable>
      </View>
      <View> 
        <Pressable onPress={handleAddCounter}>
          <Text style= { {fontSize: 30}}> {counter} </Text>
        </Pressable>
      </View>
      <View> 
        <FlatList
          data={cartItems}
          renderItem={({item})=>(
            <View key={item.id}>
              <Text>{item.name}</Text>
              <Pressable onPress={()=> handleModal (item.id)}>
                <Text style={ {fontSize: 30, fontWeight: 'bold'}}>
                X
                </Text>
              </Pressable>
            </View> 
          )}
          keyExtractor={item => item.id} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5F9EA0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight
  },
});
