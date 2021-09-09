 import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';
import TODOLIST from './components/TODOLIST';

export default function App() {
  const [mainArray, setMain] = useState([
    {
      item: '',
      first: '',
    },
  ]);

  const [newArray, setNew] = useState({
    item: '',
    first: '',
  });


  const Add = (empty) => {
    if (
      newArray.first !== 'first' &&
      newArray.first !== 'second' &&
      newArray.first !== 'third' &&
      newArray.first !== 'forth'
    ) {
      alert('Input error! Entered an unexpected token! ');
      setNew({
        item: '',
        first: '',
      });
    } else if (
      newArray.first == 'first' ||
      newArray.first == 'second' ||
      newArray.first == 'third' ||
      newArray.first == 'forth'
    ) {
      let newAA = [...mainArray, empty];
      setMain(newAA);
      setNew({
        item: '',
        first: '',
      });
    }
  };

  const handleDelete = (num) => {
    setMain(mainArray.filter((a) => a.item !== num));
  };
  return (
    <View style={styles.items}>
      <form onSubmit={(e) => e.preventDefault()}>
        <Text style={styles.sectionTittle}>TO DO LIST</Text>
        <TextInput
          style={styles.textInput}
          type="text"
          placeholder="ITEM"
          className="form-control w-75"
          value={newArray.item}
          onChange={(e) => setNew({ ...newArray, item: e.target.value })}
        />
        <TextInput
          style={styles.textInput}
          type="text"
          placeholder="PRIORITY"
          className="form-control w-75"
          value={newArray.first}
          onChange={(e) => setNew({ ...newArray, first: e.target.value })}
        />
        <View style={styles.move}>
          {' '}
          <Button title="Add" onPress={() => Add(newArray)} />
        </View>
      </form>
      <View style={styles.move}>
        <TODOLIST pass={mainArray} dele={handleDelete} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  items: {
    height: '100%',
    textAlign: 'center',
    backgroundColor: '#29648a',
    paddingTop: 0,
    paddingHorizontal: 8,
    fontWeight: 'bold',
    marginBottom: '20',
  },

  textInput: {
    textTransform:'uppercase',
    color:'white',
    textAlign: 'center',
    position: 'relative',
    top: 50,
    justifyContent: 'space-between',
    marginBottom: '20px',
    alignItems: 'stretch',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    height: 40,
    width: 316,
    borderColor: 'skyblue',
  },

  move: {
    position: 'relative',
    top: 50,
    marginBottom: '15px',
  },

  sectionTittle: {
    fontSize: '40px',
    fontWeight:600
  },
});
