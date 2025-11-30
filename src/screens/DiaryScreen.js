import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DiaryScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>今日飲食日記</Text>
            </View>
            <ScrollView style={styles.content}>
                <View style={styles.mealCard}>
                    <Text style={styles.mealTitle}>早餐</Text>
                    <Text style={styles.mealContent}>燕麥片, 牛奶, 蘋果</Text>
                    <Text style={styles.calories}>350 kcal</Text>
                </View>
                <View style={styles.mealCard}>
                    <Text style={styles.mealTitle}>午餐</Text>
                    <Text style={styles.mealContent}>雞胸肉沙拉, 全麥麵包</Text>
                    <Text style={styles.calories}>450 kcal</Text>
                </View>
                <View style={styles.mealCard}>
                    <Text style={styles.mealTitle}>晚餐</Text>
                    <Text style={styles.mealContent}>煎鮭魚, 糙米飯, 花椰菜</Text>
                    <Text style={styles.calories}>550 kcal</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        padding: 20,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    content: {
        padding: 15,
    },
    mealCard: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    mealTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
        color: '#444',
    },
    mealContent: {
        fontSize: 16,
        color: '#666',
        marginBottom: 5,
    },
    calories: {
        fontSize: 14,
        color: '#888',
        textAlign: 'right',
    },
});

export default DiaryScreen;
