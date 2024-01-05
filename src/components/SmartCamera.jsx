import React, { useState, useRef, useEffect } from "react";
import { View, Button, Image } from "react-native";
import { Camera } from "expo-camera";
import * as FileSystem from "expo-file-system";
import CustomButton from "../helpers/CustomButton";

const SmartCamera = ({setImageUrl}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const cameraRef = useRef(null);

  const checkCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === "granted");
  };

  const takePicture = async () => {
    if (!cameraRef.current) return;

    const photo = await cameraRef.current.takePictureAsync();
    setCapturedImage(photo.uri);
    setImageUrl(photo.uri);
  };

  const saveImageLocally = async () => {
    if (!capturedImage) return;

    try {
      const fileInfo = await FileSystem.getInfoAsync(capturedImage);
      const destPath = `${FileSystem.documentDirectory}${fileInfo.md5}.jpg`;

      await FileSystem.moveAsync({ from: capturedImage, to: destPath });

      // Optional: Show a success message or trigger further actions
      console.log("Image saved locally:", destPath);
    } catch (error) {
      console.error("Error saving image:", error);
    }
  };

  useEffect(() => {
    checkCameraPermission();
    setCapturedImage(null);
  }, []);

  const cameraScreen = () => {
    return (
      <>
        <Camera style={{ flex: 1, height: 200 }} ref={cameraRef}>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          ></View>
        </Camera>
        <CustomButton OnPress={takePicture} text={"CAPTURE"} />
      </>
    );
  };

  const imageScreen = () => {
    return (
      <View>
        <Image
          source={{ uri: capturedImage }}
          style={{ width: "100%", height: 200 }}
        />
       <CustomButton OnPress={()=>setCapturedImage(null)} text={"RE-CAPTURE"} />
      </View>
    );
  };

  return (
    <View style={{flex:1,padding:10}}>     
      {hasPermission && (
        <>
          {!capturedImage && cameraScreen()}
          {capturedImage && imageScreen()}
        </>
      )}
    </View>
  );
};

export default SmartCamera;
