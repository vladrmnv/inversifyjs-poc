export interface IModule {
  imports: IModuleConstructor[];
  load(): any;
}

export type IModuleConstructor = new () => IModule;
