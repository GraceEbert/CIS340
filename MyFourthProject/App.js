import React from 'react';
import { Text, View, SectionList } from 'react-native';

  export default StatesAppp = () => {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <SectionList
        sections={[
         {title: 'A', data: ['Alabama', 'Alaska', 'Arizona' , 'Arkansas']},
         {title: 'C', data: ['California', 'Colorado', 'Conneticut']},
         {title: 'D', data: ['Delaware']},
         {title: 'F', data: ['Florida']},
         {title: 'G', data: ['Georgia']},
         {title: 'H', data: ['Hawaii']}, 

        ]}//fishin sections 
        renderItem={({ item}) => <Text style={{padding: 10, fontsize: 20, height: 44,}}> {item} </Text>}
        renderSectionHeader={({section}) => <Text style={{paddingTop: 4, paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 4,
        fontSize: 14, 
        fontWeight: 'bold', 
        backgroundColor: '#9FA8D',}}>{section.title} </Text>} //set color later on
        keyExtractor={(item,index) => index}
        />
          </View>
    );//end of statement
        }
    