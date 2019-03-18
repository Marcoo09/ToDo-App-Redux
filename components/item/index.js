import React from "react";
import { styles } from "./styles";
import { Colors } from "../../colors/Colors";
import { TouchableOpacity, Text, View } from "react-native";
import { CheckBox } from "../checkbox";

export const Item = props => (
  <TouchableOpacity
    style={{ backgroundColor: Colors.white }}
    onPress={props._onPress}
  >
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.primaryText}>{props["title"]}</Text>
        <Text style={styles.secondaryText}>{props["description"]}</Text>
      </View>
      <CheckBox checked={props["completed"]} click={props.checkboxClick} />
    </View>
  </TouchableOpacity>
);
