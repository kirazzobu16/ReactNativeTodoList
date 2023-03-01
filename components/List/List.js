import React from "react";
import { View,FlatList, Text,TouchableHighlight} from "react-native";
import styles from "./List.style"

function List({toDoList,setToDoList}){
  const PressButton=({item})=>{
    const delTodo=toDoList.filter((to)=>to.id !==item.id)
    setToDoList([...delTodo])
     
  }  
  return(
    <View>
        <View style={styles.titlePosition}>
            <Text style={styles.title}>Yapılacaklar</Text>
            <Text style={styles.title}>{toDoList.length}</Text>
        </View>
        <FlatList style={styles.list}
        data={toDoList}
        renderItem={({item}) =><TouchableHighlight onPress={this._onPressButton} underlayColor="white"> 
        <Text style={styles.todo } 
        onPress={()=>PressButton({item})}>{item.toDo}</Text>
        </TouchableHighlight>
        }
        keyExtractor={item => item.id}
      />

    </View>
  )
}
export default List;