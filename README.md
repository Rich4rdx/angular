# 📝 Lista de tareas: comunicación entre componentes

Lista de tareas en Angular para practicar cómo se comunican un componente **padre** y un componente **hijo**. El hijo captura el texto y lo envía al padre con `@Output` y `EventEmitter`; el padre guarda la lista, la muestra con `*ngFor` y permite eliminar tareas.

![Angular](https://img.shields.io/badge/Angular_16-DD0031?style=flat&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)

## Qué practiqué

- Emitir eventos del hijo al padre con `@Output()` y `EventEmitter`
- Enlace de datos bidireccional con `[(ngModel)]`
- Renderizado de listas con `*ngFor` y uso del índice para eliminar elementos
- Validación sencilla para no agregar tareas vacías

## Estructura

```
src/app/componentes/
├── padre/   → Guarda la lista de tareas, la muestra y elimina
└── hijo/    → Campo de texto que emite la nueva tarea
```

## Cómo ejecutarlo

```bash
npm install
npx ng serve
```

Abre http://localhost:4200.

## Autor

**Richard**: [github.com/Rich4rdx](https://github.com/Rich4rdx)
