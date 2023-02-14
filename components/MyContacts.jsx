import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import * as Contacts from "expo-contacts";

export default function MyContacts() {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === "granted") {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.Emails],
                });

                if (data.length > 0) {
                    const contact = data[0];
                    setContacts(data);
                    console.log(contact.name);
                }
            }
        })();
    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                {contacts.map((contact, i) => {
                    return (
                        <View key={i} style={{ marginVertical: 10 }}>
                            <Text> {contact.name}</Text>
                        </View>
                    );
                })}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
});