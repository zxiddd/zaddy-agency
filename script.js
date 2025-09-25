// Language translations - Expanded to support multiple languages
const translations = {
    en: {
        'nav-pricing': 'See Pricing',
    'nav-signin': 'Sign In',
    'nav-register': 'Register',
        'hero-title': 'All-in-One POS + QR Ordering + Loyalty',
        'hero-subtitle': 'Run your restaurant from one dashboard. Manage orders, print bills, reward customers – without heavy hardware.',
        'hero-trial': 'Start Free Trial',
        'hero-pricing': 'See Pricing',
        'how-title': 'How It Works',
        'step1-title': 'Customer Scans QR',
        'step1-desc': 'Customer scans QR code and sees your digital menu instantly',
        'step2-title': 'Places Order',
        'step2-desc': 'Order is placed and instantly received by waiter and kitchen',
        'step3-title': 'Digital Bill & Rewards',
        'step3-desc': 'Customer gets digital bill and optional scratch card discount',
        'features-title': 'Key Features',
        'feature1-title': 'QR Menu + Ordering',
        'feature1-desc': 'Digital menu with instant ordering',
        'feature2-title': 'POS & Billing',
        'feature2-desc': 'Generate bills and receipts instantly',
        'feature3-title': 'Kitchen Display',
        'feature3-desc': 'Real-time orders with audio alerts',
        'feature4-title': 'Separate Logins',
        'feature4-desc': 'Waiter & kitchen access controls',
        'feature5-title': 'Customer Loyalty',
        'feature5-desc': 'Scratch cards, birthday reminders, discounts',
        'feature6-title': 'Analytics & Reports',
        'feature6-desc': 'Sales, customer data, performance insights',
        'why-title': 'Why Scratchfy?',
        'other1': 'Other apps: Menu only',
        'scratchfy1': 'Scratchfy: POS + Ordering + Loyalty in one app',
        'other2': 'Other apps: Complex setup',
        'scratchfy2': 'Scratchfy: Runs on phone, tablet, or desktop',
        'other3': 'Other apps: High commissions',
        'scratchfy3': 'Scratchfy: Flat monthly fee, 0% commission',
        'pricing-title': 'Simple Pricing',
        'pricing-note': 'No setup fee. Cancel anytime. Auto-renewal available.',
        'testimonials-title': 'What Our Customers Say',
        'testimonial1': '"Scratchfy helped us manage 40% more orders daily"',
        'testimonial2': '"We stopped paying high commissions. Now we own our customers"',
        'cta-title': 'Ready to modernize your restaurant?',
        'cta-button': 'Start Free Trial Today',
        'footer-about': 'About Us',
        'footer-contact': 'Contact',
        'footer-privacy': 'Privacy Policy',
        'footer-terms': 'Terms of Service',
        'footer-copyright': '© 2025 Scratchfy Technologies. All Rights Reserved.'
    },
    ar: {
        'nav-pricing': 'عرض الأسعار',
        'nav-trial': 'ابدأ التجربة المجانية',
        'hero-title': 'نظام نقاط البيع + طلب QR + الولاء الشامل',
        'hero-subtitle': 'أدر مطعمك من لوحة تحكم واحدة. إدارة الطلبات، طباعة الفواتير، مكافأة العملاء - بدون أجهزة ثقيلة.',
        'hero-trial': 'ابدأ التجربة المجانية',
        'hero-pricing': 'عرض الأسعار',
        'how-title': 'كيف يعمل',
        'step1-title': 'العميل يمسح QR',
        'step1-desc': 'العميل يمسح رمز QR ويرى قائمتك الرقمية فوراً',
        'step2-title': 'يضع الطلب',
        'step2-desc': 'يتم وضع الطلب ويستلمه النادل والمطبخ فوراً',
        'step3-title': 'فاتورة رقمية ومكافآت',
        'step3-desc': 'العميل يحصل على فاتورة رقمية وبطاقة خدش اختيارية للخصم',
        'features-title': 'الميزات الرئيسية',
        'feature1-title': 'قائمة QR + الطلب',
        'feature1-desc': 'قائمة رقمية مع طلب فوري',
        'feature2-title': 'نقاط البيع والفوترة',
        'feature2-desc': 'إنشاء فواتير وإيصالات فوراً',
        'feature3-title': 'شاشة المطبخ',
        'feature3-desc': 'طلبات في الوقت الفعلي مع تنبيهات صوتية',
        'feature4-title': 'تسجيلات دخول منفصلة',
        'feature4-desc': 'ضوابط وصول النادل والمطبخ',
        'feature5-title': 'ولاء العملاء',
        'feature5-desc': 'بطاقات خدش، تذكيرات أعياد الميلاد، خصومات',
        'feature6-title': 'التحليلات والتقارير',
        'feature6-desc': 'المبيعات، بيانات العملاء، رؤى الأداء',
        'why-title': 'لماذا سكراتشفاي؟',
        'other1': 'التطبيقات الأخرى: قائمة فقط',
        'scratchfy1': 'سكراتشفاي: نقاط البيع + الطلب + الولاء في تطبيق واحد',
        'other2': 'التطبيقات الأخرى: إعداد معقد',
        'scratchfy2': 'سكراتشفاي: يعمل على الهاتف أو الجهاز اللوحي أو سطح المكتب',
        'other3': 'التطبيقات الأخرى: عمولات عالية',
        'scratchfy3': 'سكراتشفاي: رسوم شهرية ثابتة، 0% عمولة',
        'pricing-title': 'أسعار بسيطة',
        'pricing-note': 'لا توجد رسوم إعداد. إلغاء في أي وقت. التجديد التلقائي متاح.',
        'testimonials-title': 'ماذا يقول عملاؤنا',
        'testimonial1': '"ساعدنا سكراتشفاي في إدارة 40% طلبات أكثر يومياً"',
        'testimonial2': '"توقفنا عن دفع عمولات عالية. الآن نملك عملاءنا"',
        'cta-title': 'مستعد لتحديث مطعمك؟',
        'cta-button': 'ابدأ التجربة المجانية اليوم',
        'footer-about': 'من نحن',
        'footer-contact': 'اتصل بنا',
        'footer-privacy': 'سياسة الخصوصية',
        'footer-terms': 'شروط الخدمة',
        'footer-copyright': '© 2025 تقنيات سكراتشفاي. جميع الحقوق محفوظة.'
    },
    hi: {
        'nav-pricing': 'मूल्य देखें',
        'nav-trial': 'मुफ्त ट्रायल शुरू करें',
        'hero-title': 'ऑल-इन-वन POS + QR ऑर्डरिंग + लॉयल्टी',
        'hero-subtitle': 'एक डैशबोर्ड से अपना रेस्टोरेंट चलाएं। ऑर्डर मैनेज करें, बिल प्रिंट करें, ग्राहकों को रिवार्ड दें - बिना भारी हार्डवेयर के।',
        'hero-trial': 'मुफ्त ट्रायल शुरू करें',
        'hero-pricing': 'मूल्य देखें',
        'how-title': 'यह कैसे काम करता है',
        'step1-title': 'ग्राहक QR स्कैन करता है',
        'step1-desc': 'ग्राहक QR कोड स्कैन करता है और तुरंत आपका डिजिटल मेन्यू देखता है',
        'step2-title': 'ऑर्डर देता है',
        'step2-desc': 'ऑर्डर दिया जाता है और तुरंत वेटर और किचन को मिल जाता है',
        'step3-title': 'डिजिटल बिल और रिवार्ड्स',
        'step3-desc': 'ग्राहक को डिजिटल बिल और वैकल्पिक स्क्रैच कार्ड डिस्काउंट मिलता है',
        'features-title': 'मुख्य विशेषताएं',
        'feature1-title': 'QR मेन्यू + ऑर्डरिंग',
        'feature1-desc': 'तुरंत ऑर्डरिंग के साथ डिजिटल मेन्यू',
        'feature2-title': 'POS और बिलिंग',
        'feature2-desc': 'तुरंत बिल और रसीदें बनाएं',
        'feature3-title': 'किचन डिस्प्ले',
        'feature3-desc': 'ऑडियो अलर्ट के साथ रियल-टाइम ऑर्डर',
        'feature4-title': 'अलग लॉगिन',
        'feature4-desc': 'वेटर और किचन एक्सेस कंट्रोल',
        'feature5-title': 'ग्राहक लॉयल्टी',
        'feature5-desc': 'स्क्रैच कार्ड, जन्मदिन रिमाइंडर, डिस्काउंट',
        'feature6-title': 'एनालिटिक्स और रिपोर्ट्स',
        'feature6-desc': 'सेल्स, ग्राहक डेटा, परफॉर्मेंस इनसाइट्स',
        'why-title': 'स्क्रैचफाई क्यों?',
        'other1': 'अन्य ऐप्स: केवल मेन्यू',
        'scratchfy1': 'स्क्रैचफाई: एक ऐप में POS + ऑर्डरिंग + लॉयल्टी',
        'other2': 'अन्य ऐप्स: जटिल सेटअप',
        'scratchfy2': 'स्क्रैचफाई: फोन, टैबलेट या डेस्कटॉप पर चलता है',
        'other3': 'अन्य ऐप्स: उच्च कमीशन',
        'scratchfy3': 'स्क्रैचफाई: फ्लैट मासिक फीस, 0% कमीशन',
        'pricing-title': 'सरल मूल्य निर्धारण',
        'pricing-note': 'कोई सेटअप फीस नहीं। कभी भी रद्द करें। ऑटो-रिन्यूअल उपलब्ध।',
        'testimonials-title': 'हमारे ग्राहक क्या कहते हैं',
        'testimonial1': '"स्क्रैचफाई ने हमें दैनिक 40% अधिक ऑर्डर मैनेज करने में मदद की"',
        'testimonial2': '"हमने उच्च कमीशन देना बंद कर दिया। अब हम अपने ग्राहकों के मालिक हैं"',
        'cta-title': 'अपने रेस्टोरेंट को आधुनिक बनाने के लिए तैयार हैं?',
        'cta-button': 'आज ही मुफ्त ट्रायल शुरू करें',
        'footer-about': 'हमारे बारे में',
        'footer-contact': 'संपर्क करें',
        'footer-privacy': 'गोपनीयता नीति',
        'footer-terms': 'सेवा की शर्तें',
        'footer-copyright': '© 2025 स्क्रैचफाई टेक्नोलॉजीज। सभी अधिकार सुरक्षित।'
    },
    fr: {
        'nav-pricing': 'Voir les Prix',
        'nav-trial': 'Essai Gratuit',
        'hero-title': 'POS + Commande QR + Fidélité Tout-en-Un',
        'hero-subtitle': 'Gérez votre restaurant depuis un seul tableau de bord. Gérez les commandes, imprimez les factures, récompensez les clients - sans matériel lourd.',
        'hero-trial': 'Essai Gratuit',
        'hero-pricing': 'Voir les Prix',
        'how-title': 'Comment ça marche',
        'step1-title': 'Client scanne le QR',
        'step1-desc': 'Le client scanne le code QR et voit votre menu numérique instantanément',
        'step2-title': 'Passe commande',
        'step2-desc': 'La commande est passée et instantanément reçue par le serveur et la cuisine',
        'step3-title': 'Facture numérique et récompenses',
        'step3-desc': 'Le client reçoit une facture numérique et une carte à gratter optionnelle',
        'features-title': 'Fonctionnalités clés',
        'feature1-title': 'Menu QR + Commande',
        'feature1-desc': 'Menu numérique avec commande instantanée',
        'feature2-title': 'POS et Facturation',
        'feature2-desc': 'Générez factures et reçus instantanément',
        'feature3-title': 'Affichage Cuisine',
        'feature3-desc': 'Commandes en temps réel avec alertes audio',
        'feature4-title': 'Connexions séparées',
        'feature4-desc': 'Contrôles d\'accès serveur et cuisine',
        'feature5-title': 'Fidélité Client',
        'feature5-desc': 'Cartes à gratter, rappels anniversaire, remises',
        'feature6-title': 'Analyses et Rapports',
        'feature6-desc': 'Ventes, données clients, insights performance',
        'why-title': 'Pourquoi Scratchfy?',
        'other1': 'Autres apps: Menu seulement',
        'scratchfy1': 'Scratchfy: POS + Commande + Fidélité en une app',
        'other2': 'Autres apps: Configuration complexe',
        'scratchfy2': 'Scratchfy: Fonctionne sur téléphone, tablette ou ordinateur',
        'other3': 'Autres apps: Commissions élevées',
        'scratchfy3': 'Scratchfy: Frais mensuels fixes, 0% commission',
        'pricing-title': 'Prix Simple',
        'pricing-note': 'Pas de frais d\'installation. Annulez à tout moment. Renouvellement automatique disponible.',
        'testimonials-title': 'Ce que disent nos clients',
        'testimonial1': '"Scratchfy nous a aidés à gérer 40% de commandes en plus par jour"',
        'testimonial2': '"Nous avons arrêté de payer des commissions élevées. Maintenant nous possédons nos clients"',
        'cta-title': 'Prêt à moderniser votre restaurant?',
        'cta-button': 'Commencer l\'essai gratuit aujourd\'hui',
        'footer-about': 'À propos',
        'footer-contact': 'Contact',
        'footer-privacy': 'Politique de confidentialité',
        'footer-terms': 'Conditions de service',
        'footer-copyright': '© 2025 Scratchfy Technologies. Tous droits réservés.'
    },
    es: {
        'nav-pricing': 'Ver Precios',
        'nav-trial': 'Prueba Gratuita',
        'hero-title': 'POS + Pedidos QR + Lealtad Todo-en-Uno',
        'hero-subtitle': 'Administra tu restaurante desde un solo panel. Gestiona pedidos, imprime facturas, recompensa clientes - sin hardware pesado.',
        'hero-trial': 'Prueba Gratuita',
        'hero-pricing': 'Ver Precios',
        'how-title': 'Cómo funciona',
        'step1-title': 'Cliente escanea QR',
        'step1-desc': 'El cliente escanea el código QR y ve tu menú digital al instante',
        'step2-title': 'Hace pedido',
        'step2-desc': 'El pedido se hace y es recibido instantáneamente por el mesero y cocina',
        'step3-title': 'Factura digital y recompensas',
        'step3-desc': 'El cliente recibe factura digital y tarjeta de rasca opcional',
        'features-title': 'Características clave',
        'feature1-title': 'Menú QR + Pedidos',
        'feature1-desc': 'Menú digital con pedidos instantáneos',
        'feature2-title': 'POS y Facturación',
        'feature2-desc': 'Genera facturas y recibos al instante',
        'feature3-title': 'Pantalla de Cocina',
        'feature3-desc': 'Pedidos en tiempo real con alertas de audio',
        'feature4-title': 'Inicios separados',
        'feature4-desc': 'Controles de acceso mesero y cocina',
        'feature5-title': 'Lealtad del Cliente',
        'feature5-desc': 'Tarjetas de rasca, recordatorios de cumpleaños, descuentos',
        'feature6-title': 'Análisis y Reportes',
        'feature6-desc': 'Ventas, datos de clientes, insights de rendimiento',
        'why-title': '¿Por qué Scratchfy?',
        'other1': 'Otras apps: Solo menú',
        'scratchfy1': 'Scratchfy: POS + Pedidos + Lealtad en una app',
        'other2': 'Otras apps: Configuración compleja',
        'scratchfy2': 'Scratchfy: Funciona en teléfono, tablet o escritorio',
        'other3': 'Otras apps: Comisiones altas',
        'scratchfy3': 'Scratchfy: Tarifa mensual fija, 0% comisión',
        'pricing-title': 'Precios Simples',
        'pricing-note': 'Sin tarifa de instalación. Cancela en cualquier momento. Renovación automática disponible.',
        'testimonials-title': 'Lo que dicen nuestros clientes',
        'testimonial1': '"Scratchfy nos ayudó a gestionar 40% más pedidos diarios"',
        'testimonial2': '"Dejamos de pagar comisiones altas. Ahora somos dueños de nuestros clientes"',
        'cta-title': '¿Listo para modernizar tu restaurante?',
        'cta-button': 'Comenzar prueba gratuita hoy',
        'footer-about': 'Acerca de',
        'footer-contact': 'Contacto',
        'footer-privacy': 'Política de privacidad',
        'footer-terms': 'Términos de servicio',
        'footer-copyright': '© 2025 Scratchfy Technologies. Todos los derechos reservados.'
    },
    de: {
        'nav-pricing': 'Preise ansehen',
        'nav-trial': 'Kostenlose Testversion',
        'hero-title': 'All-in-One POS + QR-Bestellung + Treue',
        'hero-subtitle': 'Führen Sie Ihr Restaurant von einem Dashboard aus. Verwalten Sie Bestellungen, drucken Sie Rechnungen, belohnen Sie Kunden - ohne schwere Hardware.',
        'hero-trial': 'Kostenlose Testversion',
        'hero-pricing': 'Preise ansehen',
        'how-title': 'Wie es funktioniert',
        'step1-title': 'Kunde scannt QR',
        'step1-desc': 'Kunde scannt QR-Code und sieht sofort Ihr digitales Menü',
        'step2-title': 'Gibt Bestellung auf',
        'step2-desc': 'Bestellung wird aufgegeben und sofort von Kellner und Küche erhalten',
        'step3-title': 'Digitale Rechnung & Belohnungen',
        'step3-desc': 'Kunde erhält digitale Rechnung und optionale Rubbelkarte',
        'features-title': 'Hauptmerkmale',
        'feature1-title': 'QR-Menü + Bestellung',
        'feature1-desc': 'Digitales Menü mit sofortiger Bestellung',
        'feature2-title': 'POS & Abrechnung',
        'feature2-desc': 'Erstellen Sie sofort Rechnungen und Belege',
        'feature3-title': 'Küchen-Display',
        'feature3-desc': 'Echtzeit-Bestellungen mit Audio-Benachrichtigungen',
        'feature4-title': 'Getrennte Anmeldungen',
        'feature4-desc': 'Kellner- und Küchen-Zugriffskontrollen',
        'feature5-title': 'Kundentreue',
        'feature5-desc': 'Rubbelkarten, Geburtstags-Erinnerungen, Rabatte',
        'feature6-title': 'Analysen & Berichte',
        'feature6-desc': 'Verkäufe, Kundendaten, Leistungseinblicke',
        'why-title': 'Warum Scratchfy?',
        'other1': 'Andere Apps: Nur Menü',
        'scratchfy1': 'Scratchfy: POS + Bestellung + Treue in einer App',
        'other2': 'Andere Apps: Komplexe Einrichtung',
        'scratchfy2': 'Scratchfy: Läuft auf Telefon, Tablet oder Desktop',
        'other3': 'Andere Apps: Hohe Provisionen',
        'scratchfy3': 'Scratchfy: Feste monatliche Gebühr, 0% Provision',
        'pricing-title': 'Einfache Preise',
        'pricing-note': 'Keine Einrichtungsgebühr. Jederzeit kündbar. Auto-Verlängerung verfügbar.',
        'testimonials-title': 'Was unsere Kunden sagen',
        'testimonial1': '"Scratchfy half uns, täglich 40% mehr Bestellungen zu verwalten"',
        'testimonial2': '"Wir hörten auf, hohe Provisionen zu zahlen. Jetzt besitzen wir unsere Kunden"',
        'cta-title': 'Bereit, Ihr Restaurant zu modernisieren?',
        'cta-button': 'Kostenlose Testversion heute starten',
        'footer-about': 'Über uns',
        'footer-contact': 'Kontakt',
        'footer-privacy': 'Datenschutzrichtlinie',
        'footer-terms': 'Nutzungsbedingungen',
        'footer-copyright': '© 2025 Scratchfy Technologies. Alle Rechte vorbehalten.'
    }
};

