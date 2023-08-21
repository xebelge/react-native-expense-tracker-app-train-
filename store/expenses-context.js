import { createContext, useReducer } from "react";

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
    },
    {
        id: "e4",
        description: "A pair of shoes",
        amount: 59.99,
        date: new Date("2023-08-19")
    },
    {
        id: "e5",
        description: "A pair of trousers",
        amount: 99.99,
        date: new Date("2022-08-19")
    },
    {
        id: "e6",
        description: "Apple",
        amount: 1.5,
        date: new Date("2022-07-19")
    },
    {
        id: "e7",
        description: "A pair of shoes",
        amount: 59.99,
        date: new Date("2023-08-19")
    },
    {
        id: "e8",
        description: "A pair of trousers",
        amount: 99.99,
        date: new Date("2022-08-19")
    },
    {
        id: "e9",
        description: "Apple",
        amount: 1.5,
        date: new Date("2022-07-19")
    }
]

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: (expenseData) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, expenseData) => { },
});

function expensesReducer(state, action) {
    switch (action.type) {
        case "ADD":
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state];
        case "UPDATE":
            const updatableExpenseIndex = state.findIndex(
                (expense) => expense.id === action.payload.id
            );
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = {
                ...updatedExpenses[updatableExpenseIndex],
                ...action.payload.expenseData,
            };
            return updatedExpenses;
        case "DELETE":
            return state.filter((expense) => expense.id !== action.payload);
        default:
            return state;
    }
}

function ExpensesContextProvider({ children }) {
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

    function addExpense(expenseData) {
        dispatch({ type: "ADD", payload: expenseData });
    }

    function deleteExpense(id) {
        dispatch({ type: "DELETE", payload: id });
    }

    function updateExpense(id, expenseData) {
        dispatch({ type: "UPDATE", payload: { id: id, expenseData: expenseData } });
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
    };

    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;