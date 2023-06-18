import { useState } from "react";
import { TextInput, View, StyleSheet, Button, Modal, Image } from "react-native"

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    flex: 1,
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row'
  },
  button: {
    width: 200,
    marginHorizontal: 8
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  }
});

export const GoalInput = ({addGoalHandler, modalVisible, setModalState}) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  function handleTextChange(enteredText) {
    if (enteredText !== '') {
      setEnteredGoal(enteredText);
    }
  }

  function onAddGoal() {
    addGoalHandler(enteredGoal);
    setEnteredGoal('');
  }
  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image 
          source={require('./../assets/target.png')} 
          style={styles.image}/>
        <TextInput 
          style={styles.textInput} 
          value={enteredGoal} 
          placeholder="Your course goal" 
          onChangeText={handleTextChange} />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Cancel" onPress={setModalState.bind(this, false)} color="#f31282"/>
            </View>
            <View style={styles.button}>
              <Button title="Add goal" onPress={onAddGoal} color="#5e0acc"/>
            </View>
          </View>
      </View>
     </Modal>
  )
}