// Comprehensive country and pricing data
const countryData = {
    'IN': {
        name: 'India',
        flag: '🇮🇳',
        currency: 'INR',
        languages: [
            { code: 'en', name: 'English' },
            { code: 'hi', name: 'हिन्दी' }
        ],
        pricing: {
            basic: { price: 999, period: 'month' },
            pro: { price: 1999, period: 'month' },
            enterprise: { price: 3999, period: 'month' }
        }
    },
    'SA': {
        name: 'Saudi Arabia',
        flag: '🇸🇦',
        currency: 'SAR',
        languages: [
            { code: 'ar', name: 'العربية' },
            { code: 'en', name: 'English' }
        ],
        pricing: {
            basic: { price: 75, period: 'month' },
            pro: { price: 149, period: 'month' },
            enterprise: { price: 299, period: 'month' }
        }
    },
    'US': {
        name: 'United States',
        flag: '🇺🇸',
        currency: 'USD',
        languages: [
            { code: 'en', name: 'English' },
            { code: 'es', name: 'Español' }
        ],
        pricing: {
            basic: { price: 19, period: 'month' },
            pro: { price: 39, period: 'month' },
            enterprise: { price: 79, period: 'month' }
        }
    },
    'GB': {
        name: 'United Kingdom',
        flag: '🇬🇧',
        currency: 'GBP',
        languages: [
            { code: 'en', name: 'English' }
        ],
        pricing: {
            basic: { price: 15, period: 'month' },
            pro: { price: 29, period: 'month' },
            enterprise: { price: 59, period: 'month' }
        }
    },
    'CA': {
        name: 'Canada',
        flag: '🇨🇦',
        currency: 'CAD',
        languages: [
            { code: 'en', name: 'English' },
            { code: 'fr', name: 'Français' }
        ],
        pricing: {
            basic: { price: 25, period: 'month' },
            pro: { price: 49, period: 'month' },
            enterprise: { price: 99, period: 'month' }
        }
    },
    'AU': {
        name: 'Australia',
        flag: '🇦🇺',
        currency: 'AUD',
        languages: [
            { code: 'en', name: 'English' }
        ],
        pricing: {
            basic: { price: 29, period: 'month' },
            pro: { price: 59, period: 'month' },
            enterprise: { price: 119, period: 'month' }
        }
    },
    'DE': {
        name: 'Germany',
        flag: '🇩🇪',
        currency: 'EUR',
        languages: [
            { code: 'de', name: 'Deutsch' },
            { code: 'en', name: 'English' }
        ],
        pricing: {
            basic: { price: 19, period: 'month' },
            pro: { price: 39, period: 'month' },
            enterprise: { price: 79, period: 'month' }
        }
    },
    'FR': {
        name: 'France',
        flag: '🇫🇷',
        currency: 'EUR',
        languages: [
            { code: 'fr', name: 'Français' },
            { code: 'en', name: 'English' }
        ],
        pricing: {
            basic: { price: 19, period: 'month' },
            pro: { price: 39, period: 'month' },
            enterprise: { price: 79, period: 'month' }
        }
    },
    'ES': {
        name: 'Spain',
        flag: '🇪🇸',
        currency: 'EUR',
        languages: [
            { code: 'es', name: 'Español' },
            { code: 'en', name: 'English' }
        ],
        pricing: {
            basic: { price: 19, period: 'month' },
            pro: { price: 39, period: 'month' },
            enterprise: { price: 79, period: 'month' }
        }
    },
    'IT': {
        name: 'Italy',
        flag: '🇮🇹',
        currency: 'EUR',
        languages: [
            { code: 'en', name: 'English' }
        ],
        pricing: {
            basic: { price: 19, period: 'month' },
            pro: { price: 39, period: 'month' },
            enterprise: { price: 79, period: 'month' }
        }
    },
    'NL': {
        name: 'Netherlands',
        flag: '🇳🇱',
        currency: 'EUR',
        languages: [
            { code: 'en', name: 'English' }
        ],
        pricing: {
            basic: { price: 19, period: 'month' },
            pro: { price: 39, period: 'month' },
            enterprise: { price: 79, period: 'month' }
        }
    },
    'SG': {
        name: 'Singapore',
        flag: '🇸🇬',
        currency: 'SGD',
        languages: [
            { code: 'en', name: 'English' }
        ],
        pricing: {
            basic: { price: 29, period: 'month' },
            pro: { price: 59, period: 'month' },
            enterprise: { price: 119, period: 'month' }
        }
    },
    'AE': {
        name: 'United Arab Emirates',
        flag: '🇦🇪',
        currency: 'AED',
        languages: [
            { code: 'ar', name: 'العربية' },
            { code: 'en', name: 'English' }
        ],
        pricing: {
            basic: { price: 75, period: 'month' },
            pro: { price: 149, period: 'month' },
            enterprise: { price: 299, period: 'month' }
        }
    }
};

