import { Image, StyleSheet } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Switch from "@/components/Switch";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{
        light: Colors.light.tint,
        dark: Colors.dark.tint,
      }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-ui-lab-logo.png")}
          style={[styles.reactLogo, {
            tintColor: colors.text,
          }]}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to UI Lab!</ThemedText>
        <HelloWave />
      </ThemedView>

      {/* Switch Component usage */}
      <Switch
        value={true}
        onValueChange={(value) => console.log(`Switch toggled ${value}`)}
        label="Switch"
      />

      <ThemedText type="title">Usecases of the Switch</ThemedText>
      <ThemedText type="small">
        Change Light/Dark theme to change switch by theme
      </ThemedText>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          value &nbsp;
          <ThemedText type="light" style={{ color: "red" }}>
            required
          </ThemedText>
        </ThemedText>
        <ThemedText type="default">boolean</ThemedText>
        <Switch
          value={true}
          onValueChange={() => { }}
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          onValueChange &nbsp;
          <ThemedText type="light" style={{ color: "red" }}>
            required
          </ThemedText>
        </ThemedText>
        <ThemedText type="default">(value: boolean) =&gt; void</ThemedText>
        <Switch
          value={true}
          onValueChange={(value) => { console.log(value) }}
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          disabled &nbsp;
        </ThemedText>
        <ThemedText type="default">boolean</ThemedText>
        <Switch
          value={true}
          onValueChange={() => { }}
          disabled
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          label &nbsp;
        </ThemedText>
        <ThemedText type="default">string</ThemedText>
        <Switch
          value={true}
          onValueChange={() => { }}
          label="Switch"
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          offLabel &nbsp;
        </ThemedText>
        <ThemedText type="default">string</ThemedText>
        <Switch
          value={true}
          onValueChange={() => { }}
          label="Switch On"
          offLabel="Switch Off"
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          labelPosition &nbsp;
        </ThemedText>
        <ThemedText type="default">"left" | "right"</ThemedText>
        <Switch
          value={true}
          onValueChange={() => { }}
          label="Switch On"
          labelPosition="left"
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          activeColor &nbsp;
        </ThemedText>
        <ThemedText type="default">string</ThemedText>
        <Switch
          value={true}
          onValueChange={() => { }}
          label="Switch On"
          activeColor="green"
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          inactiveColor &nbsp;
        </ThemedText>
        <ThemedText type="default">string</ThemedText>
        <Switch
          value={true}
          onValueChange={() => { }}
          label="Switch On"
          inactiveColor="pink"
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          thumbColor &nbsp;
        </ThemedText>
        <ThemedText type="default">string</ThemedText>
        <Switch
          value={true}
          onValueChange={() => { }}
          label="Switch On"
          thumbColor="hotpink"
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          offThumbColor &nbsp;
        </ThemedText>
        <ThemedText type="default">string</ThemedText>
        <Switch
          value={true}
          onValueChange={() => { }}
          label="Switch On"
          offThumbColor="black"
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          size &nbsp;
        </ThemedText>
        <ThemedText type="default">number</ThemedText>
        <Switch
          value={true}
          onValueChange={() => { }}
          label="Switch On"
          size={20}
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          rounded &nbsp;
        </ThemedText>
        <ThemedText type="default">number | boolean</ThemedText>
        <Switch
          value={true}
          onValueChange={() => { }}
          label="Switch On"
          rounded={10}
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          isError &nbsp;
        </ThemedText>
        <ThemedText type="default">boolean</ThemedText>
        <Switch
          value={true}
          onValueChange={() => { }}
          label="Switch On"
          isError
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          errorColor &nbsp;
        </ThemedText>
        <ThemedText type="default">string</ThemedText>
        <Switch
          value={true}
          onValueChange={() => { }}
          label="Switch On"
          isError
          errorColor={"red"}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
