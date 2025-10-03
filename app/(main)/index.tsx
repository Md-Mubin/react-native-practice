import { AddTask, AllTasks } from '@/components'
import { View } from 'react-native'

export default function HomePage() {

    return (
        <View style={{flex:1}}>
            <AddTask/>
            <AllTasks />
        </View>
    )
}