/**
 * Configuración del panel del webinar de ARKAI. La plantilla
 * `panel-fuente.html` no sabe de qué grupo se trata: todo vive aquí.
 *
 * No hay Google Sheets: un workflow de n8n ("ZEBRA | ARKAI | Panel webinar
 * · datos") consulta Kommo en cada lectura y devuelve los leads que entraron a
 * la etapa webinar (embudo Liner IA) desde el 1 oct, con su asesor del
 * glosario "Arkai"."09_glosario_asesores_arkai". El panel lo pide cada minuto.
 */

const GRUPOS = [
  {
    id: "arkai",
    salida: ".",
    titulo: "Webinar ARKAI",
    marca: "AK",
    subtitulo: "27 oct 2026 · 6:30 PM",
    archivo: "Kommo · etapa webinar (Liner IA)",
    hora: "6:30 PM",
    api: "https://n8n-n8n.9qd6cz.easypanel.host/webhook/arkai-webinar?k=18c39532228d6fac46d3c657",
    fuenteNombre: "Kommo · etapa webinar",
    etiquetaRegistros: "Registros al webinar",
    // Leads de 02_entrada_leads_arkai con Estrategia = Webinar (formulario del webinar).
    etiquetaFormulario: "Leads del formulario WEBINAR",
    claveLocal: "webinar-arkai-objetivos",
    // Vista "Reporte": el machote del reporte de métricas de webinars (pauta de Meta incluida).
    reporte: true,
    // Desde cuándo suma la pauta de Meta (lo mismo que el since de "Pauta Meta" en n8n).
    pautaDesde: "1 oct",
    // Presupuesto de pauta del webinar, en MXN.
    presupuesto: 40000,
    asesoresPorId: {
      15955947: "Samantha Amor (Brokers)", // brokers: cuenta en el webinar aunque sus leads estén en Reingreso
      15958871: "Alejandra Gonzalez",
      15958879: "Jose Ambrosio",
      15958895: "Normig Zoghbi",
      15958903: "Claudia Proclama",
      15958907: "Mariana Chiñas",
      15981995: "Bernardo Elizondo", // registros externos del formulario de Google; sin meta
    },
    // Fechas en dd/mm/aaaa. Las metas van por nombre del asesor.
    // Fecha, objetivo y metas son provisionales: se ajustan desde el panel (Objetivos).
    evento: {
      anio: "2026",
      objetivo: 100,
      fechaInicio: "22/10/2026",
      fechaWebinar: "27/10/2026",
      asesores: [
        { id: "15955947", nombre: "Samantha Amor (Brokers)" }, // sin meta propia
        { id: "15958871", nombre: "Alejandra Gonzalez" },
        { id: "15958879", nombre: "Jose Ambrosio" },
        { id: "15958895", nombre: "Normig Zoghbi" },
        { id: "15958903", nombre: "Claudia Proclama" },
        { id: "15958907", nombre: "Mariana Chiñas" },
        { id: "15981995", nombre: "Bernardo Elizondo" }, // sin meta propia (registros externos)
      ],
      metas: {
        "Alejandra Gonzalez": 20,
        "Jose Ambrosio": 20,
        "Normig Zoghbi": 20,
        "Claudia Proclama": 20,
        "Mariana Chiñas": 20,
      },
    },
    hojas: [
      { nombre: "General", rol: "general" },
      { nombre: "Registros", rol: "registros" },
      { nombre: "Formulario WEBINAR", rol: "formulario" },
      // Respuestas del formulario de Google del webinar (hoja "Arkai | Registro Webinar | Oct 2026").
      // Suman al total los que no estén ya contados por la etapa WEBINAR de Kommo.
      { nombre: "Registros externos", rol: "externos" },
      // Formulario de brokers ("Brokers - Arkai Resorts"): brokers y clientes de brokers.
      // No entran a Kommo; todos suman al total y van con Samantha Amor (Brokers).
      { nombre: "Brokers", rol: "brokers" },
    ],
  },
];

module.exports = { GRUPOS };
