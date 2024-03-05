import React, {useState, useEffect} from 'react';
import {View, Text, Image , Pressable, TextInput, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import db from '@react-native-firebase/firestore';
import COLORS from '/Users/sebastianmataortega/Desktop/reactProjects/class_06/src/constants/colors.js';
import Button from '/Users/sebastianmataortega/Desktop/reactProjects/class_06/src/components/Button.js';

const RegisterUser = () => {
  const [estado, setEstado] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [job, setJob] = useState();
  const [name, setName] = useState();
  const registrar = async () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        // Register data into users collection
        const user = auth().currentUser;
        db().collection('users').doc(user.uid).set({
          iduser: user.uid,
          name: name,
          email: email,
          job: job,
        });

        // Print the user state
        console.log('User account created & signed in!');
        setEstado('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          setEstado('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          setEstado('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <View>
    <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Name</Text>

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
                            placeholder='Enter Your Name'
                            placeholderTextColor={COLORS.black}
                            keyboardType='text'
                            style={{
                                width: "100%"
                            }}
                            value={name}
                            onChangeText={(text) => setName(text)}
                        />
                    </View>
                </View>
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
                    }}>Job Title</Text>

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
                            placeholder='Enter your Current Job'
                            placeholderTextColor={COLORS.black}
                            keyboardType='text'
                            style={{
                                width: "100%"
                            }}
                            value={job}
                            onChangeText={(text) => setJob(text)}
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

                <Button
                    title="Sign Up"
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                    onPress={registrar}
                />
      <Text>{estado}</Text>
    </View>
  );
};

export default RegisterUser;