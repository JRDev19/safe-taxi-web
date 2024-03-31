<script setup>
import { router, Link } from '@inertiajs/vue3';
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputIcon from 'primevue/inputicon';
import IconField from 'primevue/iconfield';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import Swal from 'sweetalert2';

const props = defineProps({
    datos: {
        type: Object
    },
    datosExistentes: {
        type: Boolean,
        default: false
    },
    datosEliminados: {
        type: Boolean,
        default: false
    },
    rutaCreate: {
        type: String
    },
    rutaTrash: {
        type: String
    },
    rutaExistentes: {
        type: String
    },
    arrBusquedas: {
        type: Array
    },
    colUno :{
        datos :{
            type: Object
        },
        default: false
    },
    colDos: {
        datos :{
            type: Object
        },
        default: false
    },
    colTres: {
        datos :{
            type: Object
        },
        default: false
    },
    createdAt: {
        nombre: {
            type: String
        },
        default: false
    },
    updatedAt: {
        nombre: {
            type: String
        },
        default: false
    },
    deletedAt: {
        nombre: {
            type: String
        },
        default: false
    },
    rutaShow: {
        ruta: {
            type: String
        },
        default: false
    },
    rutaEdit: {
        ruta: {
            type: String
        },
        default: false
    },
    rutaDestroy: {
        ruta: {
            type: String
        },
        default: false
    },
    rutaRestore: {
        ruta: {
            type: String
        },
        default: false
    },
    rutaDrop: {
        ruta: {
            type: String
        },
        default: false
    },
    rutaRestoreAll: {
        ruta: {
            type: String
        },
        default: false
    },
    rutaDropAll: {
        ruta: {
            type: String
        },
        default: false
    },
});

const destroy = (id) => {
    Swal.fire({
        title: '¿Estás seguro de que deseas eliminar este registro?',
        text: 'Recuerda que cuentas con un plazo de 30 días para recuperar este registro.',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: "Eliminar",
        cancelButtonText: `Cancelar`,
        confirmButtonColor: '#EF4444',
    }).then((result) => {
        if (result.isConfirmed) {
            router.delete(route(`${props.rutaDestroy.ruta}`, id))
        }
    });
};

const restore = (id) => {
    Swal.fire({
        title: '¿Estás seguro de que deseas restaurar este registro?',
        text: 'Recuerda que cuentas con un plazo de 30 días para recuperar este registro.',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: "Restaurar",
        cancelButtonText: `Cancelar`,
        confirmButtonColor: '#22C55E',
    }).then((result) => {
        if (result.isConfirmed) {
            router.patch(route(`${props.rutaRestore.ruta}`, id))
        }
    });
};

const drop = (id) => {
    Swal.fire({
        title: '¿Estás seguro de que deseas eliminar para siempre este registro?',
        text: 'Recuerda que no podrás recuperar este registro después de eliminarlo.',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: "Eliminar",
        cancelButtonText: `Cancelar`,
        confirmButtonColor: '#EF4444',
    }).then((result) => {
        if (result.isConfirmed) {
            router.delete(route(`${props.rutaDrop.ruta}`, id))
        }
    });
};

const restoreAll = () => {
    Swal.fire({
        title: '¿Estás seguro de que deseas restaurar todos los registros?',
        text: 'Recuerda que cuentas con un plazo de 30 días para recuperar los registros.',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: "Restaurar",
        cancelButtonText: `Cancelar`,
        confirmButtonColor: '#22C55E',
    }).then((result) => {
        if (result.isConfirmed) {
            router.post(route(`${props.rutaRestoreAll.ruta}`))
        }
    });
};

const dropAll = () => {
    Swal.fire({
        title: '¿Estás seguro de que deseas eliminar todos los registros?',
        text: 'Recuerda que no podrás recuperar los registros después de eliminarlos.',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: "Eliminar",
        cancelButtonText: `Cancelar`,
        confirmButtonColor: '#EF4444',
    }).then((result) => {
        if (result.isConfirmed) {
            router.post(route(`${props.rutaDropAll.ruta}`))
        }
    });
};

const filters = ref();

const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    };
};

initFilters();

