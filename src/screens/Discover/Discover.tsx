import { SafeScreen } from "@/components/template";
import type { ApplicationScreenProps } from "@/types/navigation";
import Tags from "./components/Tags";
import Promotions from "./components/Promotions";
import { View } from "react-native";

function Discover({ navigation }: ApplicationScreenProps) {
	return (
		<SafeScreen>
			<View style={{ flex: 1.5, marginTop: 60 }}>
				<Tags />
			</View>
			<View style={{ flex: 10 }}>
				<Promotions navigation={navigation} />
			</View>
			<View style={{ flex: 2 }}></View>
		</SafeScreen>
	);
}

export default Discover;
