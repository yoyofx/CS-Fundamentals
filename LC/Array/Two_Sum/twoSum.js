function twoSum(numbers, target) {
  // #1: Brute force, Runtime: O(n^2), Space: O(1)
  for (var first = 0; first < numbers.length; first++) {
    for (var second = 0; second < numbers.length; second++ ) {
      if (numbers[first] + numbers[second] == target) {
        return [first + 1, second + 1];
      }
    }
  }
  return "No two sum solution"

  // #2: HashMap, Runtime: O(n), Space: O(n)
}

// Test Case
numbers = [2,4,11,15]
target = 19
console.log(twoSum(numbers,target)[0] === 2 && twoSum(numbers,target)[1] === 4); // true

numbers = [3,15,37,22,48]
target = 85
console.log(twoSum(numbers,target)[0] === 3 && twoSum(numbers,target)[1] === 5); // true

numbers = [3,24,53,4]
target = 100
console.log(twoSum(numbers,target) === 'No two sum solution'); // true