import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { SearchBar } from 'react-native-elements';
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableWithoutFeedback, TextInput, ScrollView,
         TouchableOpacity, Image} from 'react-native';

// import styles from './app/styles'
// import {WelcomeScreen} from './app/Screens/WelcomeScreen'

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
 
const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Discover" component={DiscoverScreen} />
      <Tab.Screen name="Messaging" component={MessagingScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />


    </Tab.Navigator>
  );
};

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <Text style = {styles.header}>Club Hack!</Text>
    <Button title = "Student" onPress = {() => navigation.navigate('SignupStudent')}></Button>
    <Button title = "Club Member" onPress = {() => navigation.navigate('SignupClubMember')}></Button>
    <Text style = {styles.underline}>OR</Text>
    <Button title = "Already a user?" onPress = {() => navigation.navigate('Login')}></Button>
    </View>    
  );
};

const LoginScreen = ({ navigation, route }) => {
  return (    
    <View style={styles.container}>
    <Text style = {styles.header}>Login!</Text>
    <TextInput style = {styles.input}>Email</TextInput>
    <TextInput style = {styles.input}>Password</TextInput>
    <Button title = "Login" onPress = {() => navigation.navigate('Home')}></Button>
    <Button title = "Forgot Password?" onPress = {() => navigation.navigate('ForgotPassword')}></Button>
    </View>  
    );
};

const SignupStudentScreen = ({ navigation, route }) => {
  return (    
    <View style={styles.container}>
    <Text style = {styles.header}>Sign up as a student!</Text>
    <Text>Name</Text>
    <TextInput style = {styles.input}>Name</TextInput>
    <Text>Email</Text>
    <TextInput style = {styles.input}>Email</TextInput>
    <Text>Interest</Text>
    <TextInput style = {styles.input}>Interest</TextInput>
    <Text>Fun Fact</Text>
    <TextInput style = {styles.input}>Fun Fact</TextInput>
    <Text>Social Preference</Text>
    <TextInput style = {styles.input}>Social Preference</TextInput>
    <Button title = "Submit" onPress = {() => navigation.navigate('Home')}></Button>
    </View>  
    );
};

const SignupClubMemberScreen = ({ navigation, route }) => {
  return (    
    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style = {styles.header}>Sign up as a student!</Text>
    <Text>Name</Text>
    <TextInput style = {styles.input}>Name</TextInput>
    <Text>Email</Text>
    <TextInput style = {styles.input}>Email</TextInput>
    <Text>Interest</Text>
    <TextInput style = {styles.input}>Club</TextInput>
    <Text>Club</Text>
    <TextInput style = {styles.input}>Interest</TextInput>
    <Text>Fun Fact</Text>
    <TextInput style = {styles.input}>Fun Fact</TextInput>
    <Text>Social Preference</Text>
    <TextInput style = {styles.input}>Social Preference</TextInput>
    <Button title = "Submit" onPress = {() => navigation.navigate('Home')}></Button>
    </ScrollView>  
    );
};

const ForgotPasswordScreen = ({ navigation, route }) => {
  return (    
    <View style={styles.container}>
    <Text style = {styles.header}>Forgot Password</Text>
    <TextInput style = {styles.input}>Email</TextInput>
    </View>  
    );
};

const HomeScreen = ({ navigation, route }) => {
  return (    
    <ScrollView contentContainerStyle = {{flexGrow: 1, alignItems: 'center'}}>
    <Text style = {styles.header}>Your Matched Clubs</Text>
    <TouchableOpacity style={styles.club} onPress = {() => navigation.navigate('Club')}>
      <Text>Cornell Finance Club</Text>
      <Text>Cornell Finance Club is a bla bla bla</Text> 
    </TouchableOpacity>
    <TouchableOpacity style={styles.club} onPress = {() => navigation.navigate('Club')}>
      <Text>Cornell Finance Club</Text>
      <Text>Cornell Finance Club is a bla bla bla</Text> 
    </TouchableOpacity>
    <TouchableOpacity style={styles.club} onPress = {() => navigation.navigate('Club')}>
      <Text>Cornell Finance Club</Text>
      <Text>Cornell Finance Club is a bla bla bla</Text> 
    </TouchableOpacity>
    <TouchableOpacity style={styles.club} onPress = {() => navigation.navigate('Club')}>
      <Text>Cornell Finance Club</Text>
      <Text>Cornell Finance Club is a bla bla bla</Text> 
    </TouchableOpacity>
    <TouchableOpacity style={styles.club} onPress = {() => navigation.navigate('Club')}>
      <Text>Cornell Finance Club</Text>
      <Text>Cornell Finance Club is a bla bla bla</Text> 
    </TouchableOpacity>
    <TouchableOpacity style={styles.club} onPress = {() => navigation.navigate('Club')}>
      <Text>Cornell Finance Club</Text>
      <Text>Cornell Finance Club is a bla bla bla</Text> 
    </TouchableOpacity>
    </ScrollView>  
    );
};

