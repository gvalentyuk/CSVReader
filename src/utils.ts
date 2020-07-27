export const dateStringToDate = (dateString:string):Date => {
    let arr = dateString.split('/')
        .map((value:string):number => parseInt(value))
    return new Date(arr[2], arr[1]-1, arr[0])
}