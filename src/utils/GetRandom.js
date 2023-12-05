const GetRandom = (number = 126) => {
  let random = Math.ceil(Math.random() * number)

  return random
}
export default GetRandom