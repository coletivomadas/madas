import React from 'react';
import { CheckBox, ListItem, Text } from 'native-base';
import styles from './styles';

const DONE_TASK_COLOR = '#CBD0FF';
const OPEN_TASK_COLOR = '#A1A1A1';

export interface TaskItemProps {
  id: string;
  title: string;
  isDone?: boolean;
  isDeleted: boolean;
}

export interface TaskItemComponentProps extends TaskItemProps {
  onFinish: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem = (props: TaskItemComponentProps) => {
  const [isDone, useStatus] = React.useState(props.isDone);
  return (
    <ListItem noBorder onPress={() => useStatus(!isDone)} style={styles.taskItem}>
      <CheckBox
        color={isDone ? DONE_TASK_COLOR : OPEN_TASK_COLOR}
        checked={isDone}
        onPress={() => {
          useStatus(!isDone);
          props.onFinish(props.id);
        }}
        onLongPress={() => props.onDelete(props.id)}
      />
      <Text
        numberOfLines={3}
        ellipsizeMode="tail"
        style={[isDone ? styles.taskItemFinishedText : styles.taskItemToBeFinishedText, styles.taskItemText]}
      >
        {props.title}
      </Text>
    </ListItem>
  );
};

export default TaskItem;
