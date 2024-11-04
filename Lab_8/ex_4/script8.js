function maxSubArray(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];
    for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);    
    }
 return maxSum;
   
}
const array = [-4,5,8,0,-2,6,1];
console.log("Максимальна сума підмасиву:", maxSubArray(array));

