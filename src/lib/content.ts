// Content Management System for América 133
export type Language = 'es' | 'en';

export interface ContentSection {
  title: string;
  subtitle?: string;
  description: string;
  cta?: {
    text: string;
    action: string;
  };
}

export interface HeroContent extends ContentSection {
  backgroundGradient: string;
  animatedElements: Array<{
    position: string;
    color: string;
  }>;
}

export interface ProblemContent {
  title: string;
  problems: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  conclusion: {
    title: string;
    description: string;
  };
}

export interface SolutionContent {
  title: string;
  description: string;
  pillars: Array<{
    icon: string;
    title: string;
    features: string[];
    color: string;
  }>;
  process: Array<{
    number: number;
    title: string;
    time: string;
    color: string;
  }>;
}

export interface ResultsContent {
  title: string;
  results: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  guarantee: {
    title: string;
    description: string;
  };
}

export interface PricingContent {
  title: string;
  description: string;
  plan: {
    name: string;
    duration: string;
    pricing: {
      fixed: string;
      commission: string;
    };
    features: string[];
  };
}

export interface TeamContent {
  title: string;
  description: string;
  members: Array<{
    icon: string;
    name: string;
    role: string;
    description: string;
    color: string;
  }>;
}

export interface ContactContent {
  title: string;
  description: string;
  cta: {
    primary: {
      text: string;
      action: string;
    };
    secondary: {
      text: string;
      action: string;
    };
  };
  disclaimer: string;
}

export interface FooterContent {
  company: {
    name: string;
    tagline: string;
  };
  contact: {
    whatsapp: string;
    email: string;
  };
  copyright: string;
}

export interface SiteContent {
  language: Language;
  hero: HeroContent;
  problem: ProblemContent;
  solution: SolutionContent;
  results: ResultsContent;
  pricing: PricingContent;
  team: TeamContent;
  contact: ContactContent;
  footer: FooterContent;
}

