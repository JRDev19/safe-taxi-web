<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import RecursiveList from './RecursiveList.vue';

const props = defineProps({
    roles: {
        type: Object,
    },
    rolesPermissions: {
        type: Array,
    },
    rolesMenus: {
        type: Array,
    },
});
</script>

<template>
    <AppLayout title="Dashboard - Roles - Permisos - Menús">
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg px-6 py-10">
                    <h1 class="text-2xl font-bold">Listado de Roles - Permisos - Menús</h1>
                    <div>
                        <div class="flex justify-between items-start">
                            <p class="text-xl font-bold">#</p>

                            <p class="text-xl font-bold">Rol</p>

                            <p class="text-xl font-bold">Permisos</p>

                            <p class="text-xl font-bold">Menús</p>

                            <p class="text-xl font-bold">Acciones</p>

                        </div>
                        <div class="py-5 flex justify-between items-start" v-for="(role, index) in roles">
                            <p class="font-semibold text-lg"> {{ index+1 }}</p>
                            <p class="font-semibold text-lg"> {{ role.name }}</p>
                            <div>
                                <p>controller</p>
                                <RecursiveList :target="'alias'" :items="rolesPermissions[index]" />
                            </div>
                            <div>
                                <p>index</p>
                                <RecursiveList :target="'name'" :items="rolesMenus[index]" />
                            </div>
                            <div>
                                <a :href="route('roles.editRelationship', role.id)">editar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

