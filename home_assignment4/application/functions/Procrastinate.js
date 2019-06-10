const Procrastinate = (state) => ({
    procrastinate: () => console.log('dont procrastinate', state.name, state.age)
})

export default Procrastinate;