import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HabitItem = ({ habit, onToggle, onDelete }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.checkbox, habit.completed && styles.checkboxChecked]}
                onPress={() => onToggle(habit.id)}
            >
                {habit.completed && <Text style={styles.checkmark}>✓</Text>}
            </TouchableOpacity>

            <View style={styles.contentContainer}>
                <Text style={[styles.title, habit.completed && styles.titleCompleted]}>
                    {habit.title}
                </Text>
            </View>

            <TouchableOpacity onPress={() => onDelete(habit.id)} style={styles.deleteBtn}>
                <Text style={styles.deleteText}>✕</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 12,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#4A90E2',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    },
    checkboxChecked: {
        backgroundColor: '#4A90E2',
    },
    checkmark: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    contentContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        color: '#333',
    },
    titleCompleted: {
        textDecorationLine: 'line-through',
        color: '#aaa',
    },
    deleteBtn: {
        padding: 5,
    },
    deleteText: {
        fontSize: 18,
        color: '#999',
    },
});

export default HabitItem;
