export default (context, inject) => {
  inject('testPlugin', (msg) => {
    return msg + ' holo'
  })
  inject('testPlugin2', () => {
    return fTest()
  })
  function fTest() {
    return 'test'
  }
}
