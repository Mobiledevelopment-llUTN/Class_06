import React, {useState, useEffect, useContext} from 'react';
import {View, Text,Image , Pressable, TextInput, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from '/Users/sebastianmataortega/Desktop/reactProjects/class_06/src/context/AuthContext';
import COLORS from '/Users/sebastianmataortega/Desktop/reactProjects/class_06/src/constants/colors.js';
import Button from '/Users/sebastianmataortega/Desktop/reactProjects/class_06/src/components/Button.js';

const LoginUser = () => {
  const{login} = useContext(AuthContext);
  const [estado, setEstado] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const autenticar = async () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setEstado('User is signed in!');
        console.log(estado);
        setEmail('');
        setPassword('');

      })
      .catch(error => {
        if (error.code === 'auth/invalid-credential') {
          console.log(
            'The supplied auth credential is incorrect, malformed or has expired!',
          );
          setEstado(
            'The supplied auth credential is incorrect, malformed or has expired!',
          );
        }
      });
  };

  return (
    <View>
      <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Email address</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your email address'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            style={{
                                width: "100%"
                            }}
                            value={email}
                            onChangeText={(text) => setEmail(text)}

                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Password</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your password'
                            placeholderTextColor={COLORS.black}
                            style={{
                                width: "100%"
                            }}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    marginVertical: 6
                }}>
                    <Text>Remenber Me</Text>
                </View>

                <Button
                    title="Login"
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                    onPress={() => {login (), autenticar}}
                />
    </View>
  );
};

export default LoginUser;