const DiscoverScreen = ({ navigation, route }) => {
  return (  
    <ScrollView contentContainerStyle = {{flexGrow: 1, alignItems: 'center'}}>
    {/* Need to change search bar */}
    <SearchBar     
    lightTheme
    containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5}}
    placeholderTextColor={'#g5g5g5'}
    placeholder={'Type Here...'}/>
    <TouchableOpacity style={styles.club} onPress = {() => navigation.navigate('Club')}>
      <Text>Alpha Fund</Text>
      <Text>Alpha Fund is a bla bla bla</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.club} onPress = {() => navigation.navigate('Club')}>
      <Text>Cornell Finance Club</Text>
      <Text>Cornell Finance Club is a bla bla bla</Text> 
    </TouchableOpacity>
    <TouchableOpacity style={styles.club} onPress = {() => navigation.navigate('Club')}>
      <Text>Cornell Finance Club</Text>
      <Text>Cornell Finance Club is a bla bla bla</Text> 
    </TouchableOpacity>
    <TouchableOpacity style={styles.club} onPress = {() => navigation.navigate('Club')}>
      <Text>Cornell Finance Club</Text>
      <Text>Cornell Finance Club is a bla bla bla</Text> 
    </TouchableOpacity>
    <TouchableOpacity style={styles.club} onPress = {() => navigation.navigate('Club')}>
      <Text>Cornell Finance Club</Text>
      <Text>Cornell Finance Club is a bla bla bla</Text> 
    </TouchableOpacity>
    </ScrollView>
  );
};

const MessagingScreen = ({ navigation, route }) => {
  return (    
    <ScrollView contentContainerStyle = {{flexGrow: 1, alignItems: 'center'}}>
    <Text style = {styles.header}>Messaging</Text>
    <TouchableOpacity style={styles.messages} onPress = {() => navigation.navigate('Chat')}>
      <Text style = {styles.messagePersonText}>Richard Cho</Text>
      <Text style = {styles.messageText}>Richard Cho is ugly</Text>
    </TouchableOpacity>  
    <TouchableOpacity style={styles.messages} onPress = {() => navigation.navigate('Chat')}>
      <Text style = {styles.messagePersonText}>Tyler Johnson</Text>
      <Text style = {styles.messageText}>Want to go hiking on the 13th?</Text>
    </TouchableOpacity>    
    <TouchableOpacity style={styles.messages} onPress = {() => navigation.navigate('Chat')}>
      <Text style = {styles.messagePersonText}>David Chung</Text>
      <Text style = {styles.messageText}>Let's go grab some coffee next week!</Text>
    </TouchableOpacity>    
    <TouchableOpacity style={styles.messages} onPress = {() => navigation.navigate('Chat')}>
      <Text style = {styles.messagePersonText}>Sungwon Son</Text>
      <Text style = {styles.messageText}>skrt</Text>
    </TouchableOpacity>    
    <TouchableOpacity style={styles.messages} onPress = {() => navigation.navigate('Chat')}>
      <Text style = {styles.messagePersonText}>Alpha Fund</Text>
      <Text style = {styles.messageText}>Alpha Fund is having a fundraiser next week</Text>
    </TouchableOpacity>    
    <TouchableOpacity style={styles.messages} onPress = {() => navigation.navigate('Chat')}>
      <Text style = {styles.messagePersonText}>Cornell Finance Club</Text>
      <Text style = {styles.messageText}>Cornell finance club event today!</Text>
    </TouchableOpacity>    
    <TouchableOpacity style={styles.messages} onPress = {() => navigation.navigate('Chat')}>
      <Text style = {styles.messagePersonText}>Alpha Fund</Text>
      <Text style = {styles.messageText}>Alpha Fund is a bla bla bla</Text>
    </TouchableOpacity>    
    <TouchableOpacity style={styles.messages} onPress = {() => navigation.navigate('Chat')}>
      <Text style = {styles.messagePersonText}>Alpha Fund</Text>
      <Text style = {styles.messageText}>Alpha Fund is a bla bla bla</Text>
    </TouchableOpacity>    
    <TouchableOpacity style={styles.messages} onPress = {() => navigation.navigate('Chat')}>
      <Text style = {styles.messagePersonText}>Alpha Fund</Text>
      <Text style = {styles.messageText}>Alpha Fund is a bla bla bla</Text>
    </TouchableOpacity>      
    </ScrollView>  
    );
};

const ChatScreen = ({ navigation, route }) => {
  return (    
    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style = {styles.header}>Chat</Text>
    <Button title = "Person youre messaging" onPress = {() => navigation.navigate('Person')}/>
    <Button title = "More Messages" onPress = {() => navigation.navigate('More Messages')}/>
    </ScrollView>  
    );
};

