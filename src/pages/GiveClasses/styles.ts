import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257E5',
    justifyContent: 'center',
    padding: 40,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },

  description: {
    fontFamily: 'Poppins_400Regular',
    color: '#d4c2ff',
    marginTop: 24,
    fontSize: 16,
    lineHeight: 26,
    maxWidth: 240,
  },

  button: {
    marginVertical: 40,
    height: 58,
    backgroundColor: '#04d361',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 16,
  },
});

export default styles;
