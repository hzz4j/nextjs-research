'use server'
const nums = [1]

export async function get() {
  console.log('Fetching:', nums)
  return nums[0]
}

export async function update(index: number, value: number) {
  nums[index] = value
  console.log('Updated:', nums)
}
