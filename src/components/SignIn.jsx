import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import theme from '../theme';
import Text from './Text';

import * as yup from 'yup';


const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.repoBgColor,
    },
    input: {
        height: 50,
        fontSize: theme.fontSizes.subheading,
        margin: 12,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
      },
    button: {
        textAlign: 'center',
        backgroundColor: theme.colors.buttonBgColor,
        fontWeight: theme.fontWeights.bold,
        fontSize: theme.fontSizes.subheading,
        borderRadius: 10,
        height: 45,
        margin: 12,
        padding: 10,
    }
  });

const initialValues = {
  username: '',
  password: '',
};


const SignInForm = ({onSubmit}) => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });
    return (
        <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Username"
            value={formik.values.mass}
            onChangeText={formik.handleChange('username')}
        />

        {formik.touched.username && formik.errors.username && (
            <Text style={{ color: 'red' }}>{formik.errors.username}</Text>
        )}

        <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={formik.values.height}
            onChangeText={formik.handleChange('password')}
        />

        {formik.touched.password && formik.errors.password && (
            <Text style={{ color: 'red' }}>{formik.errors.password}</Text>
        )}

        <Pressable onPress={formik.handleSubmit}>
            <Text style={styles.button}>Sign In</Text>
        </Pressable>
        </View>
        )
};
const SignIn = () => {
    const onSubmit = (values) => {
        console.log(values);
      };

    return <SignInForm onSubmit={onSubmit}/>;
};

export default SignIn;