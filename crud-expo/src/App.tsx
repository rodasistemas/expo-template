import React, { BaseSyntheticEvent, FC, PropsWithChildren, ReactElement, useState } from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native'
import Button from "./components/Button"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#c0c0c0',
        borderRadius: 4,
        padding: 4,
        fontSize: 15
    }
  });

const App: FC<PropsWithChildren<ReactElement>> = (props) => {
  const { children } = props
  
  const [valor, setValor] = useState('React')
  const handleChange = (e: BaseSyntheticEvent) => {
    console.log({ styles })
    setValor(e.target.value)
  }
  return (
    <View style={styles.container}>
      <TextInput
        selectTextOnFocus
        style={styles.input}
        value={valor}
        key="re"
        onChange={(e) => handleChange(e)}
      />
      <Button onPress={()=>{ alert('Click')}} >Teste</Button>
      {children}
    </View>
  )
}

export default App
