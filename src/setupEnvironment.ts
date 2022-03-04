const NODE_ENV = process.env.NODE_ENV
export const __PROD__ = NODE_ENV === 'production'
export const __DEV__ = NODE_ENV === undefined || NODE_ENV === 'development'
