<script setup>
    import { Link } from '@inertiajs/vue3';

    defineProps({
        regLog: {
            type: Boolean,
            default: false
        },
        link: {
            type: String,
            default: '#'
        },
        reg: {
            type: String,
            default: 'sm:max-w-md'
        }
    })
</script>


<template>
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <div class="z-10">
            <slot name="logo" />
        </div>

        <div :class="`w-full ${reg} mt-6 px-6 py-4 shadow-md overflow-hidden sm:rounded-lg bg-white z-10`">
            <slot />
        </div>
    </div>
    <div v-if="regLog" class="absolute h-full w-1/2 top-0 bg-red-500 flex items-end"></div>
</template>
