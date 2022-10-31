import React, { Component } from "react";
import {auth, db} from "../firebase/config";
import { View,Text,TextInput, TouchableOpacity, StyleSheet } from "react-native";

class Register extends Component {
    constructor(){
        super()
        this.state = {
            email:"",
            password:"",
            userName:"",
            bio:"",
            errors:""
            
        }
    }
    componentDidMount(){ 
        auth.onAuthStateChanged(
        user => {
            if (user){
                this.props.navigation.navigate("HomeMenu")
            }
        })
    }

    registerUser(email, pass, userName, bio){
        //Registrar en firebase y si el reigstro sale bien redireccionar a Home//
        auth.createUserWithEmailAndPassword(email, pass)
            .then( res => {
                
                db.collection("users").add({
                    owner: email,
                    userName: userName,
                    bio: bio,
                    createdAt: Date.now()
                })
                .then(() => {
                    this.setState({
                        email:"",
                        password:"",
                        userName:"",
                        bio:"",
                        errors:""                        
                    })

                    this.props.navigation.navigate("HomeMenu")
                })
                .catch(error => console.log(error))    
                
            })
            .catch(error => console.log(error))
    }



    render(){
        return(
            <View> 
                <Text>¡Registrate!</Text>
                <View>
                    <TextInput  
                        placeholder="Email"
                        keyboardType="email-address"
                        onChangeText={ text => this.setState({email:text}) }
                        value={this.state.email}
                    />
                    <TextInput  
                        placeholder="Password"
                        keyboardType="default"
                        onChangeText={ text => this.setState({password:text}) }
                        value={this.state.pass}
                    /> 
                    <TextInput  
                        placeholder="User Name"
                        keyboardType="default"
                        onChangeText={ text => this.setState({userName:text}) }
                        value={this.state.userName}
                    />
                    <TextInput  
                        placeholder="Mini Bio"
                        keyboardType="default"
                        onChangeText={ text => this.setState({bio:text}) }
                        value={this.state.bio}
                    />   
                    <TouchableOpacity onPress={()=>this.registerUser(this.state.email, this.state.pass, this.state.userName, this.state.bio)}>
                        <Text>Registrarme</Text>
                    </TouchableOpacity>
                    <Text onPress={ () => this.props.navigation.navigate("Login")} >Ir hacia Login</Text>
                </View>
            </View>
        )
    }
    
}


export default Register;