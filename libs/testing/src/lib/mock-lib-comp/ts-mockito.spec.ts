import { mock, instance, when, verify, anything, between } from 'ts-mockito'
import { RealCalculator, ICalculator } from './samaple-mock.model';

describe('substitute.js', () => {
    it('sample substitute.js', () => {
        // - many methods to import

        // - cannot create from interface
        // let mockFromInterfaceSetup = mock(ICalculator);

        // - two lines definition mocked instance is undedr instance();        
        let mockFromClassSetup = mock(RealCalculator);        
        let mockFromClass = instance(mockFromClassSetup);        

        // ## stubbing method
        when(mockFromClassSetup.add(1,2)).thenReturn(4);
        console.log(mockFromClass.add(1,2));
        console.log(mockFromClass.add(2,1)); // check what happen for other

        // ## stubbing property
        when(mockFromClassSetup.isEnabled).thenReturn(true);
        console.log(mockFromClass.isEnabled);

        // ## throwing error
        when(mockFromClassSetup.divide(2,0)).thenThrow(new Error('divided by zero'));
        try {
            mockFromClass.divide(2,0);
        }
        catch {
            console.log('throw correctly');
        }

        // ## calls count
        verify(mockFromClassSetup.add(1,2)).once();

        // ## matching arguments
        // - syntax (many methods to test arguments)
        when(mockFromClassSetup.add(4,between(10, 100000))).thenReturn(8);
        when(mockFromClassSetup.add(4,anything())).thenReturn(4);
                
        console.log(mockFromClass.subtract(4,10));
        console.log(mockFromClass.subtract(4,1));
        console.log(mockFromClass.subtract(2,1));
    });
})