<template>
	<!-- 输入区 -->
	<label>
		<text class="label">{{ operationName }}</text>
		<textarea
			@input="$emit('change', $event.target.value)"
			:value="value"
			:placeholder="placeholder"
			class="content-input"
			maxlength="-1"
			type="text"
		/>
	</label>
</template>

<script></script>

<style></style>
