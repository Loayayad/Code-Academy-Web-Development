/*let randomNumbers = [];
const randomNum = () => {

    let randNum = Math.floor(Math.random() * 5);
    if (!randomNumbers.includes(randNum)) {

        randomNumbers.push(randNum);
        return randNum;
    }
    return randomNum();

}
*/

// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
}

function pAequorFactory(number, dna) {
    return {
        specimenNum: number,
        dna: dna,
        mutate() {

            let randomBaseNumber = Math.floor(Math.random() * this.dna.length);
            let randomBase = this.dna[randomBaseNumber];
            let randomMutation = returnRandBase();

            while (randomBase === randomMutation) {
                randomMutation = returnRandBase();
            }
            this.dna[randomBaseNumber] = randomMutation;

            return this.dna;
        },
        comparedDNA(otherDna) {
            const similarities = this.dna.reduce((acc, curr, idx, arr) => {
                if (arr[idx] === otherDna.dna[idx]) {
                    return acc + 1;
                } else {
                    return acc;
                }

            }, 0);
            const percentageOfDna = (similarities / this.dna.length) * 100;
            const percentageTo2Deci = percentOfDNAshared.toFixed(2);
            console.log(`${this.specimanNum} and ${otherOrg.specimanNum} have ${percentageTo2Deci}% DNA in common.`);
        },
        willLikelySurvive() {

            const numCOrG = this.dna.filter(letter => letter === "C" || letter === "G");
            return numCOrG.length / this.dna.length >= 0.6;
        },

    }
};

const surviveSpecimen = [];
let idCount = 1;

while (surviveSpecimen.length < 30) {

    let newDna = pAequorFactory(idCount, mockUpStrand());
    if (newDna.willLikelySurvive()) {
        surviveSpecimen.push(newDna);
    }
    idCount++;
}

console.log(surviveSpecimen);
//console.log(mockUpStrand());




