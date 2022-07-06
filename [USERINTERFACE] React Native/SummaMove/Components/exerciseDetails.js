import { StyleSheet, View } from 'react-native'
import { Card, Paragraph } from 'react-native-paper';
import React from 'react'

const ExerciseDetails = ({ route }) => {

    //Geselecteerde data ophalen
    const { title, description } = route.params;

    //Het detail scherm
    return (
        <View>
            <Card style={styles.card}>
                <Card.Title title={title} />
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
    cardtitle: {
        color:"pink"
    }
})