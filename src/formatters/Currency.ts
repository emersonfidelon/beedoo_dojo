const CurrencyFormatter = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  })

export default CurrencyFormatter;  
  