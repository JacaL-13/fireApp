import { Button, View } from 'react-native'
import { db } from '../../firebaseconfig'
import { addDoc, collection } from 'firebase/firestore'

function List({ navigation }: any) {
	async function addItem() {
		const doc = await addDoc(collection(db, 'todos'), { text: 'Hello World!', done: false })
		console.log(doc, 'doc')
	}

	return (
		<View>
			<Button onPress={addItem} title="Add Item" />
		</View>
	)
}

export default List
