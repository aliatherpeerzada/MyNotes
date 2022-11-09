import { View, Text, ScrollView,KeyboardAvoidingView, Keyboard, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {style as noteStyle} from './AddNote'
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport'
import AsyncStorage from '@react-native-async-storage/async-storage'
const EditNote = ({route, navigation, ...props }) => {
  const {i,n} =route.params;
  const [newEdit,setNewEdit]=useState(n)

  const editNote=()=>{
    let edited=[...props.notes];
    edited[i]=newEdit;
    props.setNotes(edited)

    AsyncStorage.setItem('storedNotes',JSON.stringify(edited)).then(()=>{
      props.setNotes(edited)
  }).catch(error=>console.log(error))


    navigation.navigate('Notes')
  }

    return (
 
 <ScrollView>

            <KeyboardAvoidingView
            behavior={Platform.OS==='ios'?'padding':'height'}
            >

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={{padding:20,justifyContent:'space-around'}}>

                        <TextInput
                                                onChangeText={(text)=>setNewEdit(text)}
                                                value={newEdit.toString()} 
                        style={noteStyle.input} placeholder='Type Here...' />
                       <TouchableOpacity style={noteStyle.button}
                       onPress={()=>editNote()}
                       >
                        <Text 

                        style={noteStyle.buttonText}>Update</Text>
                        </TouchableOpacity> 

                    </View>



                </TouchableWithoutFeedback>


            </KeyboardAvoidingView>

 </ScrollView>
 
    )
}

export default EditNote