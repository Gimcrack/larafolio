require('./bootstrap');

Vue.component('blocks', require('./components/Blocks.vue'));
Vue.component('block-preview', require('./components/Previews/BlockPreview.vue'));
Vue.component('dashboard-pages', require('./components/DashboardPages.vue'));
Vue.component('dashboard-projects', require('./components/DashboardProjects.vue'));
Vue.component('deleted-resources', require('./components/DeletedResources.vue'));
Vue.component('flash-manager', require('./components/FlashManager.vue'));
Vue.component('flash-message', require('./components/FlashMessage.vue'));
Vue.component('image-manager', require('./components/ImageManager.vue'));
Vue.component('image-tile', require('./components/ImageTile.vue'));
Vue.component('lines', require('./components/Lines.vue'));
Vue.component('links', require('./components/Links.vue'));
Vue.component('link-preview', require('./components/Previews/LinkPreview.vue'));
Vue.component('link-status', require('./components/LinkStatus.vue'));
Vue.component('modal', require('./components/Modal.vue'));
Vue.component('name-preview', require('./components/Previews/NamePreview.vue'));
Vue.component('nav-pages', require('./components/NavPages.vue'));
Vue.component('nav-projects', require('./components/NavProjects.vue'));
Vue.component('page-form', require('./components/PageForm.vue'));
Vue.component('project-link', require('./components/ProjectLink.vue'));
Vue.component('project-form', require('./components/ProjectForm.vue'));
Vue.component('dashboard-tile', require('./components/DashboardTile.vue'));
Vue.component('resource-controls', require('./components/ResourceControls.vue'));
Vue.component('type-preview', require('./components/Previews/TypePreview.vue'));

const bus = new Vue();

Vue.prototype.$bus = bus;

import MediaQueries from './mixins/MediaQueries.js';

new Vue({
    el: '#app',

    mixins: [ MediaQueries ],

    data: {
        showMenu: false
    },

    computed: {
        menuVisible () {
            if (this.small) {
                return this.showMenu;
            }

            return true;
        }
    },

    methods: {
        /**
         * Toggle mobile menu.
         */
        toggleMenu () {
            this.showMenu = !this.showMenu;
        }
    }
});