// Pricing data by region (legacy support)
const pricingData = {
    IN: {
        currency: '₹',
        plans: [
            { duration: '1 Month', price: '2000', period: '/month' },
            { duration: '3 Months', price: '1800', period: '/month', popular: false },
            { duration: '6 Months', price: '1500', period: '/month', popular: true },
            { duration: '1 Year', price: '1200', period: '/month' }
        ]
    },
    SA: {
        currency: 'SAR ',
        plans: [
            { duration: '1 Month', price: '300', period: '/month' },
            { duration: '3 Months', price: '250', period: '/month', popular: false },
            { duration: '6 Months', price: '225', period: '/month', popular: true },
            { duration: '1 Year', price: '180', period: '/month' }
        ]
    },
    default: {
        currency: '$',
        plans: [
            { duration: '1 Month', price: '80', period: '/month' },
            { duration: '3 Months', price: '70', period: '/month', popular: false },
            { duration: '6 Months', price: '60', period: '/month', popular: true },
            { duration: '1 Year', price: '40', period: '/month' }
        ]
    }
};

// Global state
let currentCountry = 'IN'; // Default to India
let currentLanguage = 'en'; // Default to English
let currentCurrency = 'INR';
let currentLang = 'en';
let currentBillingPeriod = 1; // Default to 1 month

