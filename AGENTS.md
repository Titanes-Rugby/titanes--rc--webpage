# AGENTS Rules

## Objetivo
Este documento define reglas base de arquitectura y mantenimiento para el proyecto.

## Estructura de carpetas
Mantener la organización principal bajo estas carpetas:

1. `src/pages/`
2. `src/features/`
3. `src/components/`
4. `src/configs/`

## Reglas de organización

1. Cada nueva pantalla debe vivir en `src/pages/`.
2. La lógica de negocio por dominio debe vivir en `src/features/`.
3. Componentes reutilizables y UI compartida deben vivir en `src/components/`.
4. Configuración global (constantes, env mapping, settings de app) debe vivir en `src/configs/`.
5. Evitar mezclar lógica de `features` dentro de `components` genéricos.
6. Mantener componentes desacoplados y con responsabilidades claras.

## Regla de tamaño de archivos

1. Ningún archivo de código puede superar **150 líneas**.
2. Si un archivo crece más de 150 líneas, dividir en:
- subcomponentes
- hooks
- utilidades
- archivos de configuración por módulo

## Convenciones de implementación

1. Preferir composición sobre archivos monolíticos.
2. Evitar duplicación; extraer utilidades compartidas.
3. Mantener nombres explícitos y consistentes con dominio y carpeta.
4. Antes de crear nuevos archivos, verificar si ya existe uno reutilizable.
