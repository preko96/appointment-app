import { user } from '../../util/createReduxModule'

const moduleUser = name => user('Inputs', name)

export const ON_CHANGE_INPUT = moduleUser('ON_CHANGE_INPUT')