<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Swal from 'sweetalert2';
import { router } from '@inertiajs/vue3'

window.destroy = (id) => {
    Swal.fire({
        title: '¿Estás seguro de que deseas eliminar este registro?',
        text: 'Recuerda que cuentas con un plazo de 30 días para recuperar este registro.',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: "Borrar",
        cancelButtonText: `No`
    }).then((result) => {
        if (result.isConfirmed) {
            router.delete(route('permissions.destroy', id))
        }
    });
};

const props = defineProps({
    permissions: {
        type: Object,
    },
});

const options =
{
    bLengthChange: false,
    responsive: true,
    select: true,
    language:
    {
        search: 'Buscar',
        lengthMenu: "Mostrando _MENU_ registros por página",
        zeroRecords: 'No hay registros para mostrar',
        info: 'Mostrando del _START_ a _END_ de _TOTAL_ registros',
        infoFiltered: '(Filtrados de _MAX_ registros.)',
        infoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
        paginate: { first: 'Primero', previous: 'Anterior', next: 'Siguiente', last: 'Último' },
    }
};

const columns =
    [
        { data: null, render: function (data, type, row, meta) { return `${meta.row + 1}` } },
        { data: "permission_self.alias" },
        { data: "alias" },
        { data: null, render: function (data) { return new Date(data.created_at).toLocaleString() } },
        { data: null, render: function (data) { return new Date(data.updated_at).toLocaleString() } },
        { data: null, render: function (data) {
            return `
                <div>
                    <a class="btn" href="${route('permissions.show', { id: data.id })}">Ver</a>
                    <a class="btn" href="${route('permissions.edit', { id: data.id })}">EDIT</a>
                    <a class="btn cursor-pointer" onclick="destroy(${data.id})">Borrar</a>
                </div>
            `;
            }
        }
    ];

</script>

<template>
    <AppLayout title="Dashboard - Permisos">
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg px-6 py-10">
                    <h1 class="text-2xl font-bold">Listado de Permisos</h1>

                    <div class="relative float-right z-10 top-[35px]">
                        <a type="button" :href="route('permissions.create')"> Agregar </a>
                        <a type="button" :href="route('permissions.trash')"> Eliminados </a>

                    </div>
                    <DataTable :data="permissions" :columns="columns" :options="options" class="display nowrap">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Permiso padre</th>
                                <th>Alias</th>
                                <th>Creado el</th>
                                <th>Actualizado el</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                    </DataTable>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
