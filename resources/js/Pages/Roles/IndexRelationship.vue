<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { ref } from 'vue';
import { router, Link } from '@inertiajs/vue3';
import RecursiveList from './RecursiveList.vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputIcon from 'primevue/inputicon';
import IconField from 'primevue/iconfield';
import Button from 'primevue/button';



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
console.log(props.roles)
console.log(props.rolesPermissions)
console.log(props.rolesMenus)

const visibilidad = ref(Array(props.rolesPermissions.length).fill(false));

const cambiarVisibilidad = (index) => {
    visibilidad.value[index] = !visibilidad.value[index];
};

const visibilidadMenus = ref(Array(props.rolesMenus.length).fill(false));

const cambiarVisibilidadMenus = (index) => {
    visibilidadMenus.value[index] = !visibilidadMenus.value[index];
};
</script>

<template>
    <AppLayout title="Dashboard - Roles - Permisos - Menús">
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg px-6 py-10">
                    <h1 class="text-2xl font-bold">Listado de Roles - Permisos - Menús</h1>
                    
                    <div class="card">
                        <DataTable :value="roles" tableStyle="min-width: 50rem">
                            <Column header="#">
                                <template #body="slotProps">{{ slotProps.index + 1 }}</template>
                            </Column>
                            <Column field="name" header="Rol"></Column>
                            <Column header="Permisos">
                                <template #body="slotProps">
                                    <p v-show="rolesPermissions[slotProps.index] != 0" class="font-bold hover:cursor-pointer" @click.prevent="cambiarVisibilidad(slotProps.index)">Controller<i :class="{'pi pi-angle-down': !visibilidad[slotProps.index], 'pi pi-angle-up': visibilidad[slotProps.index]}" ></i></p>
                                    <p v-show="rolesPermissions[slotProps.index] == 0" class="font-bold">Controller</p>
                                    <div v-show="visibilidad[slotProps.index]">
                                        <RecursiveList :target="'alias'" :items="rolesPermissions[slotProps.index]" />
                                    </div>
                                </template>
                            </Column>
                            <Column header="Menús">
                                <template #body="slotProps">
                                    <p v-show="rolesMenus[slotProps.index] != 0" class="font-bold hover:cursor-pointer" @click.prevent="cambiarVisibilidadMenus(slotProps.index)">Index<i :class="{'pi pi-angle-down': !visibilidadMenus[slotProps.index], 'pi pi-angle-up': visibilidadMenus[slotProps.index]}" ></i></p>
                                    <p v-show="rolesMenus[slotProps.index] == 0" class="font-bold">Index</p>
                                    <div v-show="visibilidadMenus[slotProps.index]">
                                        <RecursiveList :target="'name'" :items="rolesMenus[slotProps.index]" />
                                    </div>
                                </template>
                            </Column>
                            <Column header="Acciones" class="flex justify-center">
                                <template #body="slotProps">
                                    <Link :href="route('roles.editRelationship', { id: slotProps.data.id })" class="w-3/4"><Button icon="pi pi-file-edit" aria-label="Ver" class="w-full p-0 bg-yellow-400 border-yellow-400 hover:bg-yellow-500 hover:border-yellow-500" /></Link>
                                </template>                    
                            </Column>
                        </DataTable>
                    </div>

                    
                    
                </div>
            </div>
        </div>
    </AppLayout>
</template>