// Initialize the application
document.addEventListener('DOMContentLoaded', async function() {
    // Load saved preferences or detect from browser
    loadUserPreferences();
    
    // Detect country using enhanced detection (IP + timezone fallback)
    await detectUserCountry();
    
    // Initialize country selector
    initializeCountrySelector();
    
    // Apply initial language and pricing
    setLanguage(currentLang);
    renderPricing(currentCountry);
    
    // Initialize other features
    initializeLanguage();
    initializePricing();
    initializeBillingSwitch();
    initializeScrollAnimations();
    initializeEventListeners();
    
    // Setup real-time pricing updates
    setupPricingUpdates();
    
    // Initialize all components
    initializeLanguageSelector();
    initializeAnimatedElements();
    
    // Add stagger animation to feature sections
    const featureSections = document.querySelectorAll('.features .row, .animated-features .animated-boxes-grid');
    featureSections.forEach(section => {
        section.classList.add('animate-stagger');
    });
    
    // Add animation classes to various elements
    const heroElements = document.querySelectorAll('.hero h1, .hero p, .hero .btn');
    heroElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Load user preferences from localStorage or detect from browser
function loadUserPreferences() {
    const savedCountry = localStorage.getItem('scratchfy-country');
    const savedLanguage = localStorage.getItem('scratchfy-language');
    
    if (savedCountry && countryData[savedCountry]) {
        currentCountry = savedCountry;
        currentCurrency = countryData[savedCountry].currency;
    } else {
        // Try to detect country from timezone or use default
        detectCountryFromTimezone();
    }
    
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    } else {
        // Use first available language for the country
        const countryLanguages = countryData[currentCountry].languages;
        currentLanguage = countryLanguages[0].code;
    }
}

// Detect country from timezone (fallback method)
function detectCountryFromTimezone() {
    try {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const timezoneCountryMap = {
            'Asia/Kolkata': 'IN',
            'Asia/Riyadh': 'SA',
            'America/New_York': 'US',
            'America/Los_Angeles': 'US',
            'Europe/London': 'GB',
            'Europe/Berlin': 'DE',
            'Europe/Paris': 'FR',
            'Europe/Madrid': 'ES',
            'Australia/Sydney': 'AU',
            'Asia/Singapore': 'SG',
            'Asia/Dubai': 'AE'
        };
        
        if (timezoneCountryMap[timezone]) {
            currentCountry = timezoneCountryMap[timezone];
            currentCurrency = countryData[currentCountry].currency;
        }
    } catch (e) {
        console.log('Could not detect timezone, using default country');
    }
}

// Enhanced country detection with IP-based geolocation
async function detectUserCountry() {
    try {
        // First try IP-based geolocation
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data.country_code && countryData[data.country_code]) {
            currentCountry = data.country_code;
            currentCurrency = countryData[currentCountry].currency;
            console.log(`Country detected via IP: ${currentCountry}`);
            return currentCountry;
        }
    } catch (error) {
        console.log('IP-based country detection failed:', error);
    }
    
    // Fallback to timezone detection
    detectCountryFromTimezone();
    console.log(`Country detected via timezone: ${currentCountry}`);
    return currentCountry;
}

