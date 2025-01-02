import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import Toast from "react-native-toast-message";
import { ActivityIndicator, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider'
import { styles } from "./styles";
import toast from "../../constants/toast";

const apiKey = "AIzaSyAzViHBqVBe3txIUZJfyauX72xxgPNrl9U"



const CheckBox = ({ label, checked, onPress }) => {
    return (
        <View style={styles.BoxView}>
            <TouchableOpacity style={[styles.checkBox, checked && styles.selectedCheckBox]} onPress={onPress}>
            </TouchableOpacity>
            <Text style={styles.label}>{label}</Text>

        </View>
    );
};

export default function Home() {

    const [days, setDays] = useState(1);
    const [loading, setLoading] = useState(false);
    const initialCheckboxStates1 = Array(8).fill(false);
    const initialCheckboxStates2 = Array(6).fill(false);
    const [checkboxStates1, setCheckboxStates1] = useState(initialCheckboxStates1);
    const [checkboxStates2, setCheckboxStates2] = useState(initialCheckboxStates2);
    const [trainingRoutine, setTrainingRoutine] = useState('');
    const [showTrain, setShowTrain] = useState(false);

    async function handleGenerate(){

        setLoading(true);
        
        let prompt = `Faça um treino de academia para uma pessoa que pode treinar ${days.toFixed(0)} vezes na semana.`;
        
        const selectedMuscles = labels1.filter((_, index) => checkboxStates1[index]);
        const selectedObjetives = labels2.filter((_, index) => checkboxStates2[index]);
        console.log(selectedMuscles.length)
        console.log(selectedObjetives.length)

        if(selectedMuscles.length > 0){
            prompt = `Faça um treino de academia para uma pessoa que pode treinar ${days.toFixed(0)} vezes na semana, o treino deve dar ênfase aos seguintes músculos: ${selectedMuscles}.`

        }else if(selectedObjetives.length > 0){
            prompt = `Faça um treino de academia para uma pessoa que pode treinar ${days.toFixed(0)} vezes na semana, o treino deve ter como objetivo: ${selectedObjetives}.`

        }

        if(selectedMuscles.length > 0 && selectedObjetives.length > 0){
            prompt = `Faça um treino de academia para uma pessoa que pode treinar ${days.toFixed(0)} vezes na semana, o treino deve dar ênfase aos seguintes músculos: ${selectedMuscles}. Além disso, o treino deve ter como objetivo: ${selectedObjetives}.`

        }
        console.log("here")
        try {
            const result = await fetch(
              `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  contents: [{
                    parts: [{ text: prompt }]
                  }]
                })
              }
            );
      
            const data = await result.json();
            console.log(data)
            setTrainingRoutine(data.candidates[0].content.parts[0].text);
            setShowTrain(true)
          } catch (err) {
            console.error('Error:', err);
            setTrainingRoutine('Algum problema ocorreu, Tente novamente!');
          } finally {
            setLoading(false);
          }

    }

    const handleBack = () => {
        setShowTrain(false)
        setTrainingRoutine("")
    };

    const handlePress1 = (index) => {
        const newStates = [...checkboxStates1];
        newStates[index] = !newStates[index];
        setCheckboxStates1(newStates);
    };

    const handlePress2 = (index) => {
        const newStates = [...checkboxStates2];
        newStates[index] = !newStates[index];
        setCheckboxStates2(newStates);
    };

    const labels1 = [
        'Abdômen',
        'Bíceps',
        'Costas',
        'Panturrilha',
        'Peito',
        'Posterior',
        'Quadríceps',
        'Tríceps'
    ];

    const labels2 = [
        'Aumento de Força',
        'Bem-Estar Geral',
        'Ganho de Massa',
        'Mobilidade',
        'Perda de Peso',
        'Resistência',
    ];

    

    return (
        <View style={styles.container}>
            <View style={styles.titleView}>
            <Image
                style={styles.logo}
                source={require("./assets/gainz.png")}
            ></Image>
            </View>
            <View style={styles.workView}>
                <View style={styles.questionsView}>
                    {!showTrain && !loading && (
                        <>
                            <Text style={styles.label}>Quantas vezes você quer treinar na semana? ({days.toFixed(0)})</Text>
                            <Slider
                                style={styles.slider}
                                minimumValue={1}
                                maximumValue={7}
                                minimumTrackTintColor="#119DA4"
                                maximumTrackTintColor="#0C7489"
                                value={days}
                                onValueChange={(value) => setDays(value)}
                            />
                            <Text style={styles.label}>Gostaria de dar ênfase para algum músculo?</Text>
                            <View style={styles.checkBoxesView}>
                                <View style={styles.halfCheckBoxView}>
                                    {checkboxStates1.slice(0, 4).map((checked, index) => (
                                        <CheckBox
                                            key={index}
                                            label={labels1[index]}
                                            checked={checked}
                                            onPress={() => handlePress1(index)}
                                        />
                                    ))} 
                                </View>
                                <View style={styles.halfCheckBoxView}>
                                    {checkboxStates1.slice(4, 8).map((checked, index) => (
                                        <CheckBox
                                            key={index}
                                            label={labels1[index + 4]}
                                            checked={checked}
                                            onPress={() => handlePress1(index + 4)}
                                        />
                                    ))} 
                                </View>
                            </View>
                            <Text style={styles.label}>Qual é o objetivo que você busca com o treino?</Text>
                            <View style={styles.checkBoxesView}>
                                <View style={styles.halfCheckBoxView}>
                                    {checkboxStates2.slice(0, 3).map((checked, index) => (
                                        <CheckBox
                                            key={index}
                                            label={labels2[index]}
                                            checked={checked}
                                            onPress={() => handlePress2(index)}
                                        />
                                    ))} 
                                </View>
                                
                                
                                <View style={styles.halfCheckBoxView}>
                                    {checkboxStates2.slice(3, 6).map((checked, index) => (
                                        <CheckBox
                                            key={index}
                                            label={labels2[index + 3]}
                                            checked={checked}
                                            onPress={() => handlePress2(index + 3)}
                                        />
                                    ))} 
                                    
                                </View>
                            </View>
                            <TouchableOpacity style={styles.button} onPress={handleGenerate}>
                                <Text style={styles.buttonText}>GERAR TREINO</Text>
                            </TouchableOpacity>
                        </>
                    )}
                    {loading && (
                        <View style={styles.loadingView}>
                            <Text style={styles.loadingText}>Carregando Treino!</Text>
                            <ActivityIndicator color="#0C7489" size="large"/>
                        </View>
                    )}
                    {showTrain && !loading && (
                        <ScrollView>
                            <View style={styles.respMenuView}>
                                <TouchableOpacity onPress={handleBack}>
                                    <Image
                                        style={styles.voltar}
                                        source={require("./assets/voltar.png")}
                                    ></Image>
                                </TouchableOpacity>
                                <Text style={styles.trainTitle}>SEU TREINO</Text>
                                <TouchableOpacity>
                                    <Image
                                        style={styles.voltar}
                                        source={require("./assets/documentos.png")}
                                    ></Image>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.trainText}>{trainingRoutine}</Text>
                        </ScrollView>
                    )}
                </View>
            </View>
        </View>
    
    );
}