const createModule = (module, name) => `${module}/${name}`

export const user = name => createModule('USER', name)
export const saga = name => createModule('SAGA', name)