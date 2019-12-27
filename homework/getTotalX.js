/* 
O(n log(n)) solution.
1. find the LCM of all the integers of array A.
2. find the GCD of all the integers of array B.
3. Count the number of multiples of LCM that evenly divides the GCD.
*/
let gcd = (a, b) => {
  if (b == 0) return a;
  return gcd(b, a % b);
};
let lcm = arr => {
  let result = arr[0];
  for (let i = 0; i < arr.length; i++) {
    result = (arr[i] * result) / gcd(arr[i], result);
  }
  return result;
};
let gcdArr = (arr)=>{
    let result= arr[0];
    for (let i = 0; i < arr.length; i++) {
        result = gcd(arr[i], result); 
         if(result == 1)return 1        
    }
    return result
}
let getTotalX = (a,b)=>{
    let gcd = (a, b) => {
        if (b == 0) return a;
        return gcd(b, a % b);
      };
      let lcm = arr => {
        let result = arr[0];
        for (let i = 0; i < arr.length; i++) {
          result = (arr[i] * result) / gcd(arr[i], result);
        }
        return result;
      };
      let gcdArr = (arr)=>{
          let result= arr[0];
          for (let i = 0; i < arr.length; i++) {
              result = gcd(arr[i], result); 
               if(result == 1)return 1        
          }
          return result
      }
    lcm(a);
    gcdArr(b)
    return result
}
//console.log(getTotalX([2, 6], [24, 36]));
console.log(gcdArr([24,36]))
console.log(lcm([2,6]))