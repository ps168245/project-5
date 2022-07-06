import { StyleSheet, View, FlatList, RefreshControl } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { Card, Button } from 'react-native-paper';

const ExercisesOverview = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [exercises, setExercises] = useState();


    //API data word opgehaald voor de exercises
    const fetchExercises = async () => {
        try {
            setIsLoading(true);

            const response = await fetch('https://basbobby.nl/SummaMove/public/api/exercise', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            const json = await response.json();
            setExercises(json);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            setIsLoading(false);
        }
    }

    //Elke exercise met een button, die navigeert naar de details
    const renderItem = ({ item }) => (
        <Card style={styles.card}>
            <Card.Title title={item.name} />
            <Card.Actions>
                <Button style={styles.cardbutton} mode="outlined" onPress={() => navigation.navigate('exerciseDetails', {
                    //Variables van de exercise doorsturen naar het details scherm
                    id: item.id, title: item.name, description: item.description
                })}>Details</Button>
            </Card.Actions>
        </Card>
    );

    useEffect(() => {
        fetchExercises();
    }, []);

    //De gehele lijst exercises
    return (
        <View>
            <FlatList
                style={{marginTop: 20}}
                data={exercises}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                refreshControl={
                    <RefreshControl
                        refreshing={isLoading}
                        onRefresh={fetchExercises}
                    />
                }
            />
        </View>
    )
}

export default ExercisesOverview

//Styling
const styles = StyleSheet.create({
    card: {
        elevation: 4,
        marginBottom: 20,
        marginHorizontal: 20,
        flex: 1,
    },
    cardbutton: {
        margin: 5,
        flex: 2,
        marginLeft: 0,
        color: 'white',
        backgroundColor: '#f9009a'
    },
})