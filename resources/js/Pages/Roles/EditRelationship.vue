<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import RecursiveList from './RecursiveList.vue';
import { useForm } from "@inertiajs/vue3";
defineEmits(['upload-data'])

const props = defineProps({
    role: {
        type: Object,
    },
    rolePermission: {
        type: Array,
    },
    roleMenu: {
        type: Array,
    },
    permissions: {
        type: Array,
    },
    menus: {
        type: Array,
    }
});

const form = useForm({
    alias: [],
    name: [],
});

function obtenerIdsYChildrenIds(permisos) {
    // Función recursiva para recorrer los nodos y sus hijos
    const array = [];

    function recorrerNodos(nodo, parentIds) {
        // Guardar el id y el id_parent del nodo actual
        const id = nodo.id;

        // Si hay nodos hijos, recorrerlos también
        if (nodo.children) {
            nodo.children.forEach(hijo => {
                // Agregar el id del nodo actual a los parentIds del hijo
                const childParentIds = [...parentIds, id];
                // Llamar recursivamente para los hijos
                recorrerNodos(hijo, childParentIds);
            });
        }
        array.push(id);
        // Mostrar los ids y los parentIds del nodo actual
    }

    // Iterar sobre cada nodo principal
    permisos.forEach(nodo => {
        // Comenzar con una lista vacía de parentIds
        const parentIds = [];
        // Llamar a la función para recorrer los nodos
        recorrerNodos(nodo, parentIds);
    });

    return array;
}

obtenerIdsYChildrenIds(props.rolePermission).forEach((element) => form.alias.push(element));
obtenerIdsYChildrenIds(props.roleMenu).forEach((element) => form.name.push(element));

console.log(form.alias)
console.log(form.name)

const uploadData = (item, model) => {
        if (form[model].includes(item)) {
            form[model] = form[model].filter(id => id !== item);
        } else {
            form[model].push(item);
        }
};

</script>

<template>
    <AppLayout title="Dashboard - Roles - Permisos - Menús">
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg px-6 py-10">
                    <h1 class="text-2xl font-bold">Edicion de Rol - Permiso - Menú</h1>
                    <div>
                        <div class="flex justify-between items-start">

                            <p class="text-xl font-bold">Rol</p>

                            <p class="text-xl font-bold">Permisos</p>

                            <p class="text-xl font-bold">Menús</p>

                        </div>
                        <form @submit.prevent="form.put(route('roles.updateRelationship', props.role.id))">

                            <div class="py-5 flex justify-between items-start">

                                <p class="font-semibold text-lg"> {{ role.name }}</p>
                                <div>
                                    <div class="flex items-center mb-4">
                                        <input checked type="checkbox" disabled
                                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        <label class="ms-2 text-sm  text-gray-900 dark:text-gray-300">controller</label>
                                    </div>
                                    <RecursiveList :target="'alias'" :items="permissions" :comparisionItems="rolePermission"
                                        :comparisionFlag="true" @upload-data="uploadData" />
                                </div>
                                <div>
                                    <div class="flex items-center mb-4">
                                        <input checked type="checkbox" disabled
                                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        <label class="ms-2 text-sm  text-gray-900 dark:text-gray-300">index</label>
                                    </div>
                                    <RecursiveList :target="'name'" :items="menus" :comparisionItems="roleMenu"
                                        :comparisionFlag="true" @upload-data="uploadData" />
                                </div>
                            </div>
                            <input type="hidden" name="_token" :value="csrf">
                            <button type="submit" class="btn btn-primary">Editar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
<script>
export default {
    data() {
        return {
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        }
    },
}

</script>
