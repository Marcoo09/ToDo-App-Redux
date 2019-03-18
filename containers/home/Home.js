import React, { Component } from "react";
import {
  StatusBar,
  TouchableOpacity,
  Text,
  View,
  FlatList
} from "react-native";
import { Colors } from "../../colors/Colors";
import { Item } from "../../components/item";
import { Button } from "../../components/buttonCustom";
import { styles } from "./styles";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        {
          id: 1,
          title: "Description",
          description: "Second Description",
          completed: false
        },
        {
          id: 2,
          title: "Description",
          description: "Second Description",
          completed: false
        },
        {
          id: 3,
          title: "Description",
          description: "Second Description",
          completed: false
        },
        {
          id: 4,
          title: "Description",
          description: "Second Description",
          completed: true
        },
        {
          id: 5,
          title: "Description",
          description: "Second Description",
          completed: false
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
          data={this.state.todo}
          renderItem={item => <Item {...item.item} key={item.index} />}
        />

        {this.state.todo.length > 0 ? (
          <Button
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
