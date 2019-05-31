import React from 'react';
import { FlatList } from 'react-native';
import { Card } from 'native-base';
import TaskItem, { TaskItemProps } from './TaskItem';

interface IProps {
  data: TaskItemProps[];
  onDelete: (id: string) => void;
  onFinish: (id: string) => void;
}

const TaskList = (props: IProps) => {
  return (
    <Card>
      <FlatList
        keyboardShouldPersistTaps="always"
        data={props.data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskItem
            id={item.id}
            title={item.title}
            isDone={item.isDone}
            isDeleted={item.isDeleted}
            onDelete={props.onDelete}
            onFinish={props.onFinish}
          />
        )}
      />
    </Card>
  );
};

export { TaskItemProps };
export default TaskList;
