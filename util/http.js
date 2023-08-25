import axios from "axios";

export function storeExpense(expenseData) {
    axios.post(
        "https://react-native-course-81e3d-default-rtdb.firebaseio.com/expenses.json",
        expenseData
    );
}