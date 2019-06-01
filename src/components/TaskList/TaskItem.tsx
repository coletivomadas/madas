import React from 'react';
import { CheckBox, ListItem, Text } from 'native-base';
import styles from './styles';
import Tasks from '../../stores/Tasks';

const DONE_TASK_COLOR = '#CBD0FF';
const OPEN_TASK_COLOR = '#A1A1A1';

export interface TaskItemProps {
  id: string;
  title: string;
  isDone?: boolean;
  isDeleted: boolean;
}

const TaskItem = (props: TaskItemProps) => {
  const [isDone, useStatus] = React.useState(props.isDone);
  return (
    <Tasks.Consumer>
      {context =>
        context && (
          <ListItem noBorder onPress={() => useStatus(!isDone)} style={styles.taskItem}>
            <CheckBox
              color={isDone ? DONE_TASK_COLOR : OPEN_TASK_COLOR}
              checked={isDone}
              onPress={() => {
                useStatus(!isDone);
                context.onFinish(props.id);
              }}
              onLongPress={() => context.onDelete(props.id)}
            />
            <Text
              numberOfLines={3}
              ellipsizeMode="tail"
              style={[isDone ? styles.taskItemFinishedText : styles.taskItemToBeFinishedText, styles.taskItemText]}
            >
              {props.title}
            </Text>
          </ListItem>
        )
      }
    </Tasks.Consumer>
  );
};

export default TaskItem;
