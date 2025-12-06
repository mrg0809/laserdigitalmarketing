# Cómo Reemplazar el Logo

Para usar su propio logo de Marketing Láser Digital:

1. Guarde su logo en el directorio `public/` con el nombre `logo.svg` o `logo.png`
2. Si usa un formato PNG o JPG, actualice las referencias en `app/app.vue`:
   - Busque `/logo.svg` 
   - Reemplácelo con `/logo.png` (o la extensión de su archivo)

## Ubicaciones del Logo

El logo aparece en dos lugares:
- **Navegación superior** (línea ~12): `<img src="/logo.svg" ...`
- **Pie de página** (línea ~254): `<img src="/logo.svg" ...`

## Tamaños Recomendados

- **Navegación**: 48x48 píxeles (w-12 h-12)
- **Pie de página**: 40x40 píxeles (w-10 h-10)

Para mejores resultados, use un logo cuadrado con fondo transparente en formato SVG o PNG.
