<template>
	<v-container>
		<v-row>
			<v-col cols="8">
				<SaleGraph />
			</v-col>
			<v-col cols="4">
				<SaleGraph />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import SaleGraph from "../components/SaleGraph";
// import HelloWorld from "../components/HelloWorld";

export default {
	name: "Home",

	components: {
		// HelloWorld,
		SaleGraph,
	},
};
</script>
