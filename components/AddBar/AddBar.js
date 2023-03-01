import React, { useEffect, useState } from "react";
import { View,TextInput, Pressable,Text} from "react-native";
import List from "../List";
import styles from "./AddBar.style"


function AddBar(){
  
 

    
    const[toDo,setTodo]=useState("")
    const[toDoList,setTodoList]=useState([])

    
     const changeToDo=(text)=>{
        setTodo(text)
     }
     
     const AddList=(e)=>{
        e.preventDefault()
        if(toDo!==""){
            setTodoList([...toDoList, {id:`${toDo}-${Date.now()}`,toDo}])
            setTodo("")
        }
        
     }
    
    
    return(
        <View>
             <List toDoList={toDoList} setToDoList={setTodoList} />
        <View style={styles.container}>
            <TextInput placeholder="Yapılacaklar..." value={toDo}  style={styles.Input} onChangeText={changeToDo} />
            <Pressable onPress={(e)=>AddList(e)} style={({pressed}) => [
          {
            backgroundColor: pressed ? '#C9CBFF' : '#FFBF00',
          },
          styles.wrapperCustom,
        ]}>
                <Text style={styles.buttonText}>Kaydet</Text>
            </Pressable>
            
        </View>
        </View>
        
    )
}

export default AddBar