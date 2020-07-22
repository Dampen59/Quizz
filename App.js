import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import QuestionsList from './components/QuestionsList';
import ReactDOM from 'react-dom'

export default function App() {

  let nbVies = 3;
  let nbJokers = 2;

  const questionsDataSource = [
    { id: 0, question: "Il existe des volcans sous-marins", explication: "C'était VRAI ! Un volcan sous-marin est un type de volcan qui, par opposition au volcan terrestre, est immergé sous une mer ou un océan", reponse: 1 },
    { id: 1, question: "Une tartine beurée tombe toujours du côté beuré", explication: "C'était FAUX ! Il a été prouvé scientifiquement que la tartine ne tombe pas forcément du côté de la garniture", reponse: 0 },
    { id: 2, question: "Londres est la capitale de la France", explication: "C'était FAUX ! Londres est la capitale du Royaume-Uni et non de la France !", reponse: 0 },
    { id: 3, question: "Linux est une distribution gratuite", explication: "C'était VRAI ! Linux est une distribution gratuite, et même open-source !", reponse: 1 },
    { id: 4, question: "Le coeur d'une crevette est logé dans sa tête", explication: "C'était VRAI ! La crevette a son coeur dans la tête !", reponse: 1 },
    { id: 5, question: "Le briquet a été inventé avant l'allumette.", explication: "C'était VRAI ! Le premier briquet a été inventé en 1823 alors que les premières allumettes sont apparues en 1827", reponse: 1 },
    { id: 6, question: "La plupart des rouges à lèvres contiennent des écailles de poisson.", explication: "C'était VRAI ! La plupart des cosmétiques contiennent des écailles de poisson, ce qui leur donne leur côté brillant.", reponse: 1 },
    { id: 7, question: "La durée d’un jour a toujours été de 24 heures", explication: "C'était FAUX ! Il y a 900 millions d’années, la durée d’un jour était de 18 heures. ", reponse: 0 },
    { id: 8, question: "Le muscle le plus puissant du corps humain est la langue", explication: "C'était FAUX ! La langue n’est pas un muscle, mais un organe composé de dix-sept muscles différents. Le muscle le plus puissant, en terme de puissance absolue, est le grand fessier. ", reponse: 0 },
    { id: 9, question: "La Lune s’éloigne de la Terre", explication: "C'était VRAI ! La Lune s’éloigne de la Terre d’environ 3,8 centimètres par an.", reponse: 1 },
    { id: 10, question: "Cléopâtre était égyptienne", explication: "C'était FAUX ! Cléopâtre était d’origine grecque", reponse: 0 },
    { id: 11, question: "Les araignées sont des insectes", explication: "C'était FAUX ! Les araignées ne sont pas des insectes, mais des arachnides (même famille que les scorpions et les acariens).", reponse: 0 },
    { id: 12, question: "Les connexions Wi-Fi peuvent être perturbées par les fours à micro-ondes", explication: "C'était VRAI ! Le Wi-Fi émet des ondes radio dans une plage de fréquences qui va de 2,401 à 2,488 GHz. Or un four à micro-ondes émet des ondes radio à la fréquence de 2,45 GHz. Une partie de ces ondes s’échappe toujours de l’appareil, il n’est donc pas rare que les connexions Wi-Fi soient perturbées lorsqu’un four est mis en marche, en particulier les canaux Wi-Fi 9 et 10.", reponse: 1 },
  ]

  const StartGame = () => {
    ReactDOM.render(
      <View style={styles.container}>
        <QuestionsList QuestionsList={questionsDataSource} />
      </View>, document.getElementById('root')
    );
  }

  return (
    <View style={styles.container}>
      <Button onPress={StartGame} style={styles.homeBtnStyles} title="Start" color="#088da5" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    width: "90%",
    margin: "5%"
  },
  homeBtnStyles: {

  }
});
