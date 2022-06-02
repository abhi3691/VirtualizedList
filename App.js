import React from 'react';
import {
  SafeAreaView,
  View,
  VirtualizedList,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import DATA from './Data';
const getItem = (data, index) => {
  return {
    id: index,
    name: data[index].name,
    profilePicUrl: data[index].profilePicUrl,
  };
};
const getItemCount = data => {
  return data.length;
};
const renderItem = ({item}) => {
  return (
    <View style={styles.item}>
      <Image source={{uri: item.profilePicUrl}} style={styles.image} />
      <View style={styles.nameContainer}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </View>
  );
};
const App = () => {
  return (
    <SafeAreaView>
      <VirtualizedList
        data={DATA}
        initialNumToRender={4}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ccc',
    height: 100,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  nameContainer: {
    marginLeft: 20,
  },
  title: {
    fontSize: 32,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 80,
  },
});
export default App;
