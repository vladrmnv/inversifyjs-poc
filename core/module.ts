import { interfaces, ContainerModule } from 'inversify';

export interface IModule {
  imports?: IModuleConstructor[];
  load(): any;
}

export interface IModuleOptions {
  imports?: IModuleConstructor[];
  providers?: interfaces.ContainerModuleCallBack;
}

export type IModuleConstructor = new () => IModule;

export function NwModule (options: IModuleOptions) {
  return <T extends { new (...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      imports = options.imports;
      load() {
        const providers = options.providers || function() {};
        return new ContainerModule(providers);
      }
    };
  };
};
