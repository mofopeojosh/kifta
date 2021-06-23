<template>
    <div>
        <template v-for="(menu, key) in list">
            <div :key="'wrapper-'+key+menu.name" class="dropdown inline-flex relative">
                <nuxt-link :to="menu.path" :key="key+menu.name" class="py-2 px-3 hidden md:flex text-white items-right">
                    <span> {{ menu.name }} </span>
                </nuxt-link>
                <ul :key="key" v-if="menu.children" class="dropdown-content child-dropdown-content absolute hidden text-white pt-1 menu-item-dropdown-wrapper">
                    <template v-for="(menuChild, index) in menu.children">
                        <li :key="'c-w-'+index" v-if="!menuChild.children"><nuxt-link class="font-semibold pr-4 block whitespace-no-wrap" :key="'g-link-'+index" :to="menuChild.path"> {{ menuChild.name }} </nuxt-link></li>
                        
                        <li :key="'c-' + index" v-if="menuChild.children" class="dropdown">
                            <nuxt-link  class="font-semibold pr-4 block whitespace-no-wrap" :to="menuChild.path">{{ menuChild.name }}</nuxt-link>
                            <ul class="dropdown-content grand-child-dropdown-content absolute hidden pl-0 ml-33 -mt-10">
                                <template v-for="(grandChild, g_index) in menuChild.children">
                                    <li :key="'grand-c-d-'+g_index"><nuxt-link :to="grandChild.path" class="px-4 block whitespace-no-wrap">{{ grandChild.name }}</nuxt-link></li>
                                </template>
                            </ul>
                        </li>
                    </template>
                </ul>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        props: {
            list: {
                type: Array,
                require: false,
                default: ()=> []
            }
        }
    };
</script>
<style scoped>
   .dropdown:hover > .dropdown-content {
        display: block;
        z-index: 9999999;
        background-color: #001c40;
        color: #f8f7fa;
        min-width: 150px;
    }
   .dropdown:hover > .child-dropdown-content {
        @apply absolute items-center my-4 mt-10 pb-2 pt-2 rounded-b-md rounded-t-md shadow-md;
    }
   .dropdown:hover > .grand-child-dropdown-content {
        @apply absolute items-center -mt-9 pb-2 pt-2 rounded-b-md rounded-t-md shadow-md;
    }
    li {
        margin-top: 1px;
        margin-bottom: 0px;
        @apply px-4 py-2 text-sm block;
        white-space: nowrap;
    }
    li:hover {
        background-color: #f8f7fa;
        color: #001c40;
    }
</style>