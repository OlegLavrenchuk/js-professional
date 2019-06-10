const MakeBackendMagic = (state) => ({
    backendMagic: () => console.log('This is BACKEND MAGIC!!!', state.name)
})

export default MakeBackendMagic;