const ScheduleScreen = ({ navigation, route }) => {
  return (    
    <View style={styles.container}>
    <Text style = {styles.header}>Schedule</Text>
    </View>  
    );
};

const ProfileScreen = ({ navigation, route }) => {
  return (    
    <View style={styles.container}>
    <Text style = {styles.header}>Profile</Text>
    <Image style = {{width: 150, height: 150}}source={require('./app/assets/testUserProfile1.jpg')}/>
    <Text style = {styles.smallHeader}>Name</Text>
    <Text style = {styles.normalText}>Tyler Johnson</Text>
    <Text style = {styles.smallHeader}>email</Text>
    <Text style = {styles.normalText}>tjohnson@gmail.com</Text>
    <Text style = {styles.smallHeader}>School</Text>
    <Text style = {styles.normalText}>University of California, Irvine</Text>
    <Text style = {styles.smallHeader}>Clubs</Text>
    <Button title = "Engineering Club" onPress = {() => navigation.navigate('Club')}/>
    <Button title = "Settings" onPress = {() => navigation.navigate('Settings')}/>
    </View>  
    );
};

const SettingsScreen = ({ navigation, route }) => {
  return (    
    <View style={styles.container}>
    <Text style = {styles.header}>Settings</Text>
    <Button title = "Club Creation" onPress = {() => navigation.navigate('ClubCreation')}/>
    <Button title = "Log Out" onPress = {() => navigation.navigate('Welcome')}/>
    </View>  
    );
};

const ClubScreen = ({ navigation, route }) => {
  return (    
    <ScrollView contentContainerStyle = {{flexGrow: 1, alignItems: 'center'}}>
    <Text style = {styles.header}>Alpha Fund</Text>
    <Text style = {styles.smallHeader}>Catered Interests</Text>
    <Text style = {styles.normalText}>Interests</Text>
    <Text style = {styles.smallHeader}>Website</Text>
    <Text style = {styles.normalText}>alphafund.com</Text>
    <Text style = {styles.smallHeader}>Overview</Text>
    <Text style = {styles.normalText}>sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf
    sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf
    sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf </Text>
    <Text style = {styles.smallHeader}>Culture</Text>
    <Text style = {styles.normalText}>sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf
    sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf
    sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf </Text>
    <Text style = {styles.smallHeader}>Similar Clubs</Text>
    <Button title = "Similar Club1" onPress = {() => navigation.navigate('Club')}/>
    <Button title = "Members" onPress = {() => navigation.navigate('Members')}/>
    <Button title = "Chat" onPress = {() => navigation.navigate('Chat')}/>
    </ScrollView>  
    );
};

const ClubCreationScreen = ({ navigation, route }) => {
  return (    
    <View style={styles.container}>
    <Text style = {styles.header}>Club Creation</Text>
    </View>  
    );
};

const PersonScreen = ({ navigation, route }) => {
  return (    
    <View style={styles.container}>
    <Text style = {styles.header}>David Chung</Text>
    <Text>Clubs David is involved in</Text>
    <Button title = "Python squad lmao" onPress = {() => navigation.navigate('Club')}/>
    <Button title = "Chat" onPress = {() => navigation.navigate('Chat')}/>
    </View>  
    );
};

const MembersScreen = ({ navigation, route }) => {
  return (    
    <View style={styles.container}>
    <Text style = {styles.header}>Members</Text>
    <Button title = "Member1" onPress = {() => navigation.navigate('Person')}/>
    <Button title = "Member2" onPress = {() => navigation.navigate('Person')}/>
    </View>  
    );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{title: "Welcome"}}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
        />
        <Stack.Screen
          name="SignupStudent"
          component={SignupStudentScreen}
        />
        <Stack.Screen
          name="SignupClubMember"
          component={SignupClubMemberScreen}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen
          name="Home"
          component={HomeTabs}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
        />
        <Stack.Screen
          name="Club"
          component={ClubScreen}
        />
        <Stack.Screen
          name="ClubCreation"
          component={ClubCreationScreen}
        />
        <Stack.Screen
          name="Person"
          component={PersonScreen}
        />
        <Stack.Screen
          name="Members"
          component={MembersScreen}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  club: {
    backgroundColor: "pink", 
    width: '80%', 
    height: '25%', 
    marginTop: 20,
    justifyContent: 'center', 
    borderWidth: 5, 
    borderRadius: 30
  },
  messages: {
    width: '100%',
    height: '15%',
    justifyContent: 'center', 
    borderTopWidth: 2,
  },
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
  input: {
    margin: 15,
    height: 40,
    width: "80%",
    borderColor: '#7a42f4',
    borderWidth: 1
  }
});