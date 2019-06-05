import React from 'react';
import { Modal } from 'react-native';
import { Content, Text, View } from 'native-base';
import firebase from 'react-native-firebase';
import AddTaskItem from '../../components/TaskList/AddTaskItem';
import TaskList, { TaskItemProps } from '../../components/TaskList';
import uuid from 'uuid/v4';
import { CollectionReference } from 'react-native-firebase/firestore';
import styles from './styles';
import Tasks from '../../stores/Tasks';

interface IState {
  data: TaskItemProps[];
  input: string;
}

/**
 * @todo ability to create a detailed task
 * @todo ability to edit a task
 * @todo ability to delete a task
 * @todo ability to show deleted tasks ordered by deletion date
 */
export default class TaskScreen extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.ref = firebase.firestore().collection('todos');
    this.unsubscribe = null;
  }

  ref: CollectionReference;
  unsubscribe: null | (() => void);

  state: IState = {
    data: [],
    input: '',
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this._onCollectionUpdate);
  }

  componentWillUnmount() {
    this.unsubscribe!();
  }

  _onCollectionUpdate = (querySnapshot: any) => {
    const data: TaskItemProps[] = [];
    querySnapshot.forEach((doc: any) => {
      const { title, isDone, isDeleted } = doc.data();

      if (!isDeleted) {
        data.push({
          title,
          isDone,
          isDeleted,
          id: doc.id,
        });
      }
    });

    this.setState({
      data,
    });
  };

  _onChangeText = (text: string) => {
    this.setState({
      input: text,
    });
  };

  _onDelete = (id: string) => {
    this.ref.doc(id).update({ isDeleted: true });
    this.setState({ data: this.state.data.filter(x => x.id !== id) });
  };

  _onFinish = (id: string) => {
    this.ref.doc(id).update({ isDone: true });
  };

  _onSubmitEditing = async () => {
    const id = uuid();
    const document = {
      id,
      title: this.state.input,
      isDeleted: false,
      isDone: false,
    };
    this.setState({
      input: '',
      data: [document, ...this.state.data],
    });
    this.ref.doc(id).set(document);
  };

  render() {
    const hasContent = this.state.data.length > 0;
    return (
      <Tasks.Provider value={{ onDelete: this._onDelete, onFinish: this._onFinish }}>
        <View style={styles.headerBackground} />
        <Content style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerContent}>Coletivo Madás</Text>
          </View>
          <AddTaskItem
            placeholder="Adicione uma nova tarefa..."
            value={this.state.input}
            onSubmitEditing={this._onSubmitEditing}
            onChangeText={this._onChangeText}
          />
          {hasContent && <TaskList data={this.state.data} />}
        </Content>
      </Tasks.Provider>
    );
  }
}
