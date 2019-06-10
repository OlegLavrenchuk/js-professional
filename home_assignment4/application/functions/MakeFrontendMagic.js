const MakeFrontEndMagic = (state) => ({
    frontendMagic: () => console.log('This is fronend MAGIC!', state.name)
})

export default MakeFrontEndMagic;