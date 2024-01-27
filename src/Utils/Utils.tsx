import React from 'react';
import Toast from "react-native-toastify"


const showToast = () => {
    Toast.show('This is a toast message', {
      position: Toast.position.BOTTOM,
      duration: Toast.durations.LONG,
      textColor: 'white',
      backgroundColor: 'green',
      shadow: true,
      animation: true,
    });
}