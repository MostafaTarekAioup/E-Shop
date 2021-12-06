export const currencyFormater =(number)=>{

    let newCurrency = new Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'USD'
    }).format(number/100)
    return newCurrency
}