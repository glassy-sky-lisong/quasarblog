import { store } from 'quasar/wrappers'
import { InjectionKey } from 'vue'
import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore,
} from 'vuex'

import { axios } from 'src/boot/axios'
import { UserProp } from '../layouts/user';
import { PostProp } from '../layouts/post';

// import example from './module-example'
// import { ExampleStateInterface } from './module-example/state';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  isLogin: boolean
}

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<StateInterface>
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<StateInterface>> = Symbol('vuex-key')

export default store(function (/* { ssrContext } */) {
  const Store = createStore<StateInterface>({
    modules: {
      // example
    },
    state: {
      isLogin: false
    },
    mutations: {
      setIsLogin(state, value: boolean) {
        state.isLogin = value
      }
    },
    actions: {
      autoLogin({ commit }, options: { username: string; password: string; 'remember': '0' | '1'; }): Promise<UserProp | null> {
        const { username, password, remember } = options
        const formData = new FormData()
        formData.set('username', username)
        formData.set('password', password)
        formData.set('remember-me', remember);

        return new Promise((resolve, reject) => {
          axios.post('/api/login', formData).then(
            res => {
              if(res.data && res.data.username === username) {
                commit('setIsLogin', true)
                resolve(res.data)
              } else {
                resolve(null)
              }
            }
          ).catch( err => reject(err) )
        })
      },
      fetchCurrentUser({ state, dispatch }): Promise<UserProp | null> {
        return new Promise((resolve, reject) => {
          if (state.isLogin) {
            axios.get('/api/user/current-user').then(
              res => {
                if (res.data.data && res.data.data.username) {
                  resolve(res.data.data)
                } else {
                  resolve(null)
                }
              }
            ).catch(err => reject(err))
          } else {
              void dispatch('autoLogin', {
                username: 'admin',
                password: '950714ls',
                remember: '0'
              }).then(
                res => {
                  if (res) {
                    axios.get('/api/user/current-user').then(
                      res => {
                        if (res.data.data && res.data.data.username) {
                          resolve(res.data.data)
                        } else {
                          resolve(null)
                        }
                      }
                    ).catch(err => reject(err))
                  } else {
                    reject('can not login')
                  }
                }
              ).catch(err => reject(err))
          }
        })
      },
      fetchArticleList({}): Promise<PostProp[] | null> {
        return new Promise((resolve, reject) => {
          axios.get('/api/article/all').then(
            res => {
              resolve(res.data.data)
            }
          ).catch(err => reject(err))
        })
      },
      fetchArticleById({}, id: number): Promise<PostProp | null> {
        return new Promise((resolve, reject) => {
          axios.get(`/api/article/id/${id}`).then(
            res => {
              if(res.data.data && res.data.data.id) {
                resolve(res.data.data)
              } else {
                resolve(null)
              }
            }
          ).catch(err => reject(err))
        })
      }
    },
    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: !!process.env.DEBUGGING
  })

  return Store;
})

export function useStore() {
  return vuexUseStore(storeKey)
}
