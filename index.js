
function largestSubarraySum(array) {

    let max = array[0]
    let cur = 0
    array.forEach(num => {
        cur = Math.max(num, num + cur)

        if (cur > max)
            max = cur
    })

    return max > 0 ? max : 0
}