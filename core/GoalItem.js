import { Text, View, StyleSheet, Pressable } from "react-native"

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: '#fff'
  },
  goalText: {
    padding: 8,
    color: 'white'
  },
  pressedItem: {
    fontWeight: "bold"
  }
});

export const GoalItem = ({itemData, onItemDelete}) => {
  const onDeleteItem = () => {
    onItemDelete(itemData.item.id);
  }
  return (
    <View style={styles.goalItem}>
        <Pressable 
          android_ripple={{color: '#260452'}} 
          onPress={onDeleteItem}
          style={({pressed}) => pressed && styles.pressedItem}>
          <Text style={styles.goalText}>{itemData.item.text}</Text>
        </Pressable>
    </View>
  )
}
