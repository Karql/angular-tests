import Substitute, { SubstituteOf } from '@fluffy-spoon/substitute';
import { ObjectSubstitute, OmitProxyMethods, DisabledSubstituteObject } from '@fluffy-spoon/substitute/dist/src/Transformations';

export class NgSubstitute {
    static for<T>(): SubstituteOf<T> {
        let substitute = Substitute.for<T>();

        // For angular JIT compilation
        // For more information read https://github.com/ffMathy/FluffySpoon.JavaScript.Testing.Faking/issues/27#issuecomment-484527858
        substitute['__anonymousType'].returns('SubstituteJSFake');

        return substitute;
    }
    static disableFor<T extends ObjectSubstitute<OmitProxyMethods<any>>>(substitute: T): DisabledSubstituteObject<T> {
        return Substitute.disableFor(substitute);
    }
}