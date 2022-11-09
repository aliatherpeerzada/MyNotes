 import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import * as Style from "../assets/styles"
import AsyncStorage from '@react-native-async-storage/async-storage'
import {style as impStyle}  from './Notes'
const DeletedNotes = ({navigation,...props}) => {

const permanentDeleteNote=(index)=>{
  Alert.alert(
    "Delete",
  "Are you sure you want to permanently delete this note",
  [
    {
      text:'No',
      onPress:()=>console.log('no pressed'),
      style:'cancel'
    },
    {
      text:'Yes',
      onPress:()=>{
        let newDeleteArray = [...props.moveToBin];
        newDeleteArray.splice(index,1);
      props.setMoveToBin(newDeleteArray)
 
    AsyncStorage.setItem('deletedNotes',JSON.stringify(newDeleteArray)).then(()=>{
        props.setMoveToBin(newDeleteArray)
    }).catch(error=>console.log(error))

    }
    }
  ])
}


  const undoNote=(index)=>{
  let getBack=props.moveToBin[index]
let array=[getBack,...props.notes];
props.setNotes(array);
let newArray=[...props.moveToBin];
newArray.splice(index,1);
props.setMoveToBin(newArray)

AsyncStorage.setItem('storedNotes',JSON.stringify(array)).then(()=>{
  props.setNotes(array)
}).catch(error=>console.log(error))

AsyncStorage.setItem('deletedNotes',JSON.stringify(newArray)).then(()=>{
  props.setMoveToBin(newArray)
}).catch(error=>console.log(error))



}

const undoAllNotes=()=>{
  let deletedNotes=[...props.moveToBin]
  let notes=[...props.notes]
deletedNotes.forEach((item,index)=>{
  notes.push(item)
})
props.setMoveToBin([])
props.setNotes(deletedNotes)

AsyncStorage.setItem('storedNotes',JSON.stringify(notes)).then(()=>{
  props.setNotes(notes)
}).catch(error=>console.log(error))

AsyncStorage.setItem('deletedNotes',JSON.stringify([])).then(()=>{
  props.setMoveToBin([])
}).catch(error=>console.log(error))



}

  const emptyBin=()=>{
  Alert.alert(
    'Delete All',
    'Are you sure you want to permanently delete all notes?',
    [{
      text:'No',
      onPress:()=>console.log('No Pressed'),
      style:'cancel'
    },{
      text:'Yes',
      onPress:()=>{
        let emptyArray=[...props.moveToBin];
        emptyArray=[];
        props.setMoveToBin(emptyArray);

   
      AsyncStorage.setItem('deletedNotes',JSON.stringify(emptyArray)).then(()=>{
          props.setMoveToBin(emptyArray)
      }).catch(error=>console.log(error))



      },

    }]
  )
}
  return (
    <ScrollView>

        <View style={[impStyle.notesContainer]}>

          <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
           }}>

            <TouchableOpacity style={style.emptyButton}
            onPress={()=>undoAllNotes()}
            >
              <Text style={style.emptyButtonText}>Undo All</Text>
            </TouchableOpacity>

            <Text style={{fontWeight:'700',fontSize:18,color:Style.color}}>
              Total:
            </Text>

            <TouchableOpacity style={style.emptyButton}
            onPress={()=>emptyBin()}>
              <Text style={style.emptyButtonText}>Empty</Text>
            </TouchableOpacity>


          </View>

           <View style={impStyle.divider}></View>

           {props.moveToBin.length===0
           ?
           <View style={impStyle.emptyNoteContainer}>
                <Text style={impStyle.emptyNoteText}>Nothing to show....</Text>
            </View>
          :
props.moveToBin.map((item,index)=>


<View style={impStyle.item} key={index}>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>

<View style={impStyle.note}>
  <Text style={impStyle.index}>{index+1}. </Text>
  <Text style={impStyle.text}>{item}</Text>
</View>
<TouchableOpacity onPress={()=>undoNote(index)}>
<Text style={impStyle.delete}>Undo</Text>
</TouchableOpacity>


</View>
<View style={impStyle.dateContainer}>
<Text>Date: {props.date}</Text>
<TouchableOpacity onPress={()=>permanentDeleteNote(index)}>
  <Text style={impStyle.delete}>Delete</Text>
</TouchableOpacity>
</View>

  </View>

)


          }





        </View>

 
    </ScrollView>
  )
}

export default DeletedNotes

export const style=StyleSheet.create({
  emptyButton:{
backgroundColor:Style.color,
width:'25%',
borderRadius:100,
justifyContent:'center',
alignItems:'center',
height:35,
marginBottom:5

  },
  emptyButtonText:{
    color:'white',
    fontSize:16,
    fontWeight:'700'
  }
})
