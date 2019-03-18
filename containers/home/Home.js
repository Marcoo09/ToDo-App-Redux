import React, { Component } from "react";
import {
  StatusBar,
  TouchableOpacity,
  Text,
  View,
  FlatList
} from "react-native";
import { Colors } from "../../colors/Colors";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Item } from "../../components/item/Item";
import { ButtonCustom } from "../../components/buttonCustom/ButtonCustom";
import { styles } from "./styles";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          "first-description": "Description",
          "second-description": "Second Description",
          status: false
        },
        {
          "first-description": "Description",
          "second-description": "Second Description",
          status: false
        },
        {
          "first-description": "Description",
          "second-description": "Second Description",
          status: false
        },
        {
          "first-description": "Description",
          "second-description": "Second Description",
          status: true
        },
        {
          "first-description": "Description",
          "second-description": "Second Description",
          status: false
        }
      ]
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerLeft: <View />,
    headerRight: (
      <View style={styles.headerRightContainer}>
        <TouchableOpacity>
          <Text style={styles.headerRightText}>+</Text>
        </TouchableOpacity>
      </View>
    )
  });

  render() {
    return (
      <View>
        <StatusBar backgroundColor={Colors.customBlue} />

        <FlatList
          data={this.state.data}
          renderItem={item => <Item {...item.item} key={item.index} />}
        />

        {this.state.data.length > 0 ? (
          <ButtonCustom
            text="CLEAR ALL DONE"
            styleButton={{
              alignItems: "center",
              width: 204,
              height: 48,
              marginTop: 16
            }}
          />
        ) : (
          <Text style={styles.primaryText}>
            No task to display, please add a task!
          </Text>
        )}
      </View>
    );
  }
}

const MainNavigator = createStackNavigator(
  {
    Home: Home
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.customBlue
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontWeight: "bold",
        alignSelf: "center",
        textAlign: "center",
        flex: 1
      }
    }
  }
);

export const AppNavigator = createAppContainer(MainNavigator);
