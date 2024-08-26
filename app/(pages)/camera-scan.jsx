import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { router } from 'expo-router';

const CameraScan = () => {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [barcodeScanResult, setBarcodeScanResult] = useState();
  const [lastScanTime, setLastScanTime] = useState(0);

  // Ensure hook call consistency
  const handleBarcodeScanned = useCallback(
    ({ data }) => {
      const currentTime = Date.now();
      if (currentTime - lastScanTime > 2000) { // 2 seconds debounce
        setBarcodeScanResult(data);
        setLastScanTime(currentTime);
      }
    },
    [lastScanTime]
  );

  useEffect(() => {
    if (barcodeScanResult === "Meal") {
      router.push("/(pages)/enjoy-meal");
    }
  }, [barcodeScanResult]);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} barcodeScannerSettings={{barcodeTypes:["qr", "ean13", "ean8", "pdf417", "aztec", "datamatrix", "upc_e", "code39", "code93", "itf14", "codabar", "code128", "upc_a"]}} facing={facing} onBarcodeScanned={handleBarcodeScanned}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default CameraScan;