// Initialize language selector functionality
function initializeLanguageSelector() {
    // This function can be used for additional language-specific initialization
    console.log('Language selector initialized');
}

// Initialize animated elements
function initializeAnimatedElements() {
    // Add animation classes to elements that need them
    const animatedElements = document.querySelectorAll('.feature-card, .testimonial-card, .comparison-item');
    animatedElements.forEach(element => {
        element.classList.add('animate-on-scroll');
    });
}

// Initialize country selector functionality
function initializeCountrySelector() {
    const selector = document.getElementById('selectorToggle');
    const dropdown = document.getElementById('selectorDropdown');
    const searchInput = document.getElementById('countrySearch');
    const countryList = document.getElementById('countryList');
    
    if (!selector || !dropdown || !searchInput || !countryList) return;
    
    // Populate country list with India and Saudi Arabia at top
    populateCountryList();
    
    // Update selector display
    updateSelectorDisplay();
    
    // Toggle dropdown
    selector.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('active');
        if (dropdown.classList.contains('active')) {
            searchInput.focus();
        }
    });
    
    // Search functionality
    searchInput.addEventListener('input', (e) => {
        filterCountries(e.target.value);
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!selector.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
    
    // Handle country selection
    countryList.addEventListener('click', (e) => {
        const countryItem = e.target.closest('.country-item');
        if (countryItem) {
            const countryCode = countryItem.dataset.country;
            const languageCode = countryItem.dataset.language;
            selectCountryLanguage(countryCode, languageCode);
        }
    });
}

// Populate country list with prioritized countries at top
function populateCountryList() {
    const countryList = document.getElementById('countryList');
    if (!countryList) return;
    
    // Priority countries (India and Saudi Arabia first)
    const priorityCountries = ['IN', 'SA'];
    const otherCountries = Object.keys(countryData).filter(code => !priorityCountries.includes(code));
    
    let html = '';
    
    // Add priority countries first
    priorityCountries.forEach(countryCode => {
        if (countryData[countryCode]) {
            html += generateCountryItems(countryCode);
        }
    });
    
    // Add separator if there are priority countries
    if (priorityCountries.length > 0) {
        html += '<div class="country-separator"></div>';
    }
    
    // Add other countries
    otherCountries.forEach(countryCode => {
        html += generateCountryItems(countryCode);
    });
    
    countryList.innerHTML = html;
}

// Generate HTML for country items with all language combinations
function generateCountryItems(countryCode) {
    const country = countryData[countryCode];
    let html = '';
    
    country.languages.forEach(language => {
        const isSelected = currentCountry === countryCode && currentLanguage === language.code;
        html += `
            <div class="country-item ${isSelected ? 'selected' : ''}" 
                 data-country="${countryCode}" 
                 data-language="${language.code}">
                <span class="country-flag">${country.flag}</span>
                <div class="country-info">
                    <span class="country-name">${country.name}</span>
                    <span class="language-tag">${language.name}</span>
                </div>
                <span class="currency-code">${country.currency}</span>
            </div>
        `;
    });
    
    return html;
}

// Filter countries based on search input
function filterCountries(searchTerm) {
    const countryItems = document.querySelectorAll('.country-item');
    const separator = document.querySelector('.country-separator');
    
    searchTerm = searchTerm.toLowerCase();
    
    let visibleItems = 0;
    let prioritySectionVisible = false;
    
    countryItems.forEach(item => {
        const countryCode = item.dataset.country;
        const languageCode = item.dataset.language;
        const country = countryData[countryCode];
        const language = country.languages.find(lang => lang.code === languageCode);
        
        const countryName = country.name.toLowerCase();
        const languageName = language.name.toLowerCase();
        const currencyCode = country.currency.toLowerCase();
        
        const matches = countryName.includes(searchTerm) || 
                       languageName.includes(searchTerm) || 
                       currencyCode.includes(searchTerm);
        
        if (matches) {
            item.style.display = 'flex';
            visibleItems++;
            
            // Check if this is a priority country
            if (['IN', 'SA'].includes(countryCode)) {
                prioritySectionVisible = true;
            }
        } else {
            item.style.display = 'none';
        }
    });
    
    // Show/hide separator based on priority section visibility
    if (separator) {
        separator.style.display = prioritySectionVisible && visibleItems > 2 ? 'block' : 'none';
    }
}

// Select country and language combination
function selectCountryLanguage(countryCode, languageCode) {
    if (!countryData[countryCode]) return;
    
    // Update global state
    currentCountry = countryCode;
    currentLanguage = languageCode;
    currentCurrency = countryData[countryCode].currency;
    
    // Save preferences
    localStorage.setItem('scratchfy-country', countryCode);
    localStorage.setItem('scratchfy-language', languageCode);
    
    // Update UI
    updateSelectorDisplay();
    setLanguage(languageCode);
    renderPricing(countryCode);
    
    // Close dropdown
    document.getElementById('selectorDropdown').classList.remove('active');
    
    // Clear search
    document.getElementById('countrySearch').value = '';
    
    // Refresh country list to update selection
    populateCountryList();
}

// Update selector display
function updateSelectorDisplay() {
    console.log('updateSelectorDisplay called');
    console.log('currentCountry:', currentCountry);
    console.log('currentLanguage:', currentLanguage);
    
    const flagElement = document.getElementById('currentFlag');
    const textElement = document.getElementById('currentCountryLang');
    
    console.log('flagElement:', flagElement);
    console.log('textElement:', textElement);
    
    if (!flagElement || !textElement) {
        console.log('Elements not found - flagElement:', flagElement, 'textElement:', textElement);
        return;
    }
    
    const country = countryData[currentCountry];
    if (!country) {
        console.log('Country data not found for:', currentCountry);
        return;
    }
    
    const language = country.languages.find(lang => lang.code === currentLanguage);
    if (!language) {
        console.log('Language data not found for:', currentLanguage, 'in country:', currentCountry);
        return;
    }
    
    console.log('country data:', country);
    console.log('language data:', language);
    
    flagElement.textContent = country.flag;
    textElement.textContent = `${country.name} - ${language.name}`;
    
    console.log('Updated flag to:', flagElement.textContent);
    console.log('Updated text to:', textElement.textContent);
}

// Language functionality
function initializeLanguage() {
    const savedLang = localStorage.getItem('scratchfy-lang') || 'en';
    setLanguage(savedLang);
}

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update all translatable elements
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Save language preference
    localStorage.setItem('scratchfy-lang', lang);
}

