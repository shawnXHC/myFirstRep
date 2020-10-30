import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/iconfont/iconfont.css"
import "./assets/iconfont/iconfont.js"
import {
    Form,
    Field,
    Button,
    Col,
    Row,
    Tabbar,
    TabbarItem,
    Card,
    Cell,
    CellGroup,
    Icon,
    Grid,
    GridItem,
    NavBar,
    Uploader,
    Calendar,
    Popup,
    Picker,
    Search,
    DropdownMenu,
    DropdownItem,
    Switch


} from "vant";
import {
    Image as VanImage
} from 'vant';
Vue.use(Form).use(Field).use(Button).use(Col).use(Row).use(Icon).use(Grid).use(GridItem).use(Calendar);
Vue.use(Tabbar).use(TabbarItem).use(Card).use(Cell).use(CellGroup).use(VanImage).use(NavBar).use(Uploader);
Vue.use(Popup).use(Picker).use(Search).use(DropdownMenu).use(DropdownItem).use(Switch);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");