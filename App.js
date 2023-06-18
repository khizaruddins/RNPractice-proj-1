import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { GoalInput } from './core/GoalInput';
import { GoalItem } from './core/GoalItem';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setModalVisibility] = useState(false);

  function setModalState(modalState) {
    setModalVisibility(modalState);
  }

  function addGoalHandler(enteredGoal) {
    if (enteredGoal !== '') {
      setCourseGoals(currentGoals => 
      [...currentGoals, 
          {text: enteredGoal, id: Math.random().toString() }]);
    }
    setModalState(false);
  }
  function deleteGoalHandler(id) {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(item => item.id !== id);
    });
  }

  return (
    <>
    <StatusBar style="light" />
      <View style={styles.appContainer}>
        <GoalInput addGoalHandler={addGoalHandler} modalVisible={isModalVisible} setModalState={setModalState} />
        <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals} 
          alwaysBounceVertical={false} 
          renderItem={itemData => {
            return <GoalItem onItemDelete={deleteGoalHandler} itemData={itemData}/>
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}/>
        <Button title={'Add new Goal'} color={'#5e0acc'} onPress={setModalState.bind(this, true)}/>
      </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 24,
    backgroundColor: '#1e0858'
  },
  goalsContainer: {
    flex: 5,
  }
});
