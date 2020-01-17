
class Calc {
    add(numbers) {
        if (!numbers) {
            return 0
        }

        if (+numbers <= 0) {
            throw new Error('negatives not allowed')
        }


        let numbers2 = numbers.split(',')
        return numbers2.reduce((acc, el) => {
            return +acc + +el
        })

    }
}

module.exports = Calc;