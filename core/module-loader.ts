import { ContainerModule } from 'inversify';
import { IModuleConstructor } from './module';
import { uniqBy, isEmpty } from 'lodash';

export interface IModuleLoader {
  load(...modules: IModuleConstructor[]): ContainerModule[];
}

export class ModuleLoader implements IModuleLoader {
  load(...moduleConstructors: IModuleConstructor[]): ContainerModule[] {
    // TODO: add heirarchy
    const moduleLoaders = uniqBy(
      this.unwrapModules(moduleConstructors),
      'name'
    );
    console.log(moduleLoaders);
    const modules = moduleLoaders.map(Module => new Module().load());

    return modules;
  }

  unwrapModules(modules: IModuleConstructor[]) {
    const results: IModuleConstructor[] = [];
    modules.forEach(Module => {
      results.push(Module);
      const currentModule = new Module();
      if (!isEmpty(currentModule.imports)) {
        const dependencies = this.unwrapModules(currentModule.imports);
        results.push(...dependencies);
      }
    });
    return results;
  }
}
