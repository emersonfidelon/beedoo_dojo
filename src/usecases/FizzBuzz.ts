class FizzBuzz {
    verificaNumeroDivisivel(number: number) {
        let result = '';
        
        /*Lista de múltiplos que devem ser substituídos por suas respectivas chaves
        Caso o  número seja múltiplo de mais de um dos números listados simultaneamente
        as chaves seram concatenadas na ordem em que aparecem abaixo
        */
        let keywords = [{value: 3, key: 'Fizz'}, {value: 5, key: 'Buzz'} ];
        
        keywords.map(keyword => {
            number % keyword.value === 0 ? result += keyword.key : 0;
        })
        
        //Verifica se o número não é múltiplo de nenhuma dos números informados em keywords
        return result === '' ? number : result            
    }
}

export { FizzBuzz }
