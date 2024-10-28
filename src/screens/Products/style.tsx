import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#ef8189',
    padding: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  contentView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  inputCont: {
    backgroundColor: '#FFFFFF',
    width: '85%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    borderRadius: 6,
  },
  input: {
    width: '90%',
  },
  cartBtn: {
    height: 40,
    width: 40,
    borderRadius: 6,
    backgroundColor: '#fed4d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    height: 10,
  },
  noProduct: {
    color: 'gray',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  countView: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 2,
    right: -6,
    top: -6,
  },
  countTxt: {
    fontSize: 12,
    fontWeight: '700',
    color: '#000000',
  },
});
