export default {
  name: 'q-item-separator',
  props: {
    inset: Boolean
  },
  render (h) {
    return h('div', {
      staticClass: 'q-item-separator-component',
      'class': {
        'q-item-separator-inset-component': this.inset
      }
    }, [
      this.$slots.default
    ])
  }
}
