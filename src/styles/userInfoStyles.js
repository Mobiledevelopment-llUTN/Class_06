import { StyleSheet } from 'react-native';

const UserInfoStyles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    color: '#444',
  },
  idText: {
    fontWeight: 'bold',
  },
});

export default UserInfoStyles;