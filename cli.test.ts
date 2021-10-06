import { runTheCoolestCLI } from "./cli"
import { INTRO_PHRASE } from "./copy"

describe('the CLI should', () => {
  

    describe('have an introductory phrase', () => {
        it('should say',()=>{
            expect(INTRO_PHRASE).toBe('Hi, what is your name?')
        })
    })
    
})
