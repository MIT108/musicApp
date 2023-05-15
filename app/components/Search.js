import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { forwardRef, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import colors from "../config/colors";
import { FontAwesome, MaterialCommunityIcons } from "react-native-vector-icons";
import { ScrollView } from "react-native";
import { filters } from "../constants/SearchFilters";
import CustomModal from "./CustomModal";
import { TouchableOpacity } from "react-native";

const Search = forwardRef(({ placeholder, keyboardType }, ref) => {
  const [tags, setTag] = useState([]);
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);
  const [subContent, setSubContent] = useState([]);
  const [currentId, setCurrentId] = useState(null);
  const [onFilter, setOnFilter] = useState(false);

  const addTag = (content) => {
    setTag([
      ...tags,
      {
        filterId: currentId,
        name: content.name,
        categoryId: content.id,
      },
    ]);
    setVisible(false);
  };
  const deleteFilterItem = (id) => {
    setTag(tags.filter((item) => item.filterId !== id));
  };

  const showSubContent = (item) => {
    setCurrentId(item.id);
    setSubContent(item.categories);
    setVisible(true);
  };
  const FilterItem = ({ item }) => {
    const active = !!tags.find((id) => id.filterId === item.id);
    return (
      <TouchableOpacity
        onPress={() =>
          !active ? showSubContent(item) : deleteFilterItem(item.id)
        }
        style={[
          styles.tag,
          active ? { backgroundColor: colors.lightGray } : null,
        ]}
      >
        <Text
          style={[styles.tagText, active ? { color: colors.lightBlack } : null]}
        >
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <CustomModal visible={visible} setVisible={setVisible}>
        <ScrollView>
          {subContent.map((content) => (
            <TouchableOpacity
              onPress={() => addTag(content)}
              style={styles.subContent}
            >
              <Text style={styles.subContentText}>{content.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </CustomModal>
      <View style={[styles.inputContainer, onFilter ? styles.onFilter : null]}>
        <TouchableOpacity style={styles.icons}>
          <FontAwesome name="search" size={25} color={colors.black} />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          {tags.map((tag, index) => (
            <View key={index} style={styles.filterItemContainer}>
              <Text style={styles.filterItemText}>{tag.name}</Text>
              <Entypo
                name="cross"
                size={20}
                color={colors.lightBlack}
                onPress={() => deleteFilterItem(tag.filterId)}
              />
            </View>
          ))}

          <TextInput
            ref={ref}
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder="Type something ..."
            keyboardType={keyboardType}
            placeholderTextColor={colors.black}
          />
        </View>

        <TouchableOpacity
        onPress={()=> setOnFilter(!onFilter)}
         style={styles.icons}>
          <MaterialCommunityIcons
            name="filter-outline"
            color={colors.black}
            size={25}
          />
        </TouchableOpacity>
      </View>
      {onFilter ? (
        <View style={styles.filterContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {filters.map((item) => {
              return <FilterItem key={item.id} item={item} />;
            })}
          </ScrollView>
        </View>
      ) : null}
    </View>
  );
});

export default Search;

const styles = StyleSheet.create({
  icons: {
    padding: 5,
  },
  inputContainer: {
    borderRadius: 50,
    backgroundColor: colors.white,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    lineHeight: 0,
    fontSize: 14,
    borderColor: colors.primary,
    maxWidth: "100%",
    flexWrap: "wrap",
  },
  onFilter: {
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
  },
  tag: {
    backgroundColor: colors.primary,
    margin: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    justifyContent: "space-between",
  },
  tagText: {
    color: colors.white,
    fontSize: 15,
  },
  input: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 10,
    minWidth: 150,
    color: colors.black
  },
  filterContainer: {
    paddingVertical: 10,
    paddingLeft: 10,
    backgroundColor: colors.white,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
  },
  filterItemContainer: {
    backgroundColor: colors.lightGray,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
    marginRight: 10,
    margin: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    justifyContent: "space-between",
  },
  filterItemText: {
    color: colors.lightBlack,
    fontSize: 12,
  },
  subContentText: {
    fontSize: 15,
  },
  subContent: {
    borderBottomWidth: 1,
    borderColor: colors.lightGray,
    paddingVertical: 10,
  },
});
