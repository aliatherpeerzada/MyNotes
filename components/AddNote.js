import { View, Text,StyleSheet, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback,Keyboard, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import * as Style from '../assets/styles'
const AddNote = ({navigation, ...props}) => {
  return (
    <ScrollView>
            <KeyboardAvoidingView
            behavior={Platform.OS==='ios'?'padding':'height'}
            />
            <TouchableWithoutFeedback 
            onPress={Keyboard.dismiss}>
                  <View style={{padding:20,justifyContent:'space-around'}}>
                    
                     <TextInput style={[style.input]} placeholder='Type Here...' multiline={true} 
                     value={props.note} onChangeText={(text)=>props.setNote(text)} />

                     <TouchableOpacity
                     onPress={()=>{
                        if(props.note===''){
                            Alert.alert("Please Type Something")
                        }else{
                            props.handleNote();
                            navigation.navigate('Notes')
                        }
                     }}
                        style={style.button}>
                                <Text style={style.buttonText}>Add</Text>

                     </TouchableOpacity>

                    </View>  
            </TouchableWithoutFeedback>

    </ScrollView>
    )
}

export default AddNote


export const style=StyleSheet.create({
addNoteContainer:{paddingHorizontal:20,
marginTop:20,
alignItems:'center',
justifyContent:'center'},

input:{
    textAlignVertical: 'top',
padding:20,
paddingTop:20,
width:'100%',
fontSize:19,
color:'black',
fontWeight:'600',
opacity:0.8,
shadowColor:Style.color,
shadowOpacity:0.4,
shadowOffset:{width:0,height:4},
shadowRadius:8,
elevation:5,
backgroundColor:'white',
borderColor:Style.color,
borderWidth:2,
borderRadius:5,
height:300
},

button:{
    backgroundColor:Style.color,
    width:'40%',
    borderRadius:100,
    justifyContent:'center',
alignItems:'center',
height:40,
alignSelf:'flex-end',
marginTop:20
    
}
    ,buttonText:{
    color:'white',
    fontSize:20,
    fontWeight:'700'
}    
})
