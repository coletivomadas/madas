import React from 'react';
import { FlatList } from 'react-native';
import { Card } from 'native-base';
import TaskItem, { TaskItemProps } from './TaskItem';
import AddDetailedTaskItem from './AddDetailedTaskItem';

interface IProps {
  data: TaskItemProps[];
}

const TaskList = (props: IProps) => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      keyboardShouldPersistTaps="always"
      data={props.data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TaskItem id={item.id} title={item.title} isDone={item.isDone} isDeleted={item.isDeleted} />
      )}
    />
  );
};

export { AddDetailedTaskItem, TaskItemProps };
export default TaskList;
