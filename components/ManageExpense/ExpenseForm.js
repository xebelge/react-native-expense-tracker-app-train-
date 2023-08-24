import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../UI/Button";
import { getFormattedDate } from "../../util/date";

function ExpenseForm({ submitButtonLabel, onCancel, onSubmit, defaultValues }) {

    const [inputs, setInputs] = useState({
        amount: defaultValues ? defaultValues.amount.toString() : "",
        date: defaultValues ? getFormattedDate(defaultValues.date) : "",
        description: defaultValues ? defaultValues.description : ""
    });

    function inputChangedHandler(inputIdentifier, enteredValue) {
        setInputs((currentInputs) => {
            return {
                ...currentInputs,
                [inputIdentifier]: enteredValue
            };
        });
    }

    function submitHandler() {
        const newExpenseData = {
            amount: +inputs.amount,
            date: new Date(inputs.date),
            description: inputs.description,
        };

        onSubmit(newExpenseData);
    }

    return <View style={styles.form}>
        <Text style={styles.title}>Expense</Text>
        <View style={styles.inputsRow}>
            <Input style={styles.rowInput} label="Amount" textInputConfig={{
                keyboardType: "decimal-pad",
                value: inputs.amount,
                onChangeText: inputChangedHandler.bind(this, "amount"),
            }} />
            <Input style={styles.rowInput} label="Date" textInputConfig={{
                placeholder: "YYYY-MM-DD",
                maxLength: 10,
                value: inputs.date,
                onChangeText: inputChangedHandler.bind(this, "date"),
            }} />
        </View>
        <Input label="Description" textInputConfig={{
            multiline: true,
            value: inputs.description,
            onChangeText: inputChangedHandler.bind(this, "description"),
        }} />
        <View style={styles.buttons}>
            <Button style={styles.button} mode="flat" onPress={onCancel}>Cancel</Button>
            <Button style={styles.button} onPress={submitHandler}>{submitButtonLabel}</Button>
        </View>
    </View>
}

export default ExpenseForm;

const styles = StyleSheet.create({
    form: {
        marginTop: 80
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginVertical: 24,
    },
    inputsRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    rowInput: {
        flex: 1
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    }
});