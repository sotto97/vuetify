<template>
	<v-container>
		<v-row>
			<v-col cols="12" sm="6" md="4" lg="3">
				<SaleGraph />
			</v-col>
			<v-col cols="12" sm="6" md="4" lg="3">
				<SaleGraph />
			</v-col>
			<v-col cols="12" sm="6" md="4" lg="3">
				<SaleGraph />
			</v-col>
			<v-col cols="12" sm="6" md="4" lg="3">
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
