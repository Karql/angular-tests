import { NgSubstitute, Arg } from '@angular-tests/testing'
import { RealCalculator, ICalculator } from './samaple-mock.model';

describe('substitute.js', () => {
    it('sample substitute.js', () => {            
        // + can create from the interface
        let mockFromInterface = NgSubstitute.for<ICalculator>();

        // + not call constructor
        // + one line definition
        let mockFromClass = NgSubstitute.for<RealCalculator>();

        // ## stubbing method
        // + nice api
        mockFromClass.add(1,2).returns(4);
        console.log(mockFromClass.add(1,2));
        console.log(mockFromClass.add(2,1)); // check what happen for other

        // ## stubbing property
        // + nice api
        mockFromClass.isEnabled.returns(true);
        console.log(mockFromClass.isEnabled);

        // ## throwing error        
        // https://hackernoon.com/with-typescript-3-and-substitute-js-you-are-already-missing-out-when-mocking-or-faking-a3b3240c4607 by this article it is possible to use returns with lambda BUT it does not
        // - mimicks workaround with ugly lambda
        mockFromClass.divide(2, 0).mimicks(() => { throw new Error() });
        try {
            mockFromClass.divide(2,0);
        }
        catch {
            console.log('throw correctly');
        }

        // ## calls count
        // error when check method is not is not last called method
        //console.log(mockFromClass.received(1).add(2,1));
        mockFromClass.received(1).divide(2,0);

        // ## matching arguments
        mockFromClass.subtract(4, Arg.is(x => x >= 10)).returns(8);
        mockFromClass.subtract(4, Arg.any()).returns(4);
        //mockFromClass.subtract(Arg.all()).returns(1);
        console.log(mockFromClass.subtract(4,10));
        console.log(mockFromClass.subtract(4,1));
        console.log(mockFromClass.subtract(2,1));
    });
})