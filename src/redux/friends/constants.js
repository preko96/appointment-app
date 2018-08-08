import { user } from '../../util/createReduxModule'

const moduleUser = name => user('Friends', name)

export const ON_ADD_FRIEND = moduleUser('ON_ADD_FRIEND')
export const ON_REMOVE_FRIEND = moduleUser('ON_REMOVE_FRIEND')