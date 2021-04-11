import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';

const TextStyles = StyleSheet.create({
  header: {
    fontWeight: "900",
    fontSize: 50
  },
  smallHeader: {
    fontWeight: "900",
    fontSize: 20
  },
  normalText: {
    fontSize: 20
  },
  messagePersonText: {
    fontWeight: "900",
    marginLeft: 10,
    marginBottom: 5
  },
  messageText: {
    marginLeft: 10
  },
  underline: {
    textDecorationLine: 'underline'
  }, 
  bold: {
      fontWeight: 'bold'
  },
})

const ContainerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  club: {
    backgroundColor: "pink", 
    width: '100%', 
    height: '75%', 
    marginTop: 20,
    justifyContent: 'center', 
    borderWidth: 5, 
    borderRadius: 30
  },
  messages: {
    width: '100%',
    height: '200%',
    justifyContent: 'center', 
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  input: {
    margin: 15,
    height: 40,
    width: "80%",
    borderColor: '#7a42f4',
    borderWidth: 1
  },
  flatList: {
    flexGrow: 1,
    width: Dimensions.get('window').width,
    },
  datePicker: {
    width: 200,
    marginTop: 20,
  }
});

export {TextStyles, ContainerStyles};