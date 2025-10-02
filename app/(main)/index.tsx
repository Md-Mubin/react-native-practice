import { AddTask, AllTasks, CommonHeader } from '@/components'
import React, { useState } from 'react'
import { View } from 'react-native'

export default function HomePage() {

    const [allTasks, setAllTasks] = useState([])

    return (
        <View >
            <AddTask setAllTasks={setAllTasks} />
            <AllTasks allTasks={allTasks} />
        </View>
    )
}