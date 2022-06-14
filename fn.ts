type ReturnObj<T extends string, U extends string> = {
  [key in T]: U
}

interface Foo {
  name: string
  type: string
}

function transform<T extends Foo['name'], U extends Foo['type']>(
  arr: {
    name: T
    type: U
  }[]
) {
  return arr.reduce((acc, item) => {
    acc[item.name] = item.type
    return acc
  }, {} as ReturnObj<T, U>)
}

const result = transform([
  { name: 'tom', type: 'confirm' },
  { name: 'jack', type: 'confirm' },
])
result.tom

