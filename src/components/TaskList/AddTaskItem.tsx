import React from 'react';
import { Button, Card, Icon, Input, ListItem } from 'native-base';
import styles from './styles';

interface IProps {
  onChangeText: (text: string) => void;
  onSubmitEditing: () => void;
  placeholder: string;
  value: string;
}

/**
 * Add new a Task component
 *
 * @todo Focus Input when pressing/focusing the Card itself;
 * @todo Animate the Icon to change its color when being focused;
 * @todo Animate the Text to fade out in bottom of container when submiting;
 * @todo Adjust elevation style when the component is focused
 */
const AddTaskItem = (props: IProps) => {
  const [isFocused, useSetFocus] = React.useState(false);
  const { placeholder, value, onChangeText, onSubmitEditing } = props;
  return (
    <Card style={styles.addItemContainer}>
      <ListItem style={styles.addItemSubContainer} onFocus={() => !isFocused && useSetFocus(true)}>
        <Button transparent onFocus={() => !isFocused && useSetFocus(true)}>
          <Icon
            active
            name="add"
            style={[styles.addItemIcon, !isFocused ? styles.addItemInactiveIcon : styles.addItemActiveIcon]}
          />
        </Button>
        <Input
          autoCapitalize="characters"
          onBlur={() => useSetFocus(false)}
          blurOnSubmit={false}
          onFocus={() => !isFocused && useSetFocus(true)}
          placeholder={!isFocused ? placeholder : ''}
          value={value}
          onSubmitEditing={onSubmitEditing}
          onChangeText={onChangeText}
        />
      </ListItem>
    </Card>
  );
};

export default AddTaskItem;
