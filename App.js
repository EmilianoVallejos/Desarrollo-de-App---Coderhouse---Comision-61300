import {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import Constants from 'expo-constants';
import {FlatList, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import RemoveModal from './src/components/RemoveModal';
import Hamburguesa from "./src/components/Hamburguesa";


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

    const handleAddCounter = () => setCounter(counter + 1);

    const handleInputChange = (value) => setInputValue(value);

    const handleModal = (id) => {
        setModalVisible(true);
        setItemSelected(id);
        console.log(id);
    };

    const addItem = () => {
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
                <Text style={{fontSize: 40, fontWeight: 'bold'}}> Menú </Text>
            </View>
            <Hamburguesa/>
            <Hamburguesa/>
            <Hamburguesa/>
            <Hamburguesa/>
            <Hamburguesa/>

            <View style={{marginTop: 30}}>
                <TextInput
                    onChangeText={handleInputChange}
                    placeholder='Desea agregar ingredientes a tu pedido?'
                    value={inputValue} style={styles.textInput}/>
                <Pressable onPress={addItem}>
                    <Text style={{fontSize: 30, fontWeight: 'bold', padding: 10}}>+</Text>
                </Pressable>
            </View>

            <View>
                <Pressable onPress={handleAddCounter}>
                    <Text style={{fontSize: 30}}> {counter} </Text>
                </Pressable>
            </View>
            <View>
                <FlatList
                    data={cartItems}
                    renderItem={({item}) => (
                        <View style={{width: 400}}>
                            <Text>{item.name}</Text> <Pressable onPress={() => handleModal(item.id)}>
                            <Text style={{fontSize: 20}}>X</Text>
                        </Pressable>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5F9EA0',
        paddingTop: Constants.statusBarHeight
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
    },
    textInput: {
        backgroundColor: '#87CEEB',
        borderColor: '#FFF8DC',
        borderWidth: 5,
        borderRadius: 8,
        width: 400,
        height: 20,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }

});
