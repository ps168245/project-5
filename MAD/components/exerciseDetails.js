import { StyleSheet, View } from 'react-native'
import { Card, Paragraph } from 'react-native-paper';
import React from 'react'

const ExerciseDetails = ({ route }) => {

    //Geselecteerde data ophalen
    const { name, description } = route.params;

    //Het detail scherm
    return (
        <View>
            <Card style={styles.card}>
                <Card.Title title={name} />
                <Card.Content>
                    <Paragraph>{description}</Paragraph>
                </Card.Content>
            </Card>
        </View>
    )
}

export default ExerciseDetails

//Styling
const styles = StyleSheet.create({
    card: {
        elevation: 4,
        marginBottom: 20,
        marginTop: 20,
        marginHorizontal: 20
    },
})