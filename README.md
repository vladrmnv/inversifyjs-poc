## Notes

* Can we avoid ciclyc dependencies?

Cyclic dependencies are bad. If you find that components are in a cycle with each other, there are three things you can do:

Repackage them so they are no longer mutually dependent
Combine them into a single component
Think of them as if there were a single component

When using classes as di tokens, inversify will throw an error if a cyclic dependency detected

* autoBindInjectable will bind @injectable decorated class on `container.get(UnboundClass)`
* Container modules
* `inTransientScope` will always create a new instance of the dependency. `inSingletonScope` will returned cached instance
* Bindings that return functions will always be in singleton scope
* Supports `@optional` dependencies with default values
* Multiple berndings selected by `@tagged`, `@named` or default
* Hierarchical DI support

## Notable utilities

inversify-binding-decorators utility and shorthand decorators 