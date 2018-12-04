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

export function NwModule(options: IModuleOptions) {
  return <T extends { new (...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      public imports?: IModuleConstructor[];
      public providers: interfaces.ContainerModuleCallBack;
      constructor(...args: any[]) {
        super(...args);
        this.imports = options.imports || [];
        this.providers = options.providers || function() {};
      }
      load() {
        return new ContainerModule(this.providers);
      }
    };
  };
}
