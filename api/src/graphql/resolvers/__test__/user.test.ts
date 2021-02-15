import { isFunction } from 'fogg-utils'
import user from '../User'

describe('#Query', () => {
  it('should have getUsers method', ()=> {
    expect(isFunction(user.Query.getUsers)).toBe(true)
  })
})

describe('#Mutation', () =>{
  it('should have createUser method', () => {
    expect(isFunction(user.Mutation.createUser)).toBe(true)
  })
  it('should have login metho', () => {
    expect(isFunction(user.Mutation.login)).toBe(true)
  })
})
