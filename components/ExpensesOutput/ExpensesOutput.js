import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        description: "A pair of shoes",
        amount: 59.99,
        date: new Date("2023-08-19")
    },
    {
        id: "e2",
        description: "A pair of trousers",
        amount: 99.99,
        date: new Date("2022-08-19")
    },
    {
        id: "e3",
        description: "Apple",
        amount: 1.5,
        date: new Date("2022-07-19")
    }
]

function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
        <View>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    );
}

export default ExpensesOutput;