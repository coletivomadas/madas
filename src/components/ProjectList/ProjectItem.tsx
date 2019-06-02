import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Icon, Text } from 'native-base';
import Projects from '../../stores/Project';

interface IProps {
  id: string;
  title: string;
  tasksAmount: number;
  isArchived: boolean;
}

const ProjectItem = (props: IProps) => {
  const { id, title, tasksAmount, isArchived } = props;

  const _renderTaskAmount = (amount: number) => {
    return amount === 1 ? `${amount} tarefa` : `${amount} tarefas`;
  };

  return (
    <Projects.Consumer>
      {context =>
        context && (
          <TouchableOpacity
            style={styles.container}
            onPress={() => {
              /* navigate */
            }}
          >
            <View style={!isArchived ? styles.containerLeftBorder : styles.containerInactiveLeftBorder} />
            <View style={styles.contentContainer}>
              <View style={styles.iconContainer}>
                <Icon
                  name={!isArchived ? (context.featuredCollectionId === id ? 'star' : 'star-outline') : 'archive'}
                  style={!isArchived ? styles.featureIcon : styles.featureInactiveIcon}
                  onPress={() => {
                    if (!isArchived) {
                      context.onFeature(context.featuredCollectionId === id ? null : id);
                    }
                  }}
                />
              </View>
              <View style={styles.innerContentContainer}>
                <View style={styles.contentTitleContainer}>
                  <Text
                    ellipsizeMode="tail"
                    numberOfLines={2}
                    style={!isArchived ? styles.contentTitle : styles.contentInactiveTitle}
                  >
                    {title}
                  </Text>
                </View>
                <Text numberOfLines={1} style={styles.contentSubtitle}>
                  {_renderTaskAmount(tasksAmount)}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )
      }
    </Projects.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 25,
    width: 175,
    height: 120,
    flexDirection: 'row',
    borderColor: '#cccccc',
    borderRadius: 2,
    borderWidth: StyleSheet.hairlineWidth,
  },
  containerLeftBorder: {
    backgroundColor: '#CFBAF8',
    width: 5,
  },
  containerInactiveLeftBorder: {
    backgroundColor: '#C3C3C3',
    width: 5,
  },
  contentContainer: {
    flex: 1,
  },
  innerContentContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 5,
  },
  contentTitleContainer: {
    height: 40,
  },
  contentTitle: {
    fontWeight: '400',
  },
  contentInactiveTitle: {
    fontWeight: '400',
    color: '#C3C3C3',
  },
  contentSubtitle: {
    fontSize: 12,
    color: '#C3C3C3',
  },
  iconContainer: {
    alignItems: 'flex-end',
    marginTop: 5,
    marginRight: 10,
  },
  featureIcon: {
    color: '#f8b46e',
    fontSize: 26,
  },
  featureInactiveIcon: {
    color: '#C3C3C3',
    fontSize: 26,
  },
});

export default ProjectItem;
