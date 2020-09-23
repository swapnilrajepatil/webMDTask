<template>
             <div class="form-group">
					<input id="check" type="checkbox" class="check" >
					<label for="check">{{textvalue}}</label>
				</div>
</template>

<script>
export default {
name:'checkBoxComponent',
props:["textvalue"]
}
</script>

<style>

</style>