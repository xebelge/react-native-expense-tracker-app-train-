import { useLayoutEffect } from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/core";

function ManageExpenses({ route }) {
    const navigation = useNavigation();
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense',
        });
    }, [navigation, isEditing]);

    return <Text>ManageExpenses Screen</Text>
}

export default ManageExpenses;