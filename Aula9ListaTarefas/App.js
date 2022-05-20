import { MaterialIcons } from '@expo/vector-icons'
import * as SQLite from 'expo-sqlite'
import React, { useEffect, useState } from 'react'
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

const db = SQLite.openDatabase('db_tasks.db')

const App = () => {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, task VARCHAR(20))`,
        []
      )
    })
  }

  const deleteTask = id => {
    db.transaction(tx => {
      tx.executeSql(
        `DELETE FROM tasks WHERE id = ?`,
        [id],
        (sqlTxn, res) => {
          setTasks('')
          getTasks()
        },
      )
    })
  }

  const addTask = () => {
    if (!task) {
      alert('Por favor, Informe uma tarefa')
      return
    }

    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO tasks (task) VALUES (?)`,
        [task],
        (sqlTxn, res) => {
          getTasks()
          setTask('')
        }
      )
    })
  }

  const getTasks = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM tasks`,
        [],
        (sqlTxn, res) => {
          let len = res.rows.length

          if (len > 0) {
            let results = []
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i)
              results.push({ id: item.id, task: item.task })
            }

            setTasks(results)
          }
        },
      )
    })
  }

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          borderColor: '#000',
          padding: 8,
          margin: 8
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              marginRight: 9,
              fontSize: 16,
            }}
          >
            {item.id}.
          </Text>
          <Text style={{ fontSize: 16}}>
            {item.task}
          </Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              deleteTask(item.id)
            }}
          >
            <MaterialIcons name='delete' size={24}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  useEffect(() => {
    async function fetchTasks() {
      await createTables()
      await getTasks()
    }
    fetchTasks()
  }, [])

  return (
    <View style={{ paddingTop: 25 }}>
      <StatusBar backgroundColor='white' />
      <Text style={styles.title}>Tarefas</Text>

      <View
        style={{
          flexDirection: 'row',
          borderWidth: 1,
          margin: 8,
        }}
      >
        <TextInput
          placeholder='Insira uma tarefa'
          value={task}
          onChangeText={setTask}
          style={{ padding: 8, fontSize: 16 }}
        />

        <View
          style={{
            alignItems: 'flex-end',
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 'auto',
            marginRight: 10,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={addTask}
          >
            <MaterialIcons
              name='add'
              size={30}
            />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList data={tasks} renderItem={renderItem} key={t => t.id} />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 32,
    padding: 8,
    borderBottomWidth: 4,
    borderColor: '#000',
    margin: 16,
  },
})

export default App
