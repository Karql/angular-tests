import * as TypeMoq from "typemoq";
import { RealCalculator, ICalculator } from './samaple-mock.model';

describe('substitute.js', () => {
    it('sample substitute.js', () => {
        // - cannot create from interface
        //let mockFromInterfaceSetup = TypeMoq.Mock.ofType(ICalculator);

        // - call constructor (could execute not wanted logic)
        // - two lines definition mocked instance is undedr .object;        
        let mockFromClassSetup = TypeMoq.Mock.ofType(RealCalculator);
        let mockFromClass = mockFromClassSetup.object;

        // ## stubbing method
        // - need to use lambda for return simple value
        mockFromClassSetup.setup(x => x.add(1,2)).returns(() => 4)
        console.log(mockFromClass.add(1,2));
        console.log(mockFromClass.add(2,1)); // check what happen for other

        // ## stubbing property
        // - need to use lambda for return simple value
        mockFromClassSetup.setup(x => x.isEnabled).returns(() => true)
        console.log(mockFromClass.isEnabled);

        // ## throwing error
        mockFromClassSetup.setup(x => x.divide(2,0)).throws(new Error('divided by zero'));
        try {
            mockFromClass.divide(2,0);
        }
        catch {
            console.log('throw correctly');
        }

        // ## calls count
        // - syntax
        mockFromClassSetup.verify(x => x.add(1,2), TypeMoq.Times.once());

        // ## matching arguments
        // - syntax
        mockFromClassSetup.setup(x => x.subtract(4, TypeMoq.It.is(y => y >= 10))).returns(() => 8);
        mockFromClassSetup.setup(x => x.subtract(4, TypeMoq.It.isAny())).returns(() => 4);
                
        console.log(mockFromClass.subtract(4,10));
        console.log(mockFromClass.subtract(4,1));
        console.log(mockFromClass.subtract(2,1));
    });
})