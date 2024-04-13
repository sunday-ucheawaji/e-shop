export const formatnumber = (digit: number)=>{
    return new Intl.NumberFormat('en-us').format(digit)
}