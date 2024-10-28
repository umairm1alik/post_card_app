import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#ef8189',
    padding: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backBtn: {
    height: 30,
    width: 30,
  },
  alignItems: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  divider: {
    height: 30,
  },
  noProduct: {
    color: 'gray',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
