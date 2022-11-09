import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Style from '../assets/styles'
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry,Icon,Layout,  } from '@ui-kitten/components';
const Notes = () => {
  return (
    <View style={[style.notesContainer]}>

            <View Style={style.headingContainer}>
               
                 <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                 <Text style={style.heading}>My Notes...</Text>
            
                    <TouchableOpacity style={[style.button,]}>
                        <IconRegistry icons={EvaIconsPack}/>
                        <ApplicationProvider {...eva} theme={eva.light}>
                        <Icon name='trash-2-outline' fill="white" style={{width:25,height:50}} />
                        </ApplicationProvider>
                    </TouchableOpacity>

                    <TouchableOpacity style={[style.button,{marginLeft:-40}]}>
                        <IconRegistry icons={EvaIconsPack}/>
                        <ApplicationProvider {...eva} theme={eva.light}>
                        <Icon name='plus-outline' fill="white" style={{width:25,height:50}} />
                        </ApplicationProvider>
                    </TouchableOpacity>
                    
                 </View>
            </View>

            <View style={{flexDirection:'row',alignItems:'center'}}>

                <Text style={{fontWeight:'700',fontSize:'18',color:Style.color}}>
                   Total:     
                </Text>                

            </View>

    </View>
  )
}

export default Notes

export const style=StyleSheet.create({
    notesContainer:{
      paddingTop:10,
      paddingHorizontal:20,
      marginBottom:70,
      opacity:0.9
    },
    heading:{
      fontSize:30,
      fontWeight:'700',
color:Style.color      
    },
    divide:{
        width:'100%',
        height:2,
        backgroundColor:Style.color,
        marginTop:5,
        marginBottom:5
    }
    ,
    item:{
        marginBottom:20,
        padding:15,
        color:'black',
        opacity:0.8,
        marginTop:10,
        shadowColor:Style.color,
        shadowOpacity:0.5,
        shadowOffset:{width:0,height:4},
        shadowRadius:8,
        elevation:5,
        backgroundColor:'white',
        borderColor:Style.color,
        borderWidth:2,
        borderRadius:5,
        borderLeftWidth:15
    },index:{
        fontSize:20,
        fontWeight:'800'
    },headingContainer:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center'
    },
    button:{
        backgroundColor:Style.color,
        width:50,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        height:50
    },
    buttonText:{
        color:'white',
        fontSize:32,
        fontWeight:'800'
    },
    scrollView:{
        marginBottom:70
    },
    note:{
        flexDirection:'row',
        width:'75%'
    },
    text:{
       fontWeight:'700',
        fontsize:17,
        alignSelf:'center'
         
    },
    delete:{
        color:Style.color,
        fontWeight:'700',
        fontSize:15
      },
    input:{
        height:40,
        paddingHorizontal:20,
        width:'65%',
        fontSize:19,
        color:'black',
    fontWeight:'600',
    opacity:0.8,
    shadowColor:Style.color,
    shadowOffset:{width:0,height:4},
    shadowRadius:8,
    elevation:5,
    backgroundColor:'white',
    borderColor:Style.color,
    borderWidth:2,
    borderRadius:5
    },
    searchContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertial:8
    },
searchButton:{
    backgroundColor:Style.color,
    alignItems:"center",
    justifyContent:"center",
    width:60,
    borderRadius:5,
    height:40
}
    ,searchButtonText:{

    color:'white',
    fontWeight:'700',
    fontSize:12
}
    ,emptyNoteContainer:{
    alignItems:"center",
    marginTop:240
}
, emptyNoteText:{
    color:Style.color,
    fontWeight:'600',
    fontSize:15
}    ,    dateContainer:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20
    }
  })