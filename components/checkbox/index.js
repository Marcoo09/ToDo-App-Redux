import React from "react";
import { styles } from "./styles";
import { TouchableOpacity, Image, View } from "react-native";
import checkboxActive from "../../resources/images/iconCheckboxActive.png";
import checkboxinactive from "../../resources/images/iconCheckboxInactive.png";

export const CheckBox = ({ checked, checkboxClick }) => (
  <View style={styles.checkBoxContainer}>
    <TouchableOpacity onPress={checkboxClick}>
      {checked ? (
        <Image source={checkboxActive} />
      ) : (
        <Image source={checkboxinactive} />
      )}
    </TouchableOpacity>
  </View>
);
