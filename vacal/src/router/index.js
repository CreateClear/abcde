import Vue from 'vue'
import Router from 'vue-router'

const Home = r => require.ensure([], () => r(require('@/pages/home.vue')), 'Home');
const Class = r => require.ensure([], () => r(require('@/pages/class.vue')), 'Class');
const Custom = r => require.ensure([], () => r(require('@/pages/custom.vue')), 'Custom');
const Cart = r => require.ensure([], () => r(require('@/pages/cart.vue')), 'Cart');
const My = r => require.ensure([], () => r(require('@/pages/my.vue')), 'My');
const Log = r => require.ensure([], () => r(require('@/pages/log.vue')), 'Log');
const Sign = r => require.ensure([], () => r(require('@/pages/sign.vue')), 'Sign');
const Buy = r => require.ensure([], () => r(require('@/pages/buy.vue')), 'Buy');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
    	path: '/class',
    	component: Class
    },
    {
    	path: '/custom',
    	component: Custom
    },
    {
    	path: '/cart',
    	component: Cart
    },
    {
    	path: '/my',
    	component: My
    },
    {
    	path: '/log',
    	component: Log
    },
    {
    	path: '/sign',
    	component: Sign
    },
    {
        path: '/buy/:id',
        name:'/buy',
        component: Buy
    },
    {
        path: '/',
        redirect: '/home'
    }
  ]
})

