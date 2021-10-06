import { runTheCoolestCLI } from "./cli"
import { INTRO_PHRASE } from "./copy"

console.log = jest.fn();

describe('the CLI should', () => {
    

    describe('have an introductory phrase', () => {
        it('should say Hi, what is your name?',()=>{
            expect(INTRO_PHRASE).toBe('Hi, what is your name?')
        })
    })

    describe('run', () => {
        it('should output to the console the intro phrase',()=>{
            runTheCoolestCLI()
            expect(console.log).toHaveBeenCalledWith(INTRO_PHRASE);
        })
    })
    
    
})
