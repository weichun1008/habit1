import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HabitItem from '../components/HabitItem';
import { v4 as uuidv4 } from 'uuid';

const HabitScreen = () => {
    const [habits, setHabits] = useState([
        { id: '1', title: '喝 2000cc 水', completed: false, createdAt: Date.now() },
        { id: '2', title: '運動 30 分鐘', completed: true, createdAt: Date.now() - 1000 },
    ]);
    const [newHabitTitle, setNewHabitTitle] = useState('');

    const addHabit = () => {
        if (newHabitTitle.trim().length === 0) return;

        const newHabit = {
            id: uuidv4(), // In a real app, use a proper UUID generator
            title: newHabitTitle,
            completed: false,
            createdAt: Date.now(),
        };

        setHabits([...habits, newHabit]);
        setNewHabitTitle('');
    };

    const toggleHabit = (id) => {
        setHabits(habits.map(habit =>
            habit.id === id ? { ...habit, completed: !habit.completed } : habit
        ));
    };

    const deleteHabit = (id) => {
        setHabits(habits.filter(habit => habit.id !== id));
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>我的習慣</Text>
                <Text style={styles.subtitle}>建立好習慣，成就更好的自己</Text>
            </View>

            <FlatList
                data={habits}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <HabitItem
                        habit={item}
                        onToggle={toggleHabit}
                        onDelete={deleteHabit}
                    />
                )}
                contentContainerStyle={styles.listContent}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>還沒有習慣，新增一個吧！</Text>
                    </View>
                }
            />

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
                style={styles.inputWrapper}
            >
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="新增一個習慣..."
                        value={newHabitTitle}
                        onChangeText={setNewHabitTitle}
                        onSubmitEditing={addHabit}
                    />
                    <TouchableOpacity onPress={addHabit} style={styles.addButton}>
                        <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F9FC',
    },
    header: {
        padding: 20,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2C3E50',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: '#7F8C8D',
    },
    listContent: {
        padding: 20,
        paddingBottom: 100,
    },
    emptyContainer: {
        alignItems: 'center',
        marginTop: 50,
    },
    emptyText: {
        color: '#BDC3C7',
        fontSize: 16,
    },
    inputWrapper: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'transparent',
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 5,
    },
    input: {
        flex: 1,
        height: 44,
        backgroundColor: '#F0F2F5',
        borderRadius: 22,
        paddingHorizontal: 20,
        fontSize: 16,
        marginRight: 10,
    },
    addButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#4A90E2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButtonText: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: -2,
    },
});

export default HabitScreen;