function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
}

// Pricing functionality
function initializePricing() {
    try {
        const userCountry = detectUserCountry();
        renderPricing(userCountry);
    } catch (error) {
        console.log('Could not detect location, using default pricing');
        renderPricing('default');
    }
}



// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe animated boxes
    const animatedBoxes = document.querySelectorAll('.animated-box');
    animatedBoxes.forEach(box => {
        observer.observe(box);
    });

    // Observe other elements for general animations
    const animatedElements = document.querySelectorAll('.feature-card, .testimonial-card, .comparison-item, .pricing-card');
    animatedElements.forEach(element => {
        observer.observe(element);
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    // Add intersection observer for general elements
    const generalObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => {
        generalObserver.observe(element);
    });
}

// Event listeners
function initializeEventListeners() {
    // Language toggle buttons
    const langToggle = document.getElementById('langToggle');
    const footerLangToggle = document.getElementById('footerLangToggle');
    
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    
    if (footerLangToggle) {
        footerLangToggle.addEventListener('click', toggleLanguage);
    }
    
    // Navigation buttons
    const signInBtn = document.querySelector('[data-key="nav-signin"]');
    const registerBtn = document.querySelector('[data-key="nav-register"]');
    
    console.log('Sign In button found:', signInBtn);
    console.log('Register button found:', registerBtn);
    
    if (signInBtn) {
        signInBtn.addEventListener('click', handleSignInClick);
        console.log('Sign In event listener added');
    }
    
    if (registerBtn) {
        registerBtn.addEventListener('click', handleRegisterClick);
        console.log('Register event listener added');
    }

    // CTA buttons - using data-key attributes for reliable targeting
    const heroTrialBtns = document.querySelectorAll('[data-key="hero-trial"], [data-key="cta-button"]');
    const pricingBtns = document.querySelectorAll('[data-key="nav-pricing"], [data-key="hero-pricing"]');
    
    console.log('Hero trial buttons found:', heroTrialBtns.length);
    console.log('Pricing buttons found:', pricingBtns.length);
    
    heroTrialBtns.forEach(button => {
        button.addEventListener('click', handleTrialClick);
        console.log('Trial click listener added to:', button);
    });
    
    pricingBtns.forEach(button => {
        button.addEventListener('click', handlePricingClick);
        console.log('Pricing click listener added to:', button);
    });
    
    // Pricing plan buttons
    const planButtons = document.querySelectorAll('.pricing-card .btn');
    console.log('Pricing plan buttons found:', planButtons.length);
    
    planButtons.forEach(button => {
        button.addEventListener('click', handlePlanClick);
        console.log('Plan click listener added to:', button);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Navbar scroll effect
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Event handlers
function handleSignInClick(e) {
    console.log('Sign In button clicked');
    e.preventDefault();
    window.location.href = 'login.html';
}

function handleRegisterClick(e) {
    console.log('Register button clicked');
    e.preventDefault();
    window.location.href = 'register.html';
}

function handleTrialClick(e) {
    console.log('Trial button clicked');
    e.preventDefault();
    // Add loading state
    const button = e.target;
    const originalText = button.textContent;
    button.textContent = currentLang === 'en' ? 'Loading...' : 'جاري التحميل...';
    button.classList.add('loading');
    
    // Simulate API call
    setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove('loading');
        
        // In a real app, this would redirect to signup
        alert(currentLang === 'en' ? 
            'Redirecting to free trial signup...' : 
            'إعادة توجيه إلى تسجيل التجربة المجانية...');
    }, 1500);
}

function handlePricingClick(e) {
    console.log('Pricing button clicked');
    e.preventDefault();
    const pricingSection = document.querySelector('.pricing');
    if (pricingSection) {
        pricingSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function handlePlanClick(e) {
    console.log('Plan button clicked');
    e.preventDefault();
    const button = e.target;
    const card = button.closest('.pricing-card');
    const duration = card.querySelector('.pricing-duration').textContent;
    const price = card.querySelector('.pricing-price').textContent;
    
    // Add selection effect
    document.querySelectorAll('.pricing-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    
    // Simulate plan selection
    setTimeout(() => {
        alert(currentLang === 'en' ? 
            `Selected: ${duration} plan at ${price}` : 
            `تم اختيار: خطة ${duration} بسعر ${price}`);
    }, 300);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization
function preloadImages() {
    // Preload any critical images here
    const imageUrls = [
        // Add any image URLs that need preloading
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Initialize preloading
preloadImages();

// Add CSS for selected pricing card
const style = document.createElement('style');
style.textContent = `
    .pricing-card.selected {
        border-color: var(--primary-color);
        box-shadow: var(--shadow-lg);
        transform: translateY(-5px) scale(1.02);
    }
    
    .pricing-card.selected .btn {
        background-color: var(--accent-color);
        border-color: var(--accent-color);
    }
`;
document.head.appendChild(style);

// Update language function
function updateLanguage() {
    setLanguage(currentLang);
}

// Update pricing function  
function updatePricing() {
    renderPricing(currentCountry);
}

// Set language function
function setLanguage(langCode) {
    if (!translations[langCode]) return;
    
    currentLanguage = langCode;
    
    // Update all translatable elements
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[langCode][key]) {
            element.textContent = translations[langCode][key];
        }
    });
    
    // Update HTML direction for RTL languages
    document.documentElement.dir = langCode === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = langCode;
    
    // Save language preference
    localStorage.setItem('scratchfy-language', langCode);
}

// Render pricing function with billing period support and Firestore integration
async function renderPricing(countryCode) {
    const pricingGrid = document.getElementById('pricingGrid');
    if (!pricingGrid) return;
    
    try {
        // First try to get pricing from Firestore
        const firestorePricing = await getFirestorePricing(countryCode);
        
        if (firestorePricing) {
            renderFirestorePricing(firestorePricing, countryCode);
        } else {
            // Fallback to static pricing if Firestore data not available
            renderStaticPricing(countryCode);
        }
    } catch (error) {
        console.error('Error loading pricing from Firestore:', error);
        // Fallback to static pricing on error
        renderStaticPricing(countryCode);
    }
}

// Get pricing data from Firestore
async function getFirestorePricing(countryCode) {
    if (!window.db) return null;
    
    try {
        // Map country codes to Firestore document IDs
        const countryMapping = {
            'IN': 'india',
            'SA': 'saudi',
            'US': 'global',
            'GB': 'global',
            'CA': 'global',
            'AU': 'global',
            'DE': 'global',
            'FR': 'global',
            'ES': 'global',
            'IT': 'global',
            'NL': 'global',
            'SG': 'global',
            'AE': 'global'
        };
        
        const docId = countryMapping[countryCode] || 'global';
        const docRef = db.collection('plans').doc(docId);
        const docSnap = await docRef.get();
        
        if (docSnap.exists) {
            return { id: docId, ...docSnap.data() };
        }
        
        return null;
    } catch (error) {
        console.error('Error fetching Firestore pricing:', error);
        return null;
    }
}

// Render pricing from Firestore data
function renderFirestorePricing(pricingData, countryCode) {
    const pricingGrid = document.getElementById('pricingGrid');
    
    // Get currency symbol from country data or use the one from Firestore
    const country = countryData[countryCode];
    const currencySymbols = {
        'INR': '₹',
        'SAR': 'SAR ',
        'USD': '$',
        'GBP': '£',
        'CAD': 'CAD $',
        'AUD': 'AUD $',
        'EUR': '€',
        'SGD': 'SGD $',
        'AED': 'AED '
    };
    
    const symbol = pricingData.currency_symbol || 
                   (country ? currencySymbols[country.currency] : '') || 
                   '$';
    
    // Calculate prices based on billing period
    const discountMultipliers = {
        1: 1.0,    // Monthly price
        3: 0.9,    // Quarterly (10% discount)
        6: 0.8,    // Half-yearly (20% discount)
        12: 0.65   // Yearly (35% discount)
    };
    
    const multiplier = discountMultipliers[currentBillingPeriod] || 1.0;
    const periodText = currentBillingPeriod === 1 ? '/month' : 
                      currentBillingPeriod === 3 ? '/month (billed quarterly)' :
                      currentBillingPeriod === 6 ? '/month (billed semi-annually)' :
                      '/month (billed annually)';
    
    // Get base prices from Firestore data
    let basePrice;
    switch (currentBillingPeriod) {
        case 1:
            basePrice = pricingData.monthly_price || 80;
            break;
        case 3:
            basePrice = pricingData.quarterly_price || 70;
            break;
        case 6:
            basePrice = pricingData.halfyear_price || 60;
            break;
        case 12:
            basePrice = pricingData.yearly_price || 40;
            break;
        default:
            basePrice = pricingData.monthly_price || 80;
    }
    
    // Calculate plan prices (Basic, Pro, Enterprise as 1x, 2x, 4x of base)
    const basicPrice = Math.round(basePrice);
    const proPrice = Math.round(basePrice * 2);
    const enterprisePrice = Math.round(basePrice * 4);
    
    // Show savings badge for longer periods
    const savingsText = currentBillingPeriod === 3 ? 'Save 10%' :
                       currentBillingPeriod === 6 ? 'Save 20%' :
                       currentBillingPeriod === 12 ? 'Save 35%' : '';
    
    pricingGrid.innerHTML = `
        <div class="pricing-card">
            <h3>Basic</h3>
            ${savingsText ? `<div class="savings-badge">${savingsText}</div>` : ''}
            <div class="price">${symbol}${basicPrice}<span>${periodText}</span></div>
            <button class="btn btn-outline">Choose Plan</button>
        </div>
        <div class="pricing-card popular">
            <div class="popular-badge">Most Popular</div>
            <h3>Pro</h3>
            ${savingsText ? `<div class="savings-badge">${savingsText}</div>` : ''}
            <div class="price">${symbol}${proPrice}<span>${periodText}</span></div>
            <button class="btn btn-primary">Choose Plan</button>
        </div>
        <div class="pricing-card">
            <h3>Enterprise</h3>
            ${savingsText ? `<div class="savings-badge">${savingsText}</div>` : ''}
            <div class="price">${symbol}${enterprisePrice}<span>${periodText}</span></div>
            <button class="btn btn-outline">Choose Plan</button>
        </div>
    `;
}

// Fallback function to render static pricing
function renderStaticPricing(countryCode) {
    const pricingGrid = document.getElementById('pricingGrid');
    if (!countryData[countryCode]) return;
    
    const country = countryData[countryCode];
    const pricing = country.pricing;
    
    const currencySymbols = {
        'INR': '₹',
        'SAR': 'SAR ',
        'USD': '$',
        'GBP': '£',
        'CAD': 'CAD $',
        'AUD': 'AUD $',
        'EUR': '€',
        'SGD': 'SGD $',
        'AED': 'AED '
    };

    const symbol = currencySymbols[country.currency] || '$';
    
    // Calculate discounted prices based on billing period
    const discountMultipliers = {
        1: 1.0,    // No discount for 1 month
        3: 0.9,    // 10% discount for 3 months
        6: 0.8,    // 20% discount for 6 months
        12: 0.65   // 35% discount for 1 year
    };
    
    const multiplier = discountMultipliers[currentBillingPeriod] || 1.0;
    const periodText = currentBillingPeriod === 1 ? '/month' : 
                      currentBillingPeriod === 3 ? '/month (billed quarterly)' :
                      currentBillingPeriod === 6 ? '/month (billed semi-annually)' :
                      '/month (billed annually)';
    
    const basicPrice = Math.round(pricing.basic.price * multiplier);
    const proPrice = Math.round(pricing.pro.price * multiplier);
    const enterprisePrice = Math.round(pricing.enterprise.price * multiplier);
    
    // Show savings badge for longer periods
    const savingsText = currentBillingPeriod === 3 ? 'Save 10%' :
                       currentBillingPeriod === 6 ? 'Save 20%' :
                       currentBillingPeriod === 12 ? 'Save 35%' : '';
    
    pricingGrid.innerHTML = `
        <div class="pricing-card">
            <h3>Basic</h3>
            ${savingsText ? `<div class="savings-badge">${savingsText}</div>` : ''}
            <div class="price">${symbol}${basicPrice}<span>${periodText}</span></div>
            <button class="btn btn-outline">Choose Plan</button>
        </div>
        <div class="pricing-card popular">
            <div class="popular-badge">Most Popular</div>
            <h3>Pro</h3>
            ${savingsText ? `<div class="savings-badge">${savingsText}</div>` : ''}
            <div class="price">${symbol}${proPrice}<span>${periodText}</span></div>
            <button class="btn btn-primary">Choose Plan</button>
        </div>
        <div class="pricing-card">
            <h3>Enterprise</h3>
            ${savingsText ? `<div class="savings-badge">${savingsText}</div>` : ''}
            <div class="price">${symbol}${enterprisePrice}<span>${periodText}</span></div>
            <button class="btn btn-outline">Choose Plan</button>
        </div>
    `;
}

// Set up real-time pricing updates
function setupPricingUpdates() {
    if (!window.firebaseDb || !window.firebaseOnSnapshot) return;
    
    try {
        // Listen for changes to the plans collection
        const plansCollection = window.firebaseCollection(window.firebaseDb, 'plans');
        window.firebaseOnSnapshot(plansCollection, (snapshot) => {
            console.log('Pricing data updated, refreshing display...');
            // Re-render pricing with current country
            renderPricing(currentCountry);
        }, (error) => {
            console.error('Error listening to pricing updates:', error);
        });
    } catch (error) {
        console.error('Error setting up pricing updates:', error);
    }
}

// Initialize billing period switch
function initializeBillingSwitch() {
    const billingOptions = document.querySelectorAll('.billing-option');
    
    billingOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            billingOptions.forEach(opt => opt.classList.remove('active'));
            
            // Add active class to clicked option
            this.classList.add('active');
            
            // Update current billing period
            currentBillingPeriod = parseInt(this.dataset.period);
            
            // Re-render pricing with new period
            renderPricing(currentCountry);
        });
    });
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        setLanguage,
        toggleLanguage,
        detectUserCountry,
        renderPricing,
        selectCountryLanguage,
        updateSelectorDisplay
    };
}