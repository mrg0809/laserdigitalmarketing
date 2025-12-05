<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
    <NuxtRouteAnnouncer />
    
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-cyan-500/20">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <!-- Logo SVG -->
            <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span class="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Marketing Láser Digital
            </span>
          </div>
          <div class="hidden md:flex space-x-6">
            <a href="#inicio" class="hover:text-cyan-400 transition-colors">Inicio</a>
            <a href="#servicios" class="hover:text-cyan-400 transition-colors">Servicios</a>
            <a href="#paquetes" class="hover:text-cyan-400 transition-colors">Paquetes</a>
            <a href="#contacto" class="hover:text-cyan-400 transition-colors">Contacto</a>
          </div>
          <UButton color="primary" variant="solid" size="lg" class="hidden md:block">
            Comenzar
          </UButton>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="inicio" class="pt-32 pb-20 px-4 relative overflow-hidden">
      <!-- Animated background elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      </div>
      
      <div class="container mx-auto relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span class="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Marketing del Futuro
            </span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in" style="animation-delay: 0.2s;">
            Impulsamos tu marca con tecnología láser y estrategias digitales de última generación
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style="animation-delay: 0.4s;">
            <UButton color="primary" size="xl" class="text-lg">
              <span class="flex items-center gap-2">
                Solicitar Demo
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </UButton>
            <UButton color="white" variant="outline" size="xl" class="text-lg">
              Ver Servicios
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-20 px-4 bg-gray-900/50">
      <div class="container mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Sobre Nosotros
            </h2>
            <p class="text-gray-300 text-lg mb-4">
              Marketing Láser Digital es una agencia de vanguardia especializada en transformar marcas mediante 
              estrategias digitales innovadoras y tecnología de punta.
            </p>
            <p class="text-gray-300 text-lg mb-6">
              Nuestro enfoque combina creatividad, datos y tecnología para entregar resultados medibles y 
              experiencias memorables que conectan con tu audiencia.
            </p>
            <div class="grid grid-cols-3 gap-4">
              <div class="text-center p-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
                <div class="text-3xl font-bold text-cyan-400">500+</div>
                <div class="text-sm text-gray-400">Proyectos</div>
              </div>
              <div class="text-center p-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
                <div class="text-3xl font-bold text-cyan-400">98%</div>
                <div class="text-sm text-gray-400">Satisfacción</div>
              </div>
              <div class="text-center p-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
                <div class="text-3xl font-bold text-cyan-400">24/7</div>
                <div class="text-sm text-gray-400">Soporte</div>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center">
              <svg class="w-48 h-48 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="servicios" class="py-20 px-4">
      <div class="container mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Nuestros Servicios
          </h2>
          <p class="text-xl text-gray-400">Soluciones integrales para impulsar tu presencia digital</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.title" 
               class="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-shadow">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-cyan-400">{{ service.title }}</h3>
            <p class="text-gray-400">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Packages Section -->
    <section id="paquetes" class="py-20 px-4 bg-gray-900/50">
      <div class="container mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Paquetes de Marketing
          </h2>
          <p class="text-xl text-gray-400">Elige el plan perfecto para tu negocio</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(pkg, index) in packages" :key="pkg.name" 
               :class="[
                 'p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105',
                 pkg.featured 
                   ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500 shadow-xl shadow-cyan-500/20' 
                   : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50'
               ]">
            <div v-if="pkg.featured" class="inline-block px-4 py-1 rounded-full bg-cyan-500 text-black text-sm font-bold mb-4">
              MÁS POPULAR
            </div>
            <h3 class="text-3xl font-bold mb-2 text-cyan-400">{{ pkg.name }}</h3>
            <div class="mb-6">
              <span class="text-5xl font-bold">{{ pkg.price }}</span>
              <span class="text-gray-400">/mes</span>
            </div>
            <ul class="space-y-3 mb-8">
              <li v-for="feature in pkg.features" :key="feature" class="flex items-start gap-2">
                <svg class="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-300">{{ feature }}</span>
              </li>
            </ul>
            <UButton :color="pkg.featured ? 'primary' : 'white'" :variant="pkg.featured ? 'solid' : 'outline'" block size="lg">
              Seleccionar Plan
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contacto" class="py-20 px-4">
      <div class="container mx-auto max-w-4xl">
        <div class="text-center mb-12">
          <h2 class="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Contáctanos
          </h2>
          <p class="text-xl text-gray-400">Estamos listos para impulsar tu marca al siguiente nivel</p>
        </div>
        
        <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/20 p-8 md:p-12">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium mb-2 text-gray-300">Nombre</label>
                <input 
                  v-model="form.name"
                  type="text" 
                  class="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label class="block text-sm font-medium mb-2 text-gray-300">Email</label>
                <input 
                  v-model="form.email"
                  type="email" 
                  class="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white"
                  placeholder="tu@email.com"
                  required
                />
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium mb-2 text-gray-300">Empresa</label>
              <input 
                v-model="form.company"
                type="text" 
                class="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white"
                placeholder="Nombre de tu empresa"
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2 text-gray-300">Mensaje</label>
              <textarea 
                v-model="form.message"
                rows="5" 
                class="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white"
                placeholder="Cuéntanos sobre tu proyecto..."
                required
              ></textarea>
            </div>
            <UButton type="submit" color="primary" size="xl" block>
              <span class="flex items-center justify-center gap-2">
                Enviar Mensaje
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </UButton>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 px-4 bg-gray-900 border-t border-cyan-500/20">
      <div class="container mx-auto">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span class="font-bold text-cyan-400">Marketing Láser</span>
            </div>
            <p class="text-gray-400 text-sm">Transformamos marcas con innovación digital</p>
          </div>
          <div>
            <h4 class="font-bold mb-4 text-cyan-400">Servicios</h4>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li><a href="#" class="hover:text-cyan-400 transition-colors">Marketing Digital</a></li>
              <li><a href="#" class="hover:text-cyan-400 transition-colors">SEO & SEM</a></li>
              <li><a href="#" class="hover:text-cyan-400 transition-colors">Redes Sociales</a></li>
              <li><a href="#" class="hover:text-cyan-400 transition-colors">Diseño Web</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-4 text-cyan-400">Empresa</h4>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li><a href="#" class="hover:text-cyan-400 transition-colors">Nosotros</a></li>
              <li><a href="#" class="hover:text-cyan-400 transition-colors">Blog</a></li>
              <li><a href="#" class="hover:text-cyan-400 transition-colors">Casos de Éxito</a></li>
              <li><a href="#" class="hover:text-cyan-400 transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-4 text-cyan-400">Síguenos</h4>
            <div class="flex gap-3">
              <a href="#" class="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center hover:border-cyan-500 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center hover:border-cyan-500 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center hover:border-cyan-500 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="text-center pt-8 border-t border-cyan-500/20">
          <p class="text-gray-400 text-sm">© 2024 Marketing Láser Digital. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const services = [
  {
    title: 'Marketing Digital',
    description: 'Estrategias integrales para aumentar tu presencia en línea y alcanzar tus objetivos de negocio.',
    icon: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z'
  },
  {
    title: 'SEO & SEM',
    description: 'Optimización de motores de búsqueda y publicidad digital para maximizar tu visibilidad.',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
  },
  {
    title: 'Redes Sociales',
    description: 'Gestión profesional de tus redes sociales para crear comunidades comprometidas.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    title: 'Diseño Web',
    description: 'Sitios web modernos, responsivos y optimizados para convertir visitantes en clientes.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    title: 'Análisis de Datos',
    description: 'Insights accionables basados en datos para tomar decisiones informadas.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
  },
  {
    title: 'Branding',
    description: 'Construcción y fortalecimiento de tu identidad de marca en el mundo digital.',
    icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
  }
]

const packages = [
  {
    name: 'Starter',
    price: '$499',
    features: [
      'Gestión de 2 redes sociales',
      '10 publicaciones mensuales',
      'Diseño de contenido básico',
      'Reporte mensual',
      'Soporte por email'
    ],
    featured: false
  },
  {
    name: 'Professional',
    price: '$999',
    features: [
      'Gestión de 4 redes sociales',
      '20 publicaciones mensuales',
      'Diseño de contenido premium',
      'SEO básico',
      'Google Ads (hasta $500)',
      'Reporte quincenal',
      'Soporte prioritario'
    ],
    featured: true
  },
  {
    name: 'Enterprise',
    price: '$1,999',
    features: [
      'Gestión ilimitada de redes',
      'Publicaciones ilimitadas',
      'Diseño y video profesional',
      'SEO avanzado',
      'Google Ads (hasta $2000)',
      'Estrategia personalizada',
      'Reporte semanal',
      'Soporte 24/7'
    ],
    featured: false
  }
]

const form = ref({
  name: '',
  email: '',
  company: '',
  message: ''
})

const handleSubmit = () => {
  alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.')
  form.value = { name: '', email: '', company: '', message: '' }
}
</script>

<style>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
  opacity: 0;
}
</style>
