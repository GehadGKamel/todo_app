import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Button, Image, View } from "react-native";

export default function ImagePickerExample() {
    const [image, setImage] = useState(null);
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "white" }}>
            {image && (
                <Image source={{ uri: image }} style={{ width: "100%", height: 300 }} />
            )}
            <Button color={"#c7d2fe"} title="Pick an image" onPress={pickImage} />
        </View>
    );
}
