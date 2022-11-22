export const state = () => ({
  sidebarDetailActive : false
}) 

export const mutations = {
  trigger(state) {
    state.sidebarDetailActive = state.sidebarDetailActive ? false : true
  }
}