import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Text, View } from 'native-base';
import ProjectItem from './ProjectItem';
import uuid from 'uuid/v4';

const data = [
  {
    id: uuid(),
    title: 'Planejamento 2018/2',
    tasksAmount: 3,
    isArchived: false,
  },
  {
    id: uuid(),
    title: 'Programação das PLPs',
    tasksAmount: 6,
    isArchived: true,
  },
  {
    id: uuid(),
    title: 'Bazar de Arrecação',
    tasksAmount: 1,
    isArchived: false,
  },
  {
    id: uuid(),
    title: 'Calourada 2020',
    tasksAmount: 3,
    isArchived: false,
  },
];

interface IProps {
  title: string;
  tasksAmount: number;
}

const ProjectList = (props: IProps) => {
  const { title, tasksAmount } = props;
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
        <Text>{tasksAmount}</Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ProjectItem id={item.id} title={item.title} tasksAmount={item.tasksAmount} isArchived={item.isArchived} />
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: 28,
  },
});

export default ProjectList;
