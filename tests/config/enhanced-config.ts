// 🎯 Configuración centralizada para Relke QA Challenge
// Implementa principios Clean Code: Single Source of Truth, Configuration Object Pattern

export const TEST_CONFIG = {
  // 🔐 Credenciales de prueba (en prod usaríamos variables de entorno)
  credentials: {
    email: 'qa_junior@relke.cl',
    password: 'Demo123456!'
  },

  // 🏢 Valores por defecto del sistema
  defaults: {
    branch: 'Casa matriz',
    warehouse: 'Principal', 
    currency: 'Pesos',
    quantity: '1'
  },

  // ⏱️ Timeouts configurables por tipo de operación
  timeouts: {
    default: 10000,
    navigation: 15000,
    calculation: 3000,
    formSubmission: 8000,
    networkIdle: 5000
  },

  // 🎯 URLs del sistema (preparado para múltiples entornos)
  urls: {
    base: 'https://demo.relbase.cl',
    login: '/',
    invoices: '/invoices',
    newInvoice: '/invoices/new'
  },

  // 🔍 Selectores organizados por módulo (Page Object Pattern)
  selectors: {
    login: {
      emailInput: 'input[placeholder="Correo Electrónico"]',
      passwordInput: 'input[placeholder="Contraseña"]',
      submitButton: 'button:has-text("Iniciar sesión")'
    },
    
    navigation: {
      navbar: '.navbar-brand',
      salesMenu: 'a:has-text("Ventas")',
      invoicesMenu: 'a:has-text("Notas de venta")',
      newInvoiceButton: '#btn-new-invoice'
    },
    
    form: {
      container: 'form',
      branch: 'select[name*="sucursal"], select[name*="branch"], #branch, #sucursal',
      warehouse: 'select[name*="bodega"], select[name*="warehouse"], #warehouse, #bodega',
      client: 'select[name*="cliente"], select[name*="client"], #client, #cliente',
      currency: 'select[name*="moneda"], select[name*="currency"], #currency, #moneda'
    },
    
    product: {
      addButton: [
        'button:has-text("Agregar producto")',
        'button:has-text("Agregar")',
        '.btn-add-product',
        'a:has-text("Agregar producto")'
      ],
      selector: [
        'select[name*="producto"]',
        'select[name*="product"]',
        '#product',
        '#producto'
      ],
      searchInput: [
        'input[name*="producto"]',
        'input[placeholder*="producto"]',
        'input[placeholder*="Buscar"]'
      ],
      quantity: [
        'input[name*="cantidad"]',
        'input[name*="quantity"]',
        '#quantity',
        '#cantidad'
      ]
    },
    
    validation: {
      errors: [
        '.error',
        '.invalid-feedback', 
        '.field-error',
        '.alert-danger',
        '.error-message'
      ],
      required: [
        ':has-text("requerido")',
        ':has-text("obligatorio")',
        ':has-text("required")'
      ]
    }
  },

  // 📊 Configuración de reportes y debugging
  reporting: {
    screenshotOnFailure: true,
    videoRecording: true,
    tracing: true,
    verbose: true
  }
} as const;

// 🎯 Type definitions para mejor experiencia de desarrollo
export type TestConfig = typeof TEST_CONFIG;
export type SelectorGroup = keyof typeof TEST_CONFIG.selectors;
export type TimeoutType = keyof typeof TEST_CONFIG.timeouts;
