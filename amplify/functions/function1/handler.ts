import type { Schema } from "../../data/resource"

export const handler: Schema["function1"]["functionHandler"] = async (event) => {
  // arguments typed from `.arguments()`
  const { name } = event.arguments
  // return typed from `.returns()`
  return `Hello, ${name}!`
}