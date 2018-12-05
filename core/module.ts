import { Type } from './type';

export interface IModule {
  imports: Type<any>[];
  providers: Type<any>[];
}

export interface IModuleOptions {
  imports?: Type<any>[];
  providers?: Type<any>[];
}

export type IModuleConstructor = new () => IModule;

export function NwModule(options?: IModuleOptions) {
  return <TBase extends Type>(baseConstructor: TBase) => {
    return class extends baseConstructor implements IModule {
      public imports: IModuleConstructor[];
      public providers: Type[];
      constructor(...args: any[]) {
        super(...args);
        this.imports = [];
        this.providers = [];
        if (options) {
          this.imports = options.imports ? options.imports : [];
          this.providers = options.providers ? options.providers : [];
        }
      }
    };
  };
}
