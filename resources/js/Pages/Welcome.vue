<script setup>
import { Head, Link } from '@inertiajs/vue3';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>

<template>
    <Head title="Welcome" />

    <div class="min-h-screen bg-red-600 flex flex-col overflow-hidden">
        <div class="h-24 w-full flex justify-between text-lg font-semibold">
            <div class="min-h-full flex gap-10">
                <div class="min-h-full ml-12 flex items-center">logosadasdadsadasdas</div>
            </div>
            <div v-if="canLogin" class="min-h-full mr-20 flex gap-12 items-center">
                <Link v-if="$page.props.auth.user" :href="route('dashboard')">Dashboard</Link>
                <template v-else>
                    <Link :href="route('login')">Log in</Link>
                    <Link :href="route('register')">Register</Link>
                </template>
            </div>
        </div>
        <div class="grow w-full flex">
            <div class="grow w-5/12 flex flex-col justify-center items-center gap-4 mb-36">
                <h2 class=" w-5/6 font-bold text-3xl z-10">Lorem ipsum dolor</h2>
                <h2 class="w-5/6 font-black text-5xl z-10">Lorem ipsum dolor sit amet</h2>
                <h3 class="w-5/6 z-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur consectetur iste architecto dolorem magnam aperiam velit earum atque consequuntur quod. Rerum commodi incidunt mollitia, facere laborum fugiat quae amet officia.</h3>
                <h3 class="w-5/6 font-semibold z-10">Lorem ipsum dolor</h3>
                <div class="w-5/6 z-10">
                    <button class="mt-12 bg-amber-400 font-semibold rounded-full px-20 py-4">Click me!</button>
                </div>
                <div class="absolute left-0 bottom-0 h-5/6 w-5/12 border-2 border-red-600 bg-gradient-to-b from-red-600 to-red-300 blur-xl"></div>
            </div>    
            <div class="grow w-7/12  flex items-center justify-end">
                <img src="/fondo2.png" class="w-11/12 z-20" alt="">
            </div>
        </div>
        <div class="absolute bg-white h-96 w-3/4 ml-10 bottom-0 bg-gradient-to-l from-red-500 to-red-300 blur-3xl"></div>
        <div class="absolute bottom-0 left-0 bg-red-600 h-14 w-full z-10"></div>
        <!--<div class="absolute bottom-0 -left-8 bg-white h-24 w-44 rounded-t-full"></div>-->
    </div>
</template>

<style>

</style>
