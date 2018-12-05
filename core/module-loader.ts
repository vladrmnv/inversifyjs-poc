import { ContainerModule } from 'inversify';
import { IModuleConstructor } from './module';
import { uniqBy, isEmpty } from 'lodash';
import { Type } from './type';

export interface IModuleLoader {
  load(...modules: IModuleConstructor[]): ContainerModule[];
}

export class ModuleLoader implements IModuleLoader {
  load(...moduleConstructors: Type<any>[]): ContainerModule[] {
    // TODO: add heirarchy
    const moduleLoaders = uniqBy(
      this.unwrapModules(moduleConstructors),
      'name'
    );
    const modules: ContainerModule[] = moduleLoaders.map(Module => {
      const dependecyModule = new Module();
      return new ContainerModule(bind => {
        dependecyModule.providers.forEach(provider => {
          bind(provider).toSelf();
        });
      });
    });

    return modules;
  }

  private unwrapModules(modules: IModuleConstructor[]) {
    const dependencyList: IModuleConstructor[] = [];
    modules.forEach(Module => {
      dependencyList.push(Module);
      const currentModule = new Module();
      if (!isEmpty(currentModule.imports)) {
        const dependencies = this.unwrapModules(<IModuleConstructor[]>(
          currentModule.imports
        ));
        dependencyList.push(...dependencies);
      }
    });
    return dependencyList;
  }
}
