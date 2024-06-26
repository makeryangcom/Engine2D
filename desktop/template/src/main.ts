import {createApp} from "vue";
import App from "./app.vue";
import {router} from "./router";

const app = createApp(App);

app.use(router);

app.directive("resize", {
    mounted(el, binding) {
        let _this: any = this;
        function debounce(fn: any, delay = 16) {
            let time: any = null;
            return function () {
                if (time) {
                    clearTimeout(time);
                }
                const context = _this;
                const args = arguments
                time = setTimeout(function () {
                    fn.apply(context, args);
                }, delay);
            }
        }
        el._resizer = new window.ResizeObserver(debounce(binding.value, Number(binding.arg) || 16));
        el._resizer.observe(el);
    },
    unmounted(el) {
        el._resizer.disconnect();
    }
});

app.mount("#app");
