import React from 'react';
import { Button, Icon, Input, ListItem } from 'native-base';

interface IProps {
  onChangeText: (text: string) => void;
  onSubmitEditing: () => void;
  placeholder: string;
  value: string;
}

const AddTaskItem = (props: IProps) => {
  const { placeholder, value, onChangeText, onSubmitEditing } = props;
  return (
    <ListItem>
      <Button transparent>
        <Icon active name="add" />
      </Button>
      <Input placeholder={placeholder} value={value} onSubmitEditing={onSubmitEditing} onChangeText={onChangeText} />
    </ListItem>
  );
};

export default AddTaskItem;
