import React, { useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import ReactDOM from 'react-dom'

export default function QuestionsList(props) {


    let alreadyAnsweredQuestions = []
    let userScore = 0
    let userLife = 3
    let userJoker = 2

    const [questions, setQuestions] = useState(props.QuestionsList)

    const styles = StyleSheet.create({
        container: {
            width: "90%",
            margin: "5%"
        },
        btnContainer: {
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            width: "90%",
            margin: "5%"
        },
        toRight: {
            marginLeft: "80%"
        },
        alignCenter: {
            textAlign: "center"
        },
        globalMarginBt: {
            marginBottom: 10
        },
        globalMarginTop: {
            marginBottom: 10
        }
    });

    const SelectRandomQuestion = () => {
        let randomId = Math.floor((Math.random() * (props.QuestionsList.length)))
        let isTrue = props.QuestionsList[randomId].reponse

        if (alreadyAnsweredQuestions.length >= props.QuestionsList.length) {
            return ReactDOM.render(
                <View style={styles.container}>
                    <View>
                        <View style={styles.btnContainer}>
                            <Text>Score : {userScore}</Text>
                            <Text>Vies : {userLife}</Text>
                        </View>

                        <View style={styles.alignCenter}>
                            <Text>Partie terminée</Text>
                            <Text>Votre score final est de {userScore} point(s) !</Text>
                            <Button title="Recommencer" onPress={ResetGame} color="#548078" />
                        </View>
                    </View>
                </View>, document.getElementById('root'))
        }

        while (alreadyAnsweredQuestions.includes(randomId)) {
            randomId = Math.floor((Math.random() * (props.QuestionsList.length)))
            isTrue = props.QuestionsList[randomId].reponse
        }

        alreadyAnsweredQuestions.push(randomId)

        if (isTrue == 1) {
            return ReactDOM.render(
                <View style={styles.container}>
                    <View>
                        <View style={styles.btnContainer}>
                            <Text>Score : {userScore}</Text>
                            <Text>Vies : {userLife}</Text>
                        </View>

                        <View style={styles.alignCenter}>
                            <Text>{props.QuestionsList[randomId].question}</Text>
                        </View>
                        <View style={styles.btnContainer}>
                            <Button title="VRAI" onPress={GoodAnswer} color="#008000" />
                            <Button title={'Jokers (' + (userJoker) + ')'} onPress={UseJoker} color="#E09F3E" />
                            <Button title="FAUX" onPress={() => BadAnswer(props.QuestionsList[randomId].explication)} color="#FF0000" />
                        </View>
                    </View>
                </View>, document.getElementById('root'))
        } else {
            return ReactDOM.render(
                <View style={styles.container}>
                    <View>
                        <View style={styles.btnContainer}>
                            <Text>Score : {userScore}</Text>
                            <Text>Vies : {userLife}</Text>
                        </View>

                        <View style={styles.alignCenter}>
                            <Text>{props.QuestionsList[randomId].question}</Text>
                        </View>
                        <View style={styles.btnContainer}>
                            <Button title="VRAI" onPress={() => BadAnswer(props.QuestionsList[randomId].explication)} color="#008000" />
                            <Button title={'Jokers (' + (userJoker) + ')'} onPress={UseJoker} color="#E09F3E" />
                            <Button title="FAUX" onPress={GoodAnswer} color="#FF0000" />
                        </View>
                    </View>
                </View>, document.getElementById('root'))
        }

    }

    const BadAnswer = (prmExplication) => {

        userLife = userLife - 1

        if (userLife == 0) {
            return ReactDOM.render(<View style={styles.container}>
                <View>
                    <View style={styles.btnContainer}>
                        <Text>Score : {userScore}</Text>
                        <Text>Vies : {userLife}</Text>
                    </View>

                    <View style={styles.alignCenter}>
                        <Text>Vous n'avez plus de vies. Partie terminée.</Text>
                        <Text>Votre score final est de {userScore} point(s) !</Text>
                        <Button title="Recommencer" onPress={ResetGame} color="#548078" />
                    </View>
                </View>
            </View>, document.getElementById('root'))
        }

        ReactDOM.render(
            <View style={styles.container}>
                <View>
                    <View style={styles.btnContainer}>
                        <Text>Score : {userScore}</Text>
                        <Text>Vies : {userLife}</Text>
                    </View>
                    <View style={styles.alignCenter}>
                        <Text>Mauvaise réponse !</Text>
                        <Text>{prmExplication}</Text>
                    </View>
                    <View>
                        <Button title="Suivant" onPress={SelectRandomQuestion} color="#088da5" />
                    </View>
                </View>
            </View>, document.getElementById('root'))
    }

    const GoodAnswer = () => {
        userScore = userScore + 1
        ReactDOM.render(
            <View style={styles.container}>
                <View>
                    <View style={styles.btnContainer}>
                        <Text>Score : {userScore}</Text>
                        <Text>Vies : {userLife}</Text>
                    </View>
                    <View style={styles.alignCenter}>
                        <Text>Bonne réponse !</Text>
                    </View>
                    <View>
                        <Button title="Suivant" onPress={SelectRandomQuestion} color="#088da5" />
                    </View>
                </View>
            </View>, document.getElementById('root'))
    }

    const ResetGame = () => {
        alreadyAnsweredQuestions = []
        userScore = 0
        userLife = 3
        userJoker = 2
        SelectRandomQuestion()
    }

    const UseJoker = () => {
        if (userJoker > 0) {
            userJoker = userJoker - 1
            SelectRandomQuestion()
        }
    }

    return SelectRandomQuestion()

    console.log(questions)

}