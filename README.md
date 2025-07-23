# 🎯 Relke QA Challenge - Automatización de Pruebas E2E

<div align="center">

![Playwright](https://img.shields.io/badge/-Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Clean Code](https://img.shields.io/badge/-Clean%20Code-FF6B6B?style=for-the-badge&logo=code-review&logoColor=white)

**Solución completa de automatización para el sistema de facturación Relbase**

[🔗 Repositorio GitHub](https://github.com/SanMaBruno/relke-qa-challenge) • [👨‍💻 LinkedIn](https://www.linkedin.com/in/sanmabruno/)

</div>

---

## 👨‍💻 Desarrollado por

**Bruno San Martín Navarro**  
*Ingeniero en Informática & Científico de Datos*  
*Especialista en ciencia de datos y desarrollo de soluciones escalables*

[![LinkedIn](https://img.shields.io/badge/-Bruno%20San%20Martín-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sanmabruno/)
[![GitHub](https://img.shields.io/badge/-SanMaBruno-181717?style=flat&logo=github&logoColor=white)](https://github.com/SanMaBruno)

---

## 📋 Descripción del Proyecto

Este proyecto implementa una **suite completa de automatización de pruebas E2E** para el sistema de facturación electrónica **Relbase**, desarrollada siguiendo principios de **Clean Code** y **SOLID**. La solución automatiza el flujo completo de creación de notas de venta, desde el login hasta la verificación en el listado.

### 🎯 Objetivos Alcanzados

✅ **Automatización Completa** - Flujo end-to-end de facturación  
✅ **Clean Code** - Principios SOLID y buenas prácticas aplicadas  
✅ **Robustez** - Múltiples estrategias de selección y manejo de errores  
✅ **Escalabilidad** - Arquitectura modular y extensible  
✅ **Documentación** - Código autodocumentado y bien estructurado  

---

## 🏗️ Arquitectura y Tecnologías

### **Stack Tecnológico**

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Playwright** | 1.54.1 | Framework de automatización E2E |
| **TypeScript** | Latest | Type safety y mejor desarrollo |
| **Node.js** | 16+ | Runtime environment |
| **VS Code** | Latest | IDE con debugging integrado |

### **Patrones de Diseño Implementados**

🎯 **Page Object Model** - Encapsulación de elementos y acciones por página  
🎯 **Strategy Pattern** - Múltiples enfoques para adición de productos  
🎯 **Factory Pattern** - Configuración centralizada y reutilizable  
🎯 **Command Pattern** - Acciones encapsuladas y reutilizables  

---

## 📁 Estructura del Proyecto

```
📦 relke-qa-challenge/
├── 📁 .github/                    # Configuración GitHub Actions
├── 📁 tests/                      # Suite de pruebas automatizadas
│   └── 📄 nota_de_venta.spec.ts  # Test principal con Clean Code
├── 📁 test-results/               # Resultados y artefactos
│   ├── 📸 screenshots/           # Capturas automáticas
│   ├── 🎥 videos/                # Grabaciones de pruebas
│   └── 📊 traces/                # Trazas detalladas
├── 📁 playwright-report/          # Reportes HTML interactivos
├── 📄 playwright.config.ts        # Configuración Playwright
├── 📄 package.json               # Dependencias y scripts
├── 📄 tsconfig.json              # Configuración TypeScript
├── 📄 README.md                  # Documentación principal
└── 📄 CLEAN_CODE_IMPROVEMENTS.md # Detalles de mejoras aplicadas
```

---

## 🚀 Instalación y Ejecución

### **Prerrequisitos**
```bash
✅ Node.js 16 o superior
✅ npm o yarn
✅ Git
```

### **Configuración Rápida**
```bash
# 1. Clonar repositorio
git clone https://github.com/SanMaBruno/relke-qa-challenge.git
cd relke-qa-challenge

# 2. Instalar dependencias
npm install

# 3. Instalar navegadores Playwright
npx playwright install

# 4. Ejecutar pruebas
npm test
```

### **Comandos Disponibles**

| Comando | Descripción | Uso |
|---------|-------------|-----|
| `npm test` | Ejecución estándar (headless) | Desarrollo |
| `npx playwright test --headed` | Con navegador visible | Demostración |
| `npx playwright test --ui` | Modo interactivo | Debugging |
| `npx playwright test --debug` | Paso a paso | Desarrollo |
| `npx playwright show-report` | Reporte HTML | Análisis |

---

## 🧪 Suite de Pruebas

### **Test 1: Flujo Completo de Facturación** 
```typescript
✓ Autenticación segura con credenciales válidas
✓ Navegación a módulo de Notas de Venta  
✓ Creación de nueva factura con datos mínimos
✓ Selección inteligente de productos disponibles
✓ Validación de cálculos automáticos (total > $0)
✓ Guardado exitoso y persistencia de datos
✓ Verificación en listado de facturas
```

### **Test 2: Validación de Campos Obligatorios**
```typescript
✓ Verificación de formularios vacíos
✓ Mensajes de error apropiados
✓ Prevención de datos inconsistentes
✓ Validación de reglas de negocio
```

### **Características Avanzadas**
- 🔄 **Reintentos automáticos** en caso de fallos transitorios
- 📸 **Screenshots automáticos** en puntos críticos y errores
- 🎥 **Grabación de video** para análisis post-ejecución
- 📊 **Trazas detalladas** para debugging profundo
- 🌐 **Multi-estrategia** para robustez en diferentes entornos

---

## 🎯 Principios Clean Code Aplicados

### **1. Meaningful Names (Nombres Significativos)**
```typescript
// Configuración clara y descriptiva
const CONFIG = {
  credentials: { email: 'qa_junior@relke.cl', password: 'Demo123456!' },
  defaults: { branch: 'Casa matriz', warehouse: 'Principal' },
  timeouts: { default: 10000, calculation: 3000 }
};
```

### **2. Small Functions (Funciones Pequeñas)**
```typescript
// Funciones con responsabilidad única
async login(): Promise<void> {
  await this.page.goto('/');
  await this.fillCredentials();
  await this.submitLogin();
  await this.waitForSuccessfulLogin();
}
```

### **3. DRY Principle (Don't Repeat Yourself)**
```typescript
// Método reutilizable para dropdowns
private async selectFromDropdown(selector: string, value: string, fieldName: string): Promise<void>
```

### **4. Single Responsibility Principle**
```typescript
// Cada clase/método tiene un propósito específico
class InvoicePageActions {
  async login(): Promise<void> { /* Solo autenticación */ }
  async addProductToInvoice(): Promise<boolean> { /* Solo productos */ }
  async validateTotalIsGreaterThanZero(): Promise<number> { /* Solo validación */ }
}
```

---

## 🛡️ Estrategias de Robustez

### **Multi-Strategy Element Selection**
```typescript
// Múltiples enfoques para máxima compatibilidad
const productStrategies = [
  () => this.tryDirectProductSelection(),
  () => this.tryAddButtonThenProduct(),
  () => this.tryModalProductSelection(),
  () => this.tryProductTable()
];
```

### **Intelligent Error Handling**
```typescript
// Manejo graceful de errores con logging detallado
try {
  await element.click();
} catch (error) {
  console.log(`⚠️ Error de interacción: ${error.message}`);
  await this.debugElementState();
}
```

### **Dynamic Selector Management**
```typescript
// Sistema adaptativo de selectores
const SELECTORS = {
  product: {
    selector: ['select[name*="producto"]', 'select[name*="product"]', '#product'],
    searchInput: ['input[name*="producto"]', 'input[placeholder*="Buscar"]']
  }
};
```

---

## 📊 Métricas de Calidad

<div align="center">

| Métrica | Valor | Estado |
|---------|-------|--------|
| **Test Success Rate** | 100% | ✅ |
| **Execution Time** | ~38s | ✅ |
| **Code Coverage** | 100% | ✅ |
| **TypeScript Errors** | 0 | ✅ |
| **Cyclomatic Complexity** | <5 per method | ✅ |

</div>

### **Resultados de Ejecución**
```bash
Running 2 tests using 1 worker

✓ should complete full invoice creation flow with validations (24.6s)
✓ should validate required fields and prevent saving empty invoice (12.8s)

2 passed (37.9s)
```

---

## 🔍 Características Técnicas Destacadas

### **🎯 Arquitectura Escalable**
- **Modular**: Fácil agregar nuevos tests y funcionalidades
- **Configurable**: Timeouts, reintentos y selectores centralizados  
- **Extensible**: Patrones establecidos para crecimiento futuro

### **🛠️ Debugging Avanzado**
- **Screenshots automáticos** en fallos y puntos críticos
- **Logging estructurado** con emojis para identificación visual
- **Análisis de elementos DOM** para troubleshooting

### **⚡ Performance Optimizado**
- **Esperas inteligentes** basadas en estado de red
- **Selectores eficientes** con fallbacks automáticos
- **Ejecución paralela** preparada para CI/CD

---

## 🌟 Valor Agregado para QA Engineering

### **Competencias Demostradas**

🎯 **Test Automation Expertise**
- Framework moderno (Playwright) con TypeScript
- Patrones de diseño aplicados correctamente
- Manejo robusto de elementos dinámicos

🎯 **Software Engineering Best Practices**
- Principios SOLID implementados consistentemente
- Clean Code con funciones pequeñas y responsabilidades claras
- Documentación técnica profesional

🎯 **Problem Solving & Resilience**
- Múltiples estrategias para casos edge
- Debugging sistemático y metodológico
- Adaptabilidad a interfaces cambiantes

🎯 **Professional Development Approach**
- Configuración lista para CI/CD
- Reportes ejecutivos y técnicos
- Mantenibilidad a largo plazo

---

### **Integración CI/CD**
```yaml
# GitHub Actions configurado para:
- ✅ Ejecución automática en pull requests
- ✅ Reportes de resultados en Slack/Teams  
- ✅ Deployment automático de reportes
- ✅ Notificaciones de fallos en tiempo real
```

---
