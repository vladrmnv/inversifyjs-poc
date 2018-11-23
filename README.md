## Notes

* Can we avoid ciclycal dependencies?

* `inTransientScope` will always create a new instance of the dependency. `inSingletonScope` will returned cached instance
* Bindings that return functions will always be in singleton scope
* Supports `@optional` dependencies with default values
* Multiple berndings selected by `@tagged`, `@named` or default
* Hierarchical DI support
* 