const clearFilter = () => {
    initFilters();
};

const formatDate = (value) => {
    let fecha = new Date(value);
    let year = fecha.getFullYear();
    let month = (fecha.getMonth() + 1).toString().padStart(2, '0');
    let day = fecha.getDate().toString().padStart(2, '0');
    let hours = fecha.getHours().toString().padStart(2, '0');
    let minutes = fecha.getMinutes().toString().padStart(2, '0');
    let seconds = fecha.getSeconds().toString().padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};

</script>

<template>
    <div class="flex gap-2 pb-4 pt-2">
        <template v-if="datosExistentes">
            <Link :href="route(rutaCreate)"><Button label="Agregar" icon="pi pi-plus" class="px-3 py-1" /></Link>
            <Link type="button" :href="route(rutaTrash)"><Button label="Eliminados" icon="pi pi-trash" class="px-3 py-1 bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600" /></Link>
        </template>
        <template v-if="datosEliminados">
            <Button label="Restaurar todos" icon="pi pi-refresh" class="px-3 py-1 bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600" @click.prevent="restoreAll()" />
            <Button label="Eliminar todos" icon="pi pi-refresh" class="px-3 py-1 bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600" @click.prevent="dropAll()" />
            <Link :href="route(rutaExistentes)"><Button label="Existentes" icon="pi pi-plus" class="px-3 py-1" /></Link>
        </template>
    </div>
    <div class="card">
        <DataTable v-model:filters="filters" :value="datos" paginator :rows="5" :rowsPerPageOptions="[1, 5, 10, 20, 50]" tableStyle="min-width: 50rem" :globalFilterFields="arrBusquedas">
            <template #header>
                <div class="flex justify-content-between gap-3">
                    <Button type="button" icon="pi pi-filter-slash" outlined @click="clearFilter()" />
                    <IconField iconPosition="left">
                    <InputIcon class="pi pi-search"></InputIcon>
                    <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
                    </IconField>
                </div>
            </template>
            <template #empty> No se encontraron resultados. </template>
            <Column header="#">
                <template #body="slotProps">{{ slotProps.index + 1 }}</template>
            </Column>
            <Column v-if="colUno" :field="colUno.datos.dato" :header="colUno.datos.nombre" ></Column>
            <Column v-if="colDos" :field="colDos.datos.dato" :header="colDos.datos.nombre" ></Column>
            <Column v-if="colTres" :field="colTres.datos.dato" :header="colTres.datos.nombre" ></Column>
            <Column v-if="createdAt" :header="createdAt.nombre">
                <template #body="slotProps">
                    {{ formatDate(slotProps.data.created_at) }}
                </template>
            </Column>
            <Column v-if="updatedAt" :header="updatedAt.nombre">
                <template #body="slotProps">
                    {{ formatDate(slotProps.data.updated_at) }}
                </template>
            </Column>
            <Column v-if="deletedAt" :header="deletedAt.nombre">
                <template #body="slotProps">
                    {{ formatDate(slotProps.data.updated_at) }}
                </template>
            </Column>
            <Column header="Acciones" class="flex gap-2">
                <template #body="slotProps">
                    <Link v-if="rutaShow" :href="route(`${rutaShow.ruta}`, { id: slotProps.data.id })"><Button icon="pi pi-eye" aria-label="Ver" class="p-0" /></Link>
                    <Link v-if="rutaEdit" :href="route(`${rutaEdit.ruta}`, { id: slotProps.data.id })"><Button icon="pi pi-file-edit" aria-label="Ver" class="p-0 bg-yellow-400 border-yellow-400 hover:bg-yellow-500 hover:border-yellow-500" /></Link>
                    <Button v-if="rutaDestroy" icon="pi pi-trash" class="p-0 bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600" @click.prevent="destroy(slotProps.data.id)" />
                    <Button v-if="rutaRestore" icon="pi pi-refresh" class="p-0 bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600" @click.prevent="restore(slotProps.data.id)" />
                    <Button v-if="rutaDrop" icon="pi pi-trash" class="p-0 bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600" @click.prevent="drop(slotProps.data.id)" />
                </template>                    
            </Column>
        </DataTable>
    </div>
</template>