/**
 * Page Object Model y configuraciones para los tests de Nota de Venta
 * Este archivo centraliza los selectores y configuraciones para mantener el código DRY
 */

export const CREDENTIALS = {
  email: 'qa_junior@relke.cl',
  password: 'Demo123456!'
} as const;

export const EXPECTED_VALUES = {
  branch: 'Casa matriz',
  warehouse: 'Principal',
  currency: 'Pesos'
} as const;

export const SELECTORS = {
  // Login page
  emailInput: 'input[placeholder="Correo Electrónico"], input[name="email"]',
  passwordInput: 'input[placeholder="Contraseña"], input[name="password"]',
  loginButton: 'button:has-text("Iniciar sesión"), button[type="submit"]',
  
  // Navigation
  navbar: '.navbar-brand',
  salesMenu: 'a:has-text("Ventas")',
  invoicesMenu: 'a:has-text("Notas de venta")',
  
  // Invoice list page
  newInvoiceButton: '#btn-new-invoice, button:has-text("Crear"), button:has-text("Nueva")',
  showText: 'text=Mostrar:',
  
  // Invoice form
  form: 'form',
  branchSelect: 'select[name*="sucursal"], select[name*="branch"], #branch, #sucursal',
  warehouseSelect: 'select[name*="bodega"], select[name*="warehouse"], #warehouse, #bodega',
  clientSelect: 'select[name*="cliente"], select[name*="client"], #client, #cliente',
  currencySelect: 'select[name*="moneda"], select[name*="currency"], #currency, #moneda',
  
  // Product section
  addProductButton: 'button:has-text("Agregar producto"), button:has-text("Add product"), .btn-add-product, #add-product',
  productSelect: 'select[name*="producto"], select[name*="product"], #product, #producto',
  productSearch: 'input[name*="producto"], input[name*="product"], input[placeholder*="producto"], input[placeholder*="Buscar producto"]',
  productDropdownItem: '.dropdown-item, .product-item, .autocomplete-item',
  quantityInput: 'input[name*="cantidad"], input[name*="quantity"], #quantity, #cantidad',
  confirmButton: 'button:has-text("Confirmar"), button:has-text("Agregar"), button:has-text("Add")',
  
  // Total and save
  totalElements: [
    '[id*="total"], [class*="total"]',
    'input[name*="total"]',
    '.invoice-total, .total-amount',
    'span:has-text("Total"), div:has-text("Total")'
  ],
  saveButton: 'button:has-text("Guardar"), button:has-text("Save"), .btn-save, #save',
  
  // Success and error messages
  successMessages: [
    '.alert-success, .success-message',
    ':has-text("guardado"), :has-text("creado"), :has-text("saved")'
  ],
  errorMessages: [
    '.error, .invalid-feedback, .field-error',
    '.alert-danger, .error-message',
    ':has-text("requerido"), :has-text("obligatorio"), :has-text("required")'
  ],
  warningMessages: [
    ':has-text("producto"), :has-text("item")',
    '.alert-warning, .warning-message'
  ],
  
  // Tables and lists
  tableFirstRow: 'table tbody tr:first-child'
} as const;

export const TIMEOUTS = {
  default: 10000,
  navigation: 30000,
  calculation: 2000,
  retry: 3000
} as const;
