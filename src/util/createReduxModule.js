const module = (mod, trigger, name) => `${mod}/${trigger}/${name}`

const saga = (mod, name) => module(mod, 'Saga', name)
const user = (mod, name) => module(mod, 'User', name)

export {
	saga,
	user
}
