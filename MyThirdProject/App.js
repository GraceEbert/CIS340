import React, {useState} from 'react';
import { Text, View, Button } from 'react-native';

function TV(props) {

  const[isOff, seIsOff] = useState(true); 
  return(
    <View>
      <Text>
        {"\n\n\n\n"}
      </Text>
      <Button>
          onPress={() => {
            setIfOff(false);
          }}
          disabled={!isOff}
          title={isOff ? "Turn Me On, Please!" :"Thank You!"}
        </Button>
    </View>
  );     
}

export default function MultiTVs() {
  return(
    <View>
      <TV name="LG" />
      <TV name="Sony" />

    </View>
  );
}