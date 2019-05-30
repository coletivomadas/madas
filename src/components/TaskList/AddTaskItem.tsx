import React from 'react';
import { Button, Icon, Input, ListItem } from 'native-base';
import styles from './styles';

interface IProps {
  onChangeText: (text: string) => void;
  onSubmitEditing: () => void;
  placeholder: string;
  value: string;
}

const AddTaskItem = (props: IProps) => {
  const [isFocused, useSetFocus] = React.useState(false);
  const { placeholder, value, onChangeText, onSubmitEditing } = props;
  return (
    <ListItem>
      <Button transparent>
        <Icon
          active
          name="add"
          style={[styles.addTaskItemIcon, !isFocused ? styles.addItemInactiveIcon : styles.addItemActiveIcon]}
        />
      </Button>
      <Input
        onBlur={() => useSetFocus(false)}
        onFocus={() => !isFocused && useSetFocus(true)}
        placeholder={!isFocused ? placeholder : ''}
        value={value}
        onSubmitEditing={onSubmitEditing}
        onChangeText={onChangeText}
      />
    </ListItem>
  );
};

export default AddTaskItem;
