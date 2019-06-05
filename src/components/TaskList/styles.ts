import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  addItemContainer: {
    height: 68,
  },
  addItemSubContainer: {
    paddingBottom: 10,
    paddingTop: 10,
    marginLeft: 20,
  },
  addItemIcon: {
    fontSize: 28,
  },
  addItemInactiveIcon: {
    color: '#969699',
  },
  addItemActiveIcon: {
    color: '#000000',
  },
  addItemInput: {
    marginLeft: 20,
  },
  taskItem: {
    marginLeft: 20,
    minHeight: 68,
  },
  taskItemLeftBorder: {
    backgroundColor: '#CFBAF8',
    width: 5,
  },
  taskItemInactiveLeftBorder: {
    backgroundColor: '#FFFFFF',
    width: 5,
  },
  taskItemText: {
    marginHorizontal: 20,
    paddingHorizontal: 0,
  },
  taskItemToBeFinishedText: {
    color: '#000000',
  },
  taskItemFinishedText: {
    color: '#B0B3BF',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
});
