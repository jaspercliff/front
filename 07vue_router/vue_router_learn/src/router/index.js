import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Message from "@/pages/Message.vue";
import Detail from "@/pages/detail.vue";
import News from "@/pages/News.vue";
import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        name: 'home', path: '/', component: Home,
        meta: {title: '主页'}
    },
    {
        name: 'about',
        path: '/about', component: About,
        meta: {title: '关于'},
        children: [
            {
                path: 'message', component: Message
                ,
                meta: {isAuth: true, title: '消息'},

                children: [
                    {
                        name: 'detail',
                        path: 'detail/:id/:title',
                        component: Detail,
                        meta: {title: 'detail'},
                        // props:{a:1}
                        // 若布尔值为真 则会把该路由收到的所有params参数以prop的形式传给detail组件
                        // props:true
                        props(route) {
                            return {
                                id: route.params.id,
                                title: route.params.title
                            }
                        }
                        // 若对象为真 则会把这两两以prop的对象展示给detail组件
                    }
                ]
            },
            {
                name: 'News', path: 'news', component: News,
                meta: {title: '新闻'},
                beforeEnter: (to, from, next) => {
                    if (localStorage.getItem('age') === '20') {
                        next()
                    } else {
                        alert('fucking age')
                    }
                }
            }
        ]
    }
]
export const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

// 全局前置路由守卫 每次路由切换之前 初始化的时候被调用
router.beforeEach((to, from, next) => {
    // console.log(to, from)
    // if(to.path === '/about/news' || to.path ==='/about/message'){
    if (to.meta.isAuth) {
        if (localStorage.getItem('name') === 'jasper') {
            next()
        } else {
            alert('fucking token')
        }
    } else {
        next()
    }
})

// 没有next
router.afterEach((to, from) => {
    document.title = to.meta.title || 'jasper'
})
