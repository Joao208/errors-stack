import { ErrorsStack } from '../../src/ErrorsStack'

describe('[ErrorsStack] Test case', () => {
  it('Should create new error instance and construct then', () => {
    const MyError = ErrorsStack({
      message: 'My default message',
      name: 'MyError',
    })

    const error = new MyError({
      message: 'My other message',
      status: 500,
      errorParams: {
        param1: 'param1',
      },
    })

    expect(error.message).toBe('My other message')
    expect(error.name).toBe('MyError')
    expect(error.status).toBe(500)
    expect(error.errorParams).toEqual({ param1: 'param1' })
  })
})
