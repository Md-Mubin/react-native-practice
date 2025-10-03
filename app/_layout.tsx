import { store } from '@/store'
import { Stack } from 'expo-router'
import { View } from 'react-native'
import { Provider } from 'react-redux'

export default function RootLayout() {
    return (
        <Provider store={store} >
            <View style={{ flex: 1 }}>
                <Stack
                    screenOptions={{
                        headerShown: false,
                    }}
                    initialRouteName="(main)"
                />
            </View>
        </Provider>
    )
}