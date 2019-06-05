import React from 'react';
import { Button, Content, Icon, Text } from 'native-base';
import { NavigationScreenComponent, NavigationScreenProps, NavigationStackScreenOptions } from 'react-navigation';
import ProjectList from '../../components/ProjectList';
import { Dimensions, StyleSheet, View } from 'react-native';
import Projects from '../../stores/Project';
import Tasks from '../../stores/Tasks';
import TaskList from '../../components/TaskList';

/**
 *
 * @param props
 *
 * @todo define onDelete and onFeature functions
 * @todo connect TaskList with Firebase
 * @todo connect ProjectList with Firebase
 * @todo ability to create a Project
 * @todo ability to edit a Project
 * @todo ability to delete a Project
 * @todo ability to archive a Project
 * @todo integrate react-navigation into TaskList
 * @todo integrate react-navigation into ProjectList
 * @todo no featured project selected screen
 * @todo select a project then show its tasks in the main screen
 */
const Home: NavigationScreenComponent<{}> = (props: {}) => {
  const [featuredProjectId, setFeaturedProject] = React.useState<string | null>(null);

  const _onFeature = (projectId: string | null) => {
    setFeaturedProject(projectId);
  };

  const context = {
    featuredCollectionId: featuredProjectId,
    onFeature: _onFeature,
  };

  return (
    <Content style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
      <Projects.Provider value={context}>
        <View style={styles.header}>
          <Text style={styles.headerContent}>Coletivo Madás</Text>
        </View>
        <ProjectList title="Coletivo Madás" tasksAmount={15} />
      </Projects.Provider>
      <Tasks.Provider value={{ onDelete: () => {}, onFinish: () => {} }}>
        <View style={styles.header}>
          <Text style={{ ...styles.headerContent, fontSize: 20 }}>Planejamento 2018</Text>
        </View>
        <TaskList
          data={[
            { id: '11', title: 'Preparar dinâmicas', isDone: false, isDeleted: false },
            { id: '12', title: 'Liberar orçamento', isDone: false, isDeleted: false },
            { id: '13', title: 'Comprar alimentos', isDone: false, isDeleted: false },
            { id: '14', title: 'Preparar apresentação', isDone: true, isDeleted: false },
            { id: '15', title: 'Atividade em comum', isDone: false, isDeleted: false },
            { id: '16', title: 'Atividade Feminista', isDone: false, isDeleted: false },
          ]}
        />
      </Tasks.Provider>
    </Content>
  );
};

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  headerBackground: {
    position: 'absolute',
    backgroundColor: '#CBD0FF',
    height: deviceHeight * 0.15 + 34 + 5,
    width: deviceWidth,
  },
  header: {
    height: deviceHeight * 0.15,
    justifyContent: 'center',
  },
  headerContent: {
    color: '#122930',
    fontSize: 28,
    fontWeight: '600',
  },
});

export default Home;
