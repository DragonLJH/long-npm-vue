<template>
    <div :class="`l-input ${active ? 'active' : ''}`" @click="inputClick">
        <div class="l-input-label" v-if="props.label" :title="props.label">
            {{ props.label }}
        </div>
        <div ref="refInputIcon" class="l-input-icon">
            <MyIcon :className="props.leftIcon" />
        </div>
        <div class="l-input-main">
            <input ref="refInput" :type="props.type" @blur="inputBlur" :value="props.modelValue"
                @input="($event: any) => emits('update:modelValue', $event.target.value)">
        </div>
        <div class="l-input-icon clear" v-show="props.clear && props.modelValue" @click="emits('update:modelValue', '')">
            <MyIcon className="close-one" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, withDefaults, defineProps, defineEmits } from "vue";
type lInputProps = {
    label: string
    modelValue: string
    leftIcon: string
    type: "text" | "password"
    clear: boolean
}

let refInput = ref()
let active = ref(false)

const inputClick = () => {
    active.value = true
    refInput.value.focus()
}
const inputBlur = () => {
    active.value = false
}

const props = withDefaults(defineProps<lInputProps>(), {
    label: "",
    modelValue: "modelValue",
    leftIcon: "",
    type: "text"
})

const emits = defineEmits(["update:modelValue"])



</script>
<style scoped>
input {
    border: none;
    margin: 0;
    padding: 0;
    padding-left: 10px;
    width: calc(100% - 10px);
    height: 100%;
}

input:focus-visible {
    outline: none;
}

.l-input {
    border: solid 1px #ccc;
    display: flex;
    padding: 0px 10px;
    height: 30px;
    align-items: center;
    box-shadow: 0px 0px 3px #ccc;
    background-color: #fff;
    margin: 5px 10px;
}

.l-input:hover,
.l-input.active {
    border: solid 1px #1383ce;
}


.l-input-label {
    width: 50px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.l-input-icon {
    width: 30px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.l-input-main {
    flex: 1;
    height: 100%;
}
</style>