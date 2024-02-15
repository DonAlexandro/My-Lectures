import _ from "lodash";

// The approach we're using here is called module augmentation. Find details here: https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
// We're extending interfaces in existing modules by redefining them and adding extra methods.
// In our case we should augment LoDashStatic for static usage and LoDashExplicitWrapper for chain usage. Read more about lodash's chain: https://lodash.com/docs/4.17.15#chain
// To use this module, you should first import lodash as usual: import _ from 'lodash' and then import our module: import './presenter'
declare module "lodash" {
  interface LoDashStatic {
    sanitize: typeof sanitize;
    preventNaN: typeof preventNaN;
    toSafeNumber: typeof toSafeNumber;
    calculateMinimum: typeof calculateMinimum;
    calculateMaximum: typeof calculateMaximum;
  }

  interface LoDashExplicitWrapper<TValue> {
    sanitize(): LoDashExplicitWrapper<TValue>;
    preventNaN(): LoDashExplicitWrapper<TValue>;
    toSafeNumber(): LoDashExplicitWrapper<TValue>;
    calculateMinimum(min?: number): LoDashExplicitWrapper<TValue>;
    calculateMaximum(max?: number): LoDashExplicitWrapper<TValue>;
  }
}

const sanitize = (value: string) => String(value).replace(/[^0-9.-]/g, "");

const preventNaN = (value: number) => (Number.isNaN(value) ? 0 : value);

const calculateMinimum = (value: number, min?: number) =>
  _.isUndefined(min) ? value : Math.max(value, min);

const calculateMaximum = (value: number, max?: number) =>
  _.isUndefined(max) ? value : Math.min(value, max);

const toSafeNumber = (value: string) => preventNaN(_.toNumber(value));

_.mixin({
  sanitize,
  preventNaN,
  calculateMinimum,
  calculateMaximum,
  toSafeNumber,
});
