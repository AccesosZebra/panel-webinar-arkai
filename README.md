# Panel del webinar · ARKAI

Avance en vivo de los registros al webinar de ARKAI.
Lo que está en la raíz se publica en GitHub Pages.

La página es un solo archivo estático. Cada 60 segundos pide los registros a un
endpoint de n8n (`ZEBRA | ARKAI | Panel webinar · datos`), que consulta
Kommo (arkai.kommo.com) en ese momento: cada lead que entró a la etapa webinar
del embudo Liner IA desde el 1 oct 2026 (con su nombre, campaña y atribución)
y `"Arkai"."09_glosario_asesores_arkai"` para el nombre del asesor. Nada se
copia ni se guarda aquí: un lead que se mueve a webinar aparece en el panel al
minuto siguiente, y sigue contando aunque después cambie de etapa.

Aparte, la tabla **Formulario WEBINAR** lista los leads que llegaron por el
formulario del webinar: los de `"Arkai"."02_entrada_leads_arkai"` con
Estrategia = Webinar. Se miden por separado y no suman al objetivo de
registros.

La vista **Reporte** sigue el machote del reporte de métricas de webinars:
resumen general, análisis por asesor e inversión. La inversión sale de Meta
Ads (cuenta Arkai Resorts, campañas con "WEBINAR" en el nombre desde el 1 oct;
n8n la guarda 15 minutos). ARKAI todavía no tiene tabla de difusiones, así que
esa sección queda vacía, igual que asistencias y apartados.

## Regenerar

    cd src && node build-web.js

Luego `git add -A && git commit && git push`. Solo hace falta si cambias el
diseño o `src/grupos.js` (objetivo, fechas, asesores, metas).
