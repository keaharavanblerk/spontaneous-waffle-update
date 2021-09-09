import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

function Todo(props) {
  const handleDelete = (index) => {
    props.dele(index);
  };

  const kea = props.pass.map((database, id) => {
    if (id > 0)
      if (database.first == 'first') {
        return (
          <View style={style.slab}>
            <View style={{ backgroundColor: '#512D6D', height: 50 }}>
              <Text>{database.item} </Text>
            </View>
            <Button
              className="btn btn-info mt-2 ml-2"
              title="Delete"
              onPress={() => handleDelete(database.item)}
            />
          </View>
        );
      } else if (database.first == 'second') {
        return (
          <View style={style.slab}>
            <View style={{ backgroundColor: '#F8485E', height: 50 }}>
              <Text>{database.item} </Text>
            </View>
            <Button
              className="btn btn-info mt-2 ml-2"
              title="Delete"
              onPress={() => handleDelete(database.item)}
            />
          </View>
        );
      } else if (database.first == 'third') {
        return (
          <View style={style.slab}>
            <View style={{ backgroundColor: '#00C1D4', height: 50 }}>
              <Text>{database.item} </Text>
            </View>
            <Button
              className="btn btn-info mt-2 ml-2"
              title="Delete"
              onPress={() => handleDelete(database.item)}
            />
          </View>
        );
      } else if (database.first == 'forth') {
        return (
          <View style={style.slab}>
            <View style={{ backgroundColor: '#EEEEEE', height: 50 }}>
              <Text>{database.item} </Text>
            </View>
            <Button
              className="btn btn-info mt-2 ml-2"
              title="Delete"
              onPress={() => handleDelete(database.item)}
            />
          </View>
        );
      }
  });

  return (
    <View>
      <Text>{kea}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  slab: {
    display: 'flex',
    marginTop: '5px',
  },
});
export default Todo;
