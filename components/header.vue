<template>
    <header class="bg-secondary text-secundary py-4">
        <nav class="container mx-auto flex justify-between items-center">
            <div class="flex space-x-4">
                <img src="../assets/img/book.png" alt="">
                <a href="/" class="text-4xl font-bold text-secondary-content">Guestbook</a>
            </div>
            <div class="hidden md:block text-2xl">
                <ul class="flex space-x-4">
                    <li><a href="/" class="hover:text-neutral-focus text-primary-content">Home</a></li>
                    <li><a href="/listar" class="hover:text-neutral-focus text-primary-content">Listar</a></li>
                </ul>
            </div>
            <div class="md:hidden">
                <button class="text-gray-400 hover:text-white focus:outline-none">
                    <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path v-if="!isOpen" fill-rule="evenodd" clip-rule="evenodd" d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/>
                        <path v-else fill-rule="evenodd" clip-rule="evenodd" d="M4.414 4.414a2 2 0 012.828 0L12 8.172l4.758-4.758a2 2 0 012.828 2.828L14.828 11l4.758 4.758a2 2 0 01-2.828 2.828L12 13.828l-4.758 4.758a2 2 0 01-2.828-2.828L9.172 11 4.414 6.242a2 2 0 010-2.828z"/>
                    </svg>
                </button>
            </div>
        </nav>
        <div v-if="isOpen" class="md:hidden text-xl">
            <ul class="flex flex-col space-y-2">
                <li><a href="/" class="hover:text-secundary">Home</a></li>
                <li><a href="/listar" class="hover:text-secundary">Listar</a></li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false
        }
    }
}
</script>

<style>
/* Responsiveness */
@media (min-width: 768px) {
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .hidden {
        display: block !important;
    }
    .md\:block {
        display: block !important;
    }
    .md\:hidden {
        display: none !important;
    }
}
</style>