// Spanish Content
export const esContent: SiteContent = {
  language: 'es',
  hero: {
    title: 'América 133',
    subtitle: 'Arquitectos de Sistemas Comerciales Autónomos',
    description: 'No vendemos consultoría. Construimos motores comerciales que se sostienen solos.',
    backgroundGradient: 'from-slate-900 via-slate-800 to-slate-700',
    animatedElements: [
      { position: 'top-10 left-10', color: 'bg-primary' },
      { position: 'top-40 right-10', color: 'bg-accent' },
      { position: 'bottom-10 left-1/2', color: 'bg-pink-500' }
    ],
    cta: {
      text: '🧠 Descubre el Sistema Dual',
      action: 'Hola! Me interesa conocer más sobre el Sistema Dual de Aceleración de América 133. ¿Podrían enviarme más información sobre cómo construyen motores comerciales autónomos?'
    }
  },
  problem: {
    title: '¿Te identificas con esto?',
    problems: [
      {
        icon: '😤',
        title: 'Frustrado con tu sistema actual',
        description: 'Tu empresa depende completamente de ti. Sin ti, las ventas se detienen.'
      },
      {
        icon: '🔄',
        title: 'Ciclo vicioso de control',
        description: 'Quieres crecer pero no puedes delegar porque el sistema no funciona sin ti.'
      },
      {
        icon: '📉',
        title: 'Resultados impredecibles',
        description: 'Las ventas suben y bajan sin razón aparente. No hay sistema que genere resultados consistentes.'
      },
      {
        icon: '⏰',
        title: 'Sin tiempo para visión',
        description: 'Estás tan ocupado "apagando fuegos" que no puedes trabajar EN tu empresa.'
      }
    ],
    conclusion: {
      title: 'El problema no es de ventas. Es de sistema.',
      description: 'Y nosotros no te enseñamos a hacerlo mejor. Lo hacemos por ti.'
    }
  },
  solution: {
    title: '🧠 Sistema Dual de Aceleración',
    description: 'En 6 meses, construimos y entregamos un motor comercial autosuficiente que genera ingresos predecibles sin depender de ti.',
    pillars: [
      {
        icon: '👨‍💼',
        title: '1. Coaching Ejecutivo',
        features: [
          'Sesiones semanales con el CEO/fundador',
          'Diagnóstico y nuevas prácticas',
          'Accountability estructurado',
          'Transformación cultural desde la raíz'
        ],
        color: 'text-blue-800'
      },
      {
        icon: '🎯',
        title: '2. Ejecución Comercial',
        features: [
          'Reclutamiento de equipo remoto',
          'Capacitación con metodología propia',
          'Implementación de CRM y playbooks',
          'Gestión completa por 6 meses'
        ],
        color: 'text-purple-800'
      }
    ],
    process: [
      { number: 1, title: 'Diagnóstico', time: 'Semanas 1-2', color: 'bg-primary' },
      { number: 2, title: 'Diseño', time: 'Semanas 3-4', color: 'bg-accent' },
      { number: 3, title: 'Reclutamiento', time: 'Mes 2', color: 'bg-green-500' },
      { number: 4, title: 'Ejecución', time: 'Meses 3-6', color: 'bg-orange-500' },
      { number: 5, title: 'Entrega', time: 'Mes 6', color: 'bg-red-500' }
    ]
  },
  results: {
    title: 'Resultados que Entregamos',
    results: [
      {
        icon: '📈',
        title: 'Ingresos Predecibles',
        description: 'Motor comercial que genera resultados consistentes mes tras mes.'
      },
      {
        icon: '🎯',
        title: 'Independencia Total',
        description: 'Sistema que funciona sin tu intervención constante.'
      },
      {
        icon: '⚡',
        title: 'Tiempo Liberado',
        description: 'Enfócate en visión y expansión, no en operaciones.'
      },
      {
        icon: '🏆',
        title: 'Cultura Transformada',
        description: 'Liderazgo y ejecución mejorados en toda la organización.'
      }
    ],
    guarantee: {
      title: 'Garantía de Resultados',
      description: 'Operamos bajo una cláusula de no interferencia y con un modelo de éxito compartido. Si no funciona, no cobras.'
    }
  },
  pricing: {
    title: 'Inversión en tu Transformación',
    description: 'Modelo de éxito compartido que alinea nuestros intereses con tus resultados.',
    plan: {
      name: 'Sistema Dual de Aceleración',
      duration: '6 meses de transformación completa',
      pricing: {
        fixed: '$180,000 - $250,000',
        commission: '10% - 15%'
      },
      features: [
        'Cláusula de no interferencia',
        'Evaluaciones mensuales objetivas',
        'Salida anticipada bajo condiciones definidas',
        'Garantía de resultados'
      ]
    }
  },
  team: {
    title: 'Conoce al Equipo',
    description: 'Socios estratégicos con experiencia complementaria',
    members: [
      {
        icon: '🎯',
        name: 'Aldo Rodríguez',
        role: 'Estratega Principal',
        description: 'Transformación de liderazgo y eliminación de cuellos de botella',
        color: 'text-primary'
      },
      {
        icon: '⚡',
        name: 'Cuauhtémoc Trejo',
        role: 'Jefe de Operaciones',
        description: 'Desempeño del equipo y optimización de procesos de venta',
        color: 'text-accent'
      },
      {
        icon: '🤝',
        name: 'Ricardo López',
        role: 'Relaciones y Contratos',
        description: 'Renovación, expansión y satisfacción del cliente',
        color: 'text-green-400'
      }
    ]
  },
  contact: {
    title: '¿Listo para Transformar tu Empresa?',
    description: 'No pierdas más tiempo con sistemas que no funcionan. Construyamos juntos el motor comercial que tu empresa necesita.',
    cta: {
      primary: {
        text: '📞 Agenda tu Diagnóstico Gratuito',
        action: '¡Hola! Quiero agendar mi diagnóstico gratuito con América 133. Estoy listo para transformar mi empresa y necesito conocer cómo el Sistema Dual puede ayudarme. ¿Podemos programar una reunión?'
      },
      secondary: {
        text: '📧 Contactar Ahora',
        action: 'Hola! Necesito contactar con el equipo de América 133 para conocer más sobre sus servicios. Mi empresa requiere una transformación comercial y creo que ustedes pueden ayudarnos.'
      }
    },
    disclaimer: '* Diagnóstico gratuito incluye análisis de situación actual y propuesta personalizada'
  },
  footer: {
    company: {
      name: 'América 133',
      tagline: 'Arquitectos de Sistemas Comerciales Autónomos'
    },
    contact: {
      whatsapp: '📱 WhatsApp',
      email: '📧 Email'
    },
    copyright: '© 2025 América 133. Todos los derechos reservados.'
  }
};

