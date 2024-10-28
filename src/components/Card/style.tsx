import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    marginStart: 16,
    paddingStart: 20,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    flex: 1,
  },
  contentContainer: {
    width: '62%',
    marginVertical: 20,
  },
  imgContainer: {
    width: '35%',
    padding: 16,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff5f5',
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  img: {
    height: 105,
    width: 98,
    // resizeMode: 'contain',
    // flex: 1,
    borderRadius: 20,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  description: {
    fontSize: 14,
    color: '#000000',
  },
  buyContainer: {
    marginTop: 20,
  },
  aligntContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addToCart: {
    backgroundColor: '#ef8189',
    height: 40,
    padding: 10,
    borderRadius: 6,
  },
  btnTxt: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  price: {
    color: 'gray',
    fontWeight: '600',
  },
  addBTn: {
    backgroundColor: '#ef8189',
    height: 20,
    width: 20,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterTxt: {
    fontSize: 14,
    color: '#000000',
    fontWeight: 'bold',
  },
  remBtn: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#000000',
  },
});
