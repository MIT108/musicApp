import { StyleSheet, View, Modal, Animated } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import colors from "../config/colors";
import { Pressable } from "react-native";

function CustomModal({ visible, children, setVisible }) {
  const [showModal, setShowModal] = useState(visible);
  const scaleValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal
      transparent
      visible={showModal}
      statusBarTranslucent={false}
      style={{
        flex: 1,
        borderWidth: 2,
      }}
    >
      <Pressable
        style={styles.modalBackGround}
        onPress={()=>setVisible(false)}
      >
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ scale: scaleValue }] },
          ]}
        >
          {children}
        </Animated.View>
      </Pressable>
    </Modal>
  );
}

export default CustomModal;

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: colors.transparentBlack,
    justifyContent: "center",
    alignItems: "center",
  },
  newModalBackGround: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "60%",
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    elevation: 20,
  },
});