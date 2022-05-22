import { Store } from 'vuex';
import { Status } from '@/store/state';


declare module '@vue/runtime-core' {
    // declare your own store states
    interface State {
        status: Status,
    }

    // provide typings for `this.$store`
    interface ComponentCustomProperties {
        $store: Store<State>
    }
}
