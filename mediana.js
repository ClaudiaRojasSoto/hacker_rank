function findMedian(arr) { 
    // Write your code here
    arr.sort((a,b) => a-b);
    const l=arr.length;
    return l%2==0
    ? arr.slice(l/2-1, l/2+1).reduce((a,b) => a+b)/2
    : arr.slice((l/2), l/2+1)[0];
}