// English Content
export const enContent: SiteContent = {
  language: 'en',
  hero: {
    title: 'América 133',
    subtitle: 'Autonomous Commercial Systems Architects',
    description: 'We don\'t sell consulting. We build commercial engines that sustain themselves.',
    backgroundGradient: 'from-slate-900 via-slate-800 to-slate-700',
    animatedElements: [
      { position: 'top-10 left-10', color: 'bg-primary' },
      { position: 'top-40 right-10', color: 'bg-accent' },
      { position: 'bottom-10 left-1/2', color: 'bg-pink-500' }
    ],
    cta: {
      text: '🧠 Discover the Dual System',
      action: 'Hello! I\'m interested in learning more about América 133\'s Dual Acceleration System. Could you send me more information about how you build autonomous commercial engines?'
    }
  },
  problem: {
    title: 'Do you identify with this?',
    problems: [
      {
        icon: '😤',
        title: 'Frustrated with your current system',
        description: 'Your company depends completely on you. Without you, sales stop.'
      },
      {
        icon: '🔄',
        title: 'Vicious cycle of control',
        description: 'You want to grow but can\'t delegate because the system doesn\'t work without you.'
      },
      {
        icon: '📉',
        title: 'Unpredictable results',
        description: 'Sales go up and down without apparent reason. There\'s no system that generates consistent results.'
      },
      {
        icon: '⏰',
        title: 'No time for vision',
        description: 'You\'re so busy "putting out fires" that you can\'t work ON your company.'
      }
    ],
    conclusion: {
      title: 'The problem isn\'t sales. It\'s the system.',
      description: 'And we don\'t teach you to do it better. We do it for you.'
    }
  },
  solution: {
    title: '🧠 Dual Acceleration System',
    description: 'In 6 months, we build and deliver a self-sufficient commercial engine that generates predictable income without depending on you.',
    pillars: [
      {
        icon: '👨‍💼',
        title: '1. Executive Coaching',
        features: [
          'Weekly sessions with the CEO/founder',
          'Diagnosis and new practices',
          'Structured accountability',
          'Cultural transformation from the root'
        ],
        color: 'text-blue-800'
      },
      {
        icon: '🎯',
        title: '2. Commercial Execution',
        features: [
          'Remote team recruitment',
          'Training with proprietary methodology',
          'CRM and playbook implementation',
          'Complete management for 6 months'
        ],
        color: 'text-purple-800'
      }
    ],
    process: [
      { number: 1, title: 'Diagnosis', time: 'Weeks 1-2', color: 'bg-primary' },
      { number: 2, title: 'Design', time: 'Weeks 3-4', color: 'bg-accent' },
      { number: 3, title: 'Recruitment', time: 'Month 2', color: 'bg-green-500' },
      { number: 4, title: 'Execution', time: 'Months 3-6', color: 'bg-orange-500' },
      { number: 5, title: 'Delivery', time: 'Month 6', color: 'bg-red-500' }
    ]
  },
  results: {
    title: 'Results We Deliver',
    results: [
      {
        icon: '📈',
        title: 'Predictable Income',
        description: 'Commercial engine that generates consistent results month after month.'
      },
      {
        icon: '🎯',
        title: 'Total Independence',
        description: 'System that works without your constant intervention.'
      },
      {
        icon: '⚡',
        title: 'Freed Time',
        description: 'Focus on vision and expansion, not operations.'
      },
      {
        icon: '🏆',
        title: 'Transformed Culture',
        description: 'Improved leadership and execution throughout the organization.'
      }
    ],
    guarantee: {
      title: 'Results Guarantee',
      description: 'We operate under a non-interference clause and with a shared success model. If it doesn\'t work, you don\'t pay.'
    }
  },
  pricing: {
    title: 'Investment in Your Transformation',
    description: 'Shared success model that aligns our interests with your results.',
    plan: {
      name: 'Dual Acceleration System',
      duration: '6 months of complete transformation',
      pricing: {
        fixed: '$180,000 - $250,000',
        commission: '10% - 15%'
      },
      features: [
        'Non-interference clause',
        'Objective monthly evaluations',
        'Early exit under defined conditions',
        'Results guarantee'
      ]
    }
  },
  team: {
    title: 'Meet the Team',
    description: 'Strategic partners with complementary experience',
    members: [
      {
        icon: '🎯',
        name: 'Aldo Rodríguez',
        role: 'Principal Strategist',
        description: 'Leadership transformation and bottleneck elimination',
        color: 'text-primary'
      },
      {
        icon: '⚡',
        name: 'Cuauhtémoc Trejo',
        role: 'Operations Chief',
        description: 'Team performance and sales process optimization',
        color: 'text-accent'
      },
      {
        icon: '🤝',
        name: 'Ricardo López',
        role: 'Relations & Contracts',
        description: 'Renewal, expansion and customer satisfaction',
        color: 'text-green-400'
      }
    ]
  },
  contact: {
    title: 'Ready to Transform Your Company?',
    description: 'Don\'t waste more time with systems that don\'t work. Let\'s build together the commercial engine your company needs.',
    cta: {
      primary: {
        text: '📞 Schedule Your Free Diagnosis',
        action: 'Hello! I want to schedule my free diagnosis with América 133. I\'m ready to transform my company and need to know how the Dual System can help me. Can we schedule a meeting?'
      },
      secondary: {
        text: '📧 Contact Now',
        action: 'Hello! I need to contact the América 133 team to learn more about their services. My company requires commercial transformation and I think you can help us.'
      }
    },
    disclaimer: '* Free diagnosis includes current situation analysis and personalized proposal'
  },
  footer: {
    company: {
      name: 'América 133',
      tagline: 'Autonomous Commercial Systems Architects'
    },
    contact: {
      whatsapp: '📱 WhatsApp',
      email: '📧 Email'
    },
    copyright: '© 2025 América 133. All rights reserved.'
  }
};

// Content management functions
export const getContent = (language: Language): SiteContent => {
  return language === 'en' ? enContent : esContent;
};

export const switchLanguage = (currentLanguage: Language): Language => {
  return currentLanguage === 'es' ? 'en' : 'es';
}; 