<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import TableComponent from '@/Components/TableComponent.vue';

const props = defineProps({
    menus: {
        type: Object,
    },
});
</script>

<template>
    <AppLayout title="Dashboard - Menús">
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg px-6 py-10 flex flex-col">
                    <h1 class="text-2xl font-bold">Listado de Menús</h1>
                        <TableComponent :datos="menus" :datosExistentes="true" :rutaCreate="'menus.create'" :rutaTrash="'menus.trash'" :arrBusquedas="['menu_self.name', 'name', 'destination_url']" :colUno="{datos: {'dato': 'menu_self.name', 'nombre': 'Menú padre'}}" :colDos="{datos: {'dato': 'name', 'nombre': 'Nombre'}}" :colTres="{datos: {'dato': 'destination_url', 'nombre': 'URL destino'}}" :createdAt="{nombre: 'Creado'}" :updatedAt="{nombre: 'Actualizado'}" :rutaShow="{ruta: 'menus.show'}" :rutaEdit="{ruta: 'menus.edit'}" :rutaDestroy="{ruta: 'menus.destroy'}" />
                </div>
            </div>
        </div>
    </AppLayout>
</template>