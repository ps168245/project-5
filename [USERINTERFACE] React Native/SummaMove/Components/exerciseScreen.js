import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/stack';
import exercisesAll from './exercisesAll';

//navigatie
const Stack = createNativeStackNavigator();

//Uiterlijk
const ExerciseScreen = () => {
    return (
  <ExStack />
    );
}
<<<<<<< HEAD

const List = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getExercises = async () => {
    try {
      const response = await fetch('https://gameapi-aba23-default-rtdb.firebaseio.com/.json');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getExercises();
  }, []);
    return (
        <View style={styles.list}>
          {isLoading ? <ActivityIndicator/> : (
              <FlatList horizontal={false} numColumns={2}
                  data={data}
                  keyExtractor={({ id }, index) => id}
                  renderItem={({ item }) => (
                      <TouchableOpacity onPress={() => navigation.navigate('Details', {
                          id: item.id,
                          name: item.Name,
                          description: item.Description,
                      })}>
                        <View style={styles.item}>
                            <View>
                                <AntDesign name='heart' size={15} color={'#D96B55'}/>
                            </View>
                            <View>

                            </View>
                          <Text style={styles.itemtext}>{item.Name}</Text>
                        </View>
                      </TouchableOpacity>
                  )}
              />
          )}s
        </View>
    );
}
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



function Details({ route }) {

  const { name, description } = route.params;

  return (
      <View style={{backgroundColor: '#FCCAD2', flex: 1, padding: 10 }}>
          <View style={{}}>
              <Text style={{marginTop: 10, textAlign: 'center', fontWeight: 'bold', fontSize: 20, color: '#DA624E'}}>{name}</Text>
              <Text style={{marginTop: 20, padding: 10, color: '#DA624E'}}>{description}</Text>
          </View>
      </View>
=======
//De paginas
const ExStack = () =>{
return(
  <Stack.Navigator 
                    initialRouteName="exerciseAll" >
      <Stack.Screen name="Home" 
        	          component={exercisesAll}  
                    options={{title: 'Oefeningen', 
          }} />
      <Stack.Screen 
                    name="exerciseDetails" 
                    component={exerciseDetails} 
                    options={{title: 'Details', 
          }}  />
  </Stack.Navigator>
>>>>>>> 0092feadcf27b24c0751bec1681b440e583d53dd
  );
}



export default ExerciseScreen