import React from 'react';
import {} from 'native-base';

const AddTaskItem = () => {
  return (
    <ListItem>
      <Button transparent>
        <Icon active name="add" />
      </Button>
      <Input
        placeholder="Adicione uma nova tarefa..."
        value={this.state.input}
        onSubmitEditing={() =>
          this.setState({
            data: [
              {
                id: (this.state.data.length + 1).toString(),
                title: this.state.input,
                isDeleted: false,
                isDone: false,
              },
              ...this.state.data,
            ],
            input: '',
          })
        }
        onChangeText={text => this.setState({ input: text })}
      />
    </ListItem>
  );
};
