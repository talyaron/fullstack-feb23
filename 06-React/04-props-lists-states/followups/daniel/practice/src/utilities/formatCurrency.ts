const CURRENCY_FORMAT = new Intl.NumberFormat(undefined,{
    currency:"ILS" , style: "currency"
})

const formatCurrency = (number: number) => {
  return (
    CURRENCY_FORMAT.format(number)
  )
}

export default formatCurrency