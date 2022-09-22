import React, { useState } from 'react';
import {
	View,
	Text,
	ScrollView,
	SafeAreaView,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import Snackbar from 'react-native-snackbar';


const currencyPerRupee = {
	DOLLAR: 0.014,
	EURO: 0.012,
	POUND: 0.011,
	RUBEL: 0.93,
	AUSDOLLAR: 0.2,
	CANDOLLAR: 0.019,
	YEN: 1.54,
	DINAR: 0.0043,
	BITCOIN: 0.000004
};

const App = () => {
	const [inputValue, setInputValue] = useState(0);
	const [resultValue, setResultValue] = useState(0);

	const buttonPressed = currency => {
		if (!inputValue) {
			Snackbar.show({
				text: 'Please enter a value',
				backgroundColor: '#EA7773',
				textColor: '#FFFFFF'
			});
			setResultValue(0);
		} else {
			setResultValue(
				(parseFloat(inputValue) * currencyPerRupee[currency]).toFixed(2)
			);
		}
	};

	return (
		<ScrollView
			backgroundColor='#1b262c'
			keyboardShouldPersistTaps='handled'
			contentInsetAdjustmentBehavior='automatic'
		>
			<SafeAreaView style={styles.container}>
				<View style={styles.resultContainer}>
					<Text style={styles.resultValue}>{resultValue}</Text>
				</View>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						keyboardType='numeric'
						placeholder='Enter Value'
						placeholderTextColor={'#c1c1c1'}
						value={inputValue}
						onChangeText={inputValue => setInputValue(inputValue)}
					></TextInput>
				</View>
				<View style={styles.convertButtonContainer}>
					{Object.keys(currencyPerRupee).map(currency => (
						<TouchableOpacity
							key={currency}
							style={styles.convertButton}
							onPress={() => buttonPressed(currency)}
						>
							<Text style={styles.convertButtontext}>{currency}</Text>
						</TouchableOpacity>
					))}
				</View>
			</SafeAreaView>
		</ScrollView>
	);
};


export default App;


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1b262c',
	},
	resultContainer: {
		height: 70,
		marginTop: 80,
		justifyContent: 'center',
		borderColor: '#bbe1fa',
		borderWidth: 1.5,
		alignItems: 'center',
	},
	resultValue: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
	},
	inputContainer: {
		height: 70,
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#bbe1fa',
		borderWidth: 1.5
	},
	input: {
		fontSize: 30,
		textAlign: 'center',
		color: '#fff'
	},
	convertButtonContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 10,
		justifyContent: 'space-between'
	},
	convertButton: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 100,
		width: '32%',
		borderWidth: 1.5,
		borderColor: '#bbe1fa',
		marginBottom: 10,
		backgroundColor: '#0f4c75'
	},
	convertButtontext: {
		color: '#fff',
		fontSize: 15
	}
})