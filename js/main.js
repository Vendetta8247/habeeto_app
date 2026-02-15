// ===== Theme Data =====
const themes = [
  { name: 'Gold',      primaryDark: '#0A192F', primaryLight: '#FFFFFF', secondary: '#475C7A', accent: '#C6A87A', accentText: '#0A192F', textDark: '#F0F0F0', textLight: '#060606' },
  { name: 'Silver',    primaryDark: '#2C1A2F', primaryLight: '#F0EFF5', secondary: '#6A5A6F', accent: '#A9A9A9', accentText: '#1A1A1A', textDark: '#F0F0F0', textLight: '#060606' },
  { name: 'Sapphire',  primaryDark: '#0A1525', primaryLight: '#F5F8FF', secondary: '#2A4A6A', accent: '#FF7F50', accentText: '#0A1525', textDark: '#F0F0F0', textLight: '#060606' },
  { name: 'Amethyst',  primaryDark: '#1A0A28', primaryLight: '#F8F5FF', secondary: '#4A3A5A', accent: '#F0C060', accentText: '#1A0A28', textDark: '#F0F0F0', textLight: '#060606' },
  { name: 'Coral',     primaryDark: '#0A1E1E', primaryLight: '#F0FAFA', secondary: '#2A4A4A', accent: '#FF6F61', accentText: '#0A1E1E', textDark: '#F0F0F0', textLight: '#060606' },
  { name: 'Sunset',    primaryDark: '#12162A', primaryLight: '#FFF8F5', secondary: '#3A3A5A', accent: '#FFB088', accentText: '#12162A', textDark: '#F0F0F0', textLight: '#060606' },
  { name: 'Rose',      primaryDark: '#0A1A12', primaryLight: '#F5FFF8', secondary: '#2A4A3A', accent: '#FF69B4', accentText: '#0A1A12', textDark: '#F0F0F0', textLight: '#060606' },
  { name: 'Midnight',  primaryDark: '#16161E', primaryLight: '#F5F5FA', secondary: '#2E2E3A', accent: '#00D4FF', accentText: '#16161E', textDark: '#F0F0F0', textLight: '#060606' },
  { name: 'Slate',     primaryDark: '#1A1C1A', primaryLight: '#F5FAF5', secondary: '#2E3A2E', accent: '#9AFF5A', accentText: '#1A1C1A', textDark: '#F0F0F0', textLight: '#060606' },
  { name: 'Onyx',      primaryDark: '#141216', primaryLight: '#FAF5FA', secondary: '#2A2630', accent: '#FF3399', accentText: '#141216', textDark: '#F0F0F0', textLight: '#060606' },
  { name: 'Financer',  primaryDark: '#131311', primaryLight: '#FFFFF5', secondary: '#2A2A22', accent: '#FDD00E', accentText: '#131311', textDark: '#F0F0F0', textLight: '#060606' },
  { name: 'Ember',     primaryDark: '#1A1C2E', primaryLight: '#F8F5F5', secondary: '#3A3D55', accent: '#EF233C', accentText: '#1A1C2E', textDark: '#F0F0F0', textLight: '#060606' },
  { name: 'Mocha',     primaryDark: '#1A120B', primaryLight: '#FAF5F0', secondary: '#3C2A1E', accent: '#D4A373', accentText: '#1A120B', textDark: '#F0F0F0', textLight: '#060606' },
  { name: 'Arctic',    primaryDark: '#0B1320', primaryLight: '#F0F8FA', secondary: '#1E2D40', accent: '#A8DADC', accentText: '#0B1320', textDark: '#F0F0F0', textLight: '#060606' },
  { name: 'Lavender',  primaryDark: '#1A0E2E', primaryLight: '#F5F0FA', secondary: '#2D1F45', accent: '#B8A9C9', accentText: '#1A0E2E', textDark: '#F0F0F0', textLight: '#060606' },
  { name: 'Copper',    primaryDark: '#151010', primaryLight: '#FAF5F0', secondary: '#2A2020', accent: '#B87333', accentText: '#151010', textDark: '#F0F0F0', textLight: '#060606' },
];

// ===== Translations =====
const i18n = {
  en: {
    // Nav
    nav_features: 'Features',
    nav_how: 'How It Works',
    nav_themes: 'Themes',
    nav_download: 'Download',
    // Hero
    badge_ios: 'Available on iOS',
    badge_android: 'Android coming soon',
    hero_title: 'Build Habits That <span class="highlight">Actually Stick</span>',
    hero_desc: 'Habeeto makes building good habits fun and rewarding. Track your daily routines, build powerful streaks, and crush your goals \u2014 with your personal habit companion.',
    hero_cta: 'Download Free',
    hero_learn: 'Learn More',
    // Social proof
    proof_modes: 'Tracking Modes',
    proof_langs: 'Languages',
    proof_themes: 'Themes',
    // Features
    feat_label: 'FEATURES',
    feat_title: 'Everything you need to build better habits',
    feat_subtitle: 'Powerful tools to track, measure, and improve your daily routines \u2014 completely free.',
    feat_track_title: 'Three Tracking Modes',
    feat_track_desc: 'Counter, checkmark, or timer \u2014 track any habit your way',
    feat_streak_title: 'Streaks',
    feat_streak_desc: 'Stay consistent with a unique lives system \u2014 miss a day, lose a bee friend',
    feat_goals_title: 'Smart Goals',
    feat_goals_desc: 'Set weekly or monthly targets with \u201Cat least\u201D and \u201Cno more than\u201D directions',
    feat_achieve_title: 'Achievements & Medals',
    feat_achieve_desc: 'Earn Bronze, Silver, and Gold medals as you build lasting habits',
    feat_custom_title: 'Extensive Customization',
    feat_custom_desc: '16 color themes, unlockable app icons, and light/dark mode to make Habeeto truly yours',
    feat_history_title: 'Rich History View',
    feat_history_desc: 'Interactive calendar with a clear overview of your tracking history, streaks, and consistency',
    // Premium
    prem_label: 'PREMIUM',
    prem_title: 'Take your habits to the next level',
    prem_subtitle: 'Unlock the full power of Habeeto with advanced tools for serious habit builders.',
    prem_unlimited_title: 'Unlimited & Flexible',
    prem_unlimited_desc: 'No limits on habits or goals \u2014 Habeeto grows with you',
    prem_widget_title: 'Interactive Widgets',
    prem_widget_desc: 'Track and control habits right from your home screen \u2014 tap to check off, increment counters, all without opening the app',
    prem_freeze_title: 'Streak Freeze',
    prem_freeze_desc: 'Going on vacation? Freeze your streak and pick up right where you left off',
    prem_live_title: 'Live Tracking',
    prem_live_desc: 'Timer habits appear in Dynamic Island and on your Lock Screen via Live Activity',
    prem_analytics_title: 'Advanced Analytics',
    prem_analytics_desc: 'Heatmaps, weekly comparisons, habit breakdowns, and trend charts to understand your progress',
    prem_backup_title: 'Backup & Restore',
    prem_backup_desc: 'Export all your data and restore it on a new device \u2014 never lose your progress',
    // How it works
    how_label: 'HOW IT WORKS',
    how_title: 'Start tracking in seconds',
    how_1_title: 'Create a Habit',
    how_1_desc: 'Choose your habit type \u2014 counter, checkmark, or timer \u2014 and set your frequency.',
    how_2_title: 'Track Daily',
    how_2_desc: 'Log your progress with a single tap. Habeeto remembers so you can focus on doing.',
    how_3_title: 'Build Streaks',
    how_3_desc: 'Stay consistent and watch your streak grow. Your bee friends are counting on you!',
    // Streaks
    streak_label: 'STREAKS',
    streak_title: 'Your streak, your stakes',
    streak_subtitle: 'Habeeto\u2019s unique lives system makes streaks meaningful. Miss a day and a bee friend flies away \u2014 but keep going and they\u2019ll come back!',
    streak_lives_title: 'Lives System',
    streak_lives_desc: 'Start with 3 bee lives. Miss a day, lose one. Stay consistent to earn them back.',
    streak_freeze_title: 'Streak Freeze',
    streak_freeze_desc: 'Going on vacation? Freeze your streak and pick up right where you left off.',
    streak_cal_title: 'Calendar View',
    streak_cal_desc: 'See your full history at a glance with an interactive calendar heatmap.',
    streak_day: 'day streak',
    streak_best: 'Personal best!',
    streak_lives: 'Lives',
    // Themes
    theme_label: 'THEMES',
    theme_title: 'Make it truly yours',
    theme_subtitle: 'Choose from 16 beautiful themes. Click to preview \u2014 watch the entire page transform.',
    theme_gold: 'Gold', theme_silver: 'Silver', theme_sapphire: 'Sapphire', theme_amethyst: 'Amethyst',
    theme_coral: 'Coral', theme_sunset: 'Sunset', theme_rose: 'Rose', theme_midnight: 'Midnight',
    theme_slate: 'Slate', theme_onyx: 'Onyx', theme_financer: 'Financer', theme_ember: 'Ember',
    theme_mocha: 'Mocha', theme_arctic: 'Arctic', theme_lavender: 'Lavender', theme_copper: 'Copper',
    // CTA
    cta_title: 'Ready to build habits that last?',
    cta_desc: 'Join thousands building better routines with Habeeto. Free to download, no account required.',
    cta_btn: 'Download on the App Store',
    // Footer
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Terms of Service',
    footer_support: 'Support',
  },
  pt: {
    nav_features: 'Recursos',
    nav_how: 'Como Funciona',
    nav_themes: 'Temas',
    nav_download: 'Baixar',
    badge_ios: 'Dispon\u00EDvel no iOS',
    badge_android: 'Android em breve',
    hero_title: 'Construa H\u00E1bitos Que <span class="highlight">Realmente Duram</span>',
    hero_desc: 'Habeeto torna a constru\u00E7\u00E3o de bons h\u00E1bitos divertida e recompensadora. Acompanhe suas rotinas di\u00E1rias, construa sequ\u00EAncias poderosas e conquiste suas metas \u2014 com seu companheiro pessoal de h\u00E1bitos.',
    hero_cta: 'Baixar Gr\u00E1tis',
    hero_learn: 'Saiba Mais',
    proof_modes: 'Modos de Rastreamento',
    proof_langs: 'Idiomas',
    proof_themes: 'Temas',
    feat_label: 'RECURSOS',
    feat_title: 'Tudo que voc\u00EA precisa pra construir h\u00E1bitos melhores',
    feat_subtitle: 'Ferramentas poderosas pra rastrear, medir e melhorar suas rotinas \u2014 totalmente gr\u00E1tis.',
    feat_track_title: 'Tr\u00EAs Modos de Rastreamento',
    feat_track_desc: 'Quantidade, check ou tempo \u2014 acompanhe qualquer h\u00E1bito do seu jeito',
    feat_streak_title: 'Sequ\u00EAncias',
    feat_streak_desc: 'Mantenha a consist\u00EAncia com um sistema \u00FAnico de vidas \u2014 perca um dia, perca uma abelha',
    feat_goals_title: 'Metas Inteligentes',
    feat_goals_desc: 'Defina metas semanais ou mensais com dire\u00E7\u00F5es \u201Cpelo menos\u201D e \u201Cno m\u00E1ximo\u201D',
    feat_achieve_title: 'Conquistas e Medalhas',
    feat_achieve_desc: 'Ganhe medalhas de Bronze, Prata e Ouro enquanto constr\u00F3i h\u00E1bitos duradouros',
    feat_custom_title: 'Personaliza\u00E7\u00E3o Completa',
    feat_custom_desc: '16 temas de cores, \u00EDcones desbloque\u00E1veis e modo claro/escuro pra fazer o Habeeto do seu jeito',
    feat_history_title: 'Hist\u00F3rico Completo',
    feat_history_desc: 'Calend\u00E1rio interativo com vis\u00E3o clara do seu hist\u00F3rico de rastreamento, sequ\u00EAncias e consist\u00EAncia',
    prem_label: 'PREMIUM',
    prem_title: 'Leve seus h\u00E1bitos pro pr\u00F3ximo n\u00EDvel',
    prem_subtitle: 'Libere todo o poder do Habeeto com ferramentas avan\u00E7adas pra quem leva h\u00E1bitos a s\u00E9rio.',
    prem_unlimited_title: 'Tudo Ilimitado',
    prem_unlimited_desc: 'Sem limites de h\u00E1bitos ou metas \u2014 Habeeto cresce com voc\u00EA',
    prem_widget_title: 'Widgets Interativos',
    prem_widget_desc: 'Acompanhe e controle h\u00E1bitos direto da tela inicial \u2014 marque, incremente contadores, tudo sem abrir o app',
    prem_freeze_title: 'Congelar Sequ\u00EAncia',
    prem_freeze_desc: 'Vai viajar? Congele sua sequ\u00EAncia e continue de onde parou',
    prem_live_title: 'Rastreamento ao Vivo',
    prem_live_desc: 'H\u00E1bitos com timer aparecem na Dynamic Island e na Tela de Bloqueio via Live Activity',
    prem_analytics_title: 'An\u00E1lise Avan\u00E7ada',
    prem_analytics_desc: 'Mapas de calor, compara\u00E7\u00F5es semanais, detalhes por h\u00E1bito e gr\u00E1ficos de tend\u00EAncia',
    prem_backup_title: 'Backup e Restaura\u00E7\u00E3o',
    prem_backup_desc: 'Exporte todos os seus dados e restaure em outro aparelho \u2014 nunca perca seu progresso',
    how_label: 'COMO FUNCIONA',
    how_title: 'Comece a rastrear em segundos',
    how_1_title: 'Crie um H\u00E1bito',
    how_1_desc: 'Escolha o tipo de h\u00E1bito \u2014 quantidade, check ou tempo \u2014 e defina sua frequ\u00EAncia.',
    how_2_title: 'Acompanhe Diariamente',
    how_2_desc: 'Registre seu progresso com um toque. Habeeto lembra pra voc\u00EA poder focar em fazer.',
    how_3_title: 'Construa Sequ\u00EAncias',
    how_3_desc: 'Mantenha a consist\u00EAncia e veja sua sequ\u00EAncia crescer. Suas abelhas contam com voc\u00EA!',
    streak_label: 'SEQU\u00CANCIAS',
    streak_title: 'Sua sequ\u00EAncia, suas apostas',
    streak_subtitle: 'O sistema \u00FAnico de vidas do Habeeto torna as sequ\u00EAncias significativas. Perca um dia e uma abelha voa embora \u2014 mas continue e elas voltam!',
    streak_lives_title: 'Sistema de Vidas',
    streak_lives_desc: 'Comece com 3 vidas de abelha. Perca um dia, perca uma. Mantenha a consist\u00EAncia pra recuperar.',
    streak_freeze_title: 'Congelar Sequ\u00EAncia',
    streak_freeze_desc: 'Vai viajar? Congele sua sequ\u00EAncia e continue de onde parou.',
    streak_cal_title: 'Vis\u00E3o de Calend\u00E1rio',
    streak_cal_desc: 'Veja todo seu hist\u00F3rico de uma vez com um calend\u00E1rio interativo.',
    streak_day: 'dias de sequ\u00EAncia',
    streak_best: 'Recorde pessoal!',
    streak_lives: 'Vidas',
    theme_label: 'TEMAS',
    theme_title: 'Fa\u00E7a do seu jeito',
    theme_subtitle: 'Escolha entre 16 temas lindos. Clique pra visualizar \u2014 veja toda a p\u00E1gina se transformar.',
    theme_gold: 'Ouro', theme_silver: 'Prata', theme_sapphire: 'Safira', theme_amethyst: 'Ametista',
    theme_coral: 'Coral', theme_sunset: 'P\u00F4r do Sol', theme_rose: 'Rosa', theme_midnight: 'Meia-noite',
    theme_slate: 'Ard\u00F3sia', theme_onyx: '\u00D4nix', theme_financer: 'Financer', theme_ember: 'Brasa',
    theme_mocha: 'Mocha', theme_arctic: '\u00C1rtico', theme_lavender: 'Lavanda', theme_copper: 'Cobre',
    cta_title: 'Pronto pra construir h\u00E1bitos que duram?',
    cta_desc: 'Junte-se a milhares construindo rotinas melhores com Habeeto. Gr\u00E1tis pra baixar, sem cadastro.',
    cta_btn: 'Baixar na App Store',
    footer_privacy: 'Pol\u00EDtica de Privacidade',
    footer_terms: 'Termos de Servi\u00E7o',
    footer_support: 'Suporte',
  },
  es: {
    nav_features: 'Funciones',
    nav_how: 'C\u00F3mo Funciona',
    nav_themes: 'Temas',
    nav_download: 'Descargar',
    badge_ios: 'Disponible en iOS',
    badge_android: 'Android pr\u00F3ximamente',
    hero_title: 'Construye H\u00E1bitos Que <span class="highlight">Realmente Duran</span>',
    hero_desc: 'Habeeto hace que construir buenos h\u00E1bitos sea divertido y gratificante. Lleva tus rutinas diarias, construye rachas poderosas y alcanza tus metas \u2014 con tu compa\u00F1ero personal de h\u00E1bitos.',
    hero_cta: 'Descargar Gratis',
    hero_learn: 'Saber M\u00E1s',
    proof_modes: 'Modos de Seguimiento',
    proof_langs: 'Idiomas',
    proof_themes: 'Temas',
    feat_label: 'FUNCIONES',
    feat_title: 'Todo lo que necesitas para construir mejores h\u00E1bitos',
    feat_subtitle: 'Herramientas poderosas para rastrear, medir y mejorar tus rutinas \u2014 totalmente gratis.',
    feat_track_title: 'Tres Modos de Seguimiento',
    feat_track_desc: 'Cantidad, check o tiempo \u2014 lleva cualquier h\u00E1bito a tu manera',
    feat_streak_title: 'Rachas',
    feat_streak_desc: 'Mant\u00E9n la consistencia con un sistema \u00FAnico de vidas \u2014 pierde un d\u00EDa, pierde una abeja',
    feat_goals_title: 'Metas Inteligentes',
    feat_goals_desc: 'Fija metas semanales o mensuales con direcciones \u201Cal menos\u201D y \u201Cno m\u00E1s de\u201D',
    feat_achieve_title: 'Logros y Medallas',
    feat_achieve_desc: 'Gana medallas de Bronce, Plata y Oro mientras construyes h\u00E1bitos duraderos',
    feat_custom_title: 'Personalizaci\u00F3n Total',
    feat_custom_desc: '16 temas de color, iconos desbloqueables y modo claro/oscuro para hacer Habeeto realmente tuyo',
    feat_history_title: 'Historial Completo',
    feat_history_desc: 'Calendario interactivo con una visi\u00F3n clara de tu historial, rachas y consistencia',
    prem_label: 'PREMIUM',
    prem_title: 'Lleva tus h\u00E1bitos al siguiente nivel',
    prem_subtitle: 'Desbloquea todo el poder de Habeeto con herramientas avanzadas para quienes van en serio.',
    prem_unlimited_title: 'Todo Ilimitado',
    prem_unlimited_desc: 'Sin l\u00EDmites en h\u00E1bitos o metas \u2014 Habeeto crece contigo',
    prem_widget_title: 'Widgets Interactivos',
    prem_widget_desc: 'Controla h\u00E1bitos desde tu pantalla de inicio \u2014 marca, incrementa contadores, todo sin abrir la app',
    prem_freeze_title: 'Congelar Racha',
    prem_freeze_desc: '\u00BFTe vas de vacaciones? Congela tu racha y contin\u00FAa donde te quedaste',
    prem_live_title: 'Seguimiento en Vivo',
    prem_live_desc: 'Los h\u00E1bitos con timer aparecen en Dynamic Island y en la pantalla de bloqueo via Live Activity',
    prem_analytics_title: 'An\u00E1lisis Avanzado',
    prem_analytics_desc: 'Mapas de calor, comparaciones semanales, desglose por h\u00E1bito y gr\u00E1ficos de tendencias',
    prem_backup_title: 'Copia de Seguridad',
    prem_backup_desc: 'Exporta todos tus datos y rest\u00E1uralos en otro dispositivo \u2014 nunca pierdas tu progreso',
    how_label: 'C\u00D3MO FUNCIONA',
    how_title: 'Empieza a registrar en segundos',
    how_1_title: 'Crea un H\u00E1bito',
    how_1_desc: 'Elige el tipo de h\u00E1bito \u2014 cantidad, check o tiempo \u2014 y fija tu frecuencia.',
    how_2_title: 'Registra a Diario',
    how_2_desc: 'Registra tu progreso con un toque. Habeeto recuerda para que t\u00FA te enfoques en hacer.',
    how_3_title: 'Construye Rachas',
    how_3_desc: '\u00A1Mant\u00E9n la consistencia y mira crecer tu racha. Tus abejas cuentan contigo!',
    streak_label: 'RACHAS',
    streak_title: 'Tu racha, tus apuestas',
    streak_subtitle: 'El sistema \u00FAnico de vidas de Habeeto hace que las rachas importen. Pierde un d\u00EDa y una abeja se va \u2014 \u00A1pero sigue adelante y volver\u00E1n!',
    streak_lives_title: 'Sistema de Vidas',
    streak_lives_desc: 'Empiezas con 3 vidas de abeja. Pierde un d\u00EDa, pierde una. Mant\u00E9n la consistencia para recuperarlas.',
    streak_freeze_title: 'Congelar Racha',
    streak_freeze_desc: '\u00BFTe vas de vacaciones? Congela tu racha y contin\u00FAa donde te quedaste.',
    streak_cal_title: 'Vista de Calendario',
    streak_cal_desc: 'Ve todo tu historial de un vistazo con un calendario interactivo.',
    streak_day: 'd\u00EDas de racha',
    streak_best: '\u00A1R\u00E9cord personal!',
    streak_lives: 'Vidas',
    theme_label: 'TEMAS',
    theme_title: 'Hazlo realmente tuyo',
    theme_subtitle: 'Elige entre 16 temas hermosos. Haz clic para previsualizar \u2014 mira toda la p\u00E1gina transformarse.',
    theme_gold: 'Oro', theme_silver: 'Plata', theme_sapphire: 'Zafiro', theme_amethyst: 'Amatista',
    theme_coral: 'Coral', theme_sunset: 'Atardecer', theme_rose: 'Rosa', theme_midnight: 'Medianoche',
    theme_slate: 'Pizarra', theme_onyx: '\u00D3nix', theme_financer: 'Financer', theme_ember: 'Brasa',
    theme_mocha: 'Moca', theme_arctic: '\u00C1rtico', theme_lavender: 'Lavanda', theme_copper: 'Cobre',
    cta_title: '\u00BFListo para construir h\u00E1bitos que duran?',
    cta_desc: '\u00DAnete a miles construyendo mejores rutinas con Habeeto. Gratis para descargar, sin cuenta requerida.',
    cta_btn: 'Descargar en la App Store',
    footer_privacy: 'Pol\u00EDtica de Privacidad',
    footer_terms: 'T\u00E9rminos de Servicio',
    footer_support: 'Soporte',
  },
  uk: {
    nav_features: '\u0424\u0443\u043D\u043A\u0446\u0456\u0457',
    nav_how: '\u042F\u043A \u0446\u0435 \u043F\u0440\u0430\u0446\u044E\u0454',
    nav_themes: '\u0422\u0435\u043C\u0438',
    nav_download: '\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438',
    badge_ios: '\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u043D\u0430 iOS',
    badge_android: 'Android \u043D\u0435\u0437\u0430\u0431\u0430\u0440\u043E\u043C',
    hero_title: '\u0421\u0442\u0432\u043E\u0440\u044E\u0439 \u0437\u0432\u0438\u0447\u043A\u0438, \u0449\u043E <span class="highlight">\u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u043F\u0440\u0430\u0446\u044E\u044E\u0442\u044C</span>',
    hero_desc: 'Habeeto \u0440\u043E\u0431\u0438\u0442\u044C \u0437\u0432\u0438\u0447\u043A\u0438 \u0432\u0435\u0441\u0435\u043B\u0438\u043C\u0438 \u0442\u0430 \u043A\u043E\u0440\u0438\u0441\u043D\u0438\u043C\u0438. \u0412\u0456\u0434\u0441\u0442\u0435\u0436\u0443\u0439 \u0449\u043E\u0434\u0435\u043D\u043D\u0456 \u0440\u0443\u0442\u0438\u043D\u0438, \u0431\u0443\u0434\u0443\u0439 \u043F\u043E\u0442\u0443\u0436\u043D\u0456 \u0441\u0435\u0440\u0456\u0457 \u0442\u0430 \u0434\u043E\u0441\u044F\u0433\u0430\u0439 \u0446\u0456\u043B\u0435\u0439 \u2014 \u0456\u0437 \u0442\u0432\u043E\u0457\u043C \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u0438\u043C \u043A\u043E\u043C\u043F\u0430\u043D\u044C\u0439\u043E\u043D\u043E\u043C.',
    hero_cta: '\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u043E',
    hero_learn: '\u0414\u0456\u0437\u043D\u0430\u0442\u0438\u0441\u044F \u0431\u0456\u043B\u044C\u0448\u0435',
    proof_modes: '\u0420\u0435\u0436\u0438\u043C\u0438 \u0442\u0440\u0435\u043A\u0456\u043D\u0433\u0443',
    proof_langs: '\u041C\u043E\u0432',
    proof_themes: '\u0422\u0435\u043C',
    feat_label: '\u0424\u0423\u041D\u041A\u0426\u0406\u0407',
    feat_title: '\u0423\u0441\u0435, \u0449\u043E \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u0434\u043B\u044F \u043A\u0440\u0430\u0449\u0438\u0445 \u0437\u0432\u0438\u0447\u043E\u043A',
    feat_subtitle: '\u041F\u043E\u0442\u0443\u0436\u043D\u0456 \u0456\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0438 \u0434\u043B\u044F \u0432\u0456\u0434\u0441\u0442\u0435\u0436\u0435\u043D\u043D\u044F, \u0432\u0438\u043C\u0456\u0440\u044E\u0432\u0430\u043D\u043D\u044F \u0442\u0430 \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F \u0442\u0432\u043E\u0457\u0445 \u0440\u0443\u0442\u0438\u043D \u2014 \u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u043E \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u043E.',
    feat_track_title: '\u0422\u0440\u0438 \u0440\u0435\u0436\u0438\u043C\u0438 \u0442\u0440\u0435\u043A\u0456\u043D\u0433\u0443',
    feat_track_desc: '\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C, \u0433\u0430\u043B\u043E\u0447\u043A\u0430 \u0430\u0431\u043E \u0447\u0430\u0441 \u2014 \u0442\u0440\u0435\u043A\u0430\u0439 \u0431\u0443\u0434\u044C-\u044F\u043A\u0443 \u0437\u0432\u0438\u0447\u043A\u0443 \u043F\u043E-\u0441\u0432\u043E\u0454\u043C\u0443',
    feat_streak_title: '\u0421\u0435\u0440\u0456\u0457',
    feat_streak_desc: '\u0422\u0440\u0438\u043C\u0430\u0439 \u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u0456\u0441\u0442\u044C \u0437 \u0443\u043D\u0456\u043A\u0430\u043B\u044C\u043D\u043E\u044E \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u044E \u0436\u0438\u0442\u0442\u0456\u0432 \u2014 \u043F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0432 \u0434\u0435\u043D\u044C, \u0432\u0442\u0440\u0430\u0442\u0438\u0432 \u0431\u0434\u0436\u0456\u043B\u043A\u0443',
    feat_goals_title: '\u0420\u043E\u0437\u0443\u043C\u043D\u0456 \u0446\u0456\u043B\u0456',
    feat_goals_desc: '\u0421\u0442\u0430\u0432 \u0442\u0438\u0436\u043D\u0435\u0432\u0456 \u0430\u0431\u043E \u043C\u0456\u0441\u044F\u0447\u043D\u0456 \u0446\u0456\u043B\u0456 \u0437 \u043D\u0430\u043F\u0440\u044F\u043C\u043A\u0430\u043C\u0438 \u00AB\u0449\u043E\u043D\u0430\u0439\u043C\u0435\u043D\u0448\u0435\u00BB \u0442\u0430 \u00AB\u043D\u0435 \u0431\u0456\u043B\u044C\u0448\u0435\u00BB',
    feat_achieve_title: '\u0414\u043E\u0441\u044F\u0433\u043D\u0435\u043D\u043D\u044F \u0442\u0430 \u043C\u0435\u0434\u0430\u043B\u0456',
    feat_achieve_desc: '\u0417\u0434\u043E\u0431\u0443\u0432\u0430\u0439 \u0431\u0440\u043E\u043D\u0437\u043E\u0432\u0456, \u0441\u0440\u0456\u0431\u043D\u0456 \u0442\u0430 \u0437\u043E\u043B\u043E\u0442\u0456 \u043C\u0435\u0434\u0430\u043B\u0456, \u0431\u0443\u0434\u0443\u044E\u0447\u0438 \u0441\u0442\u0456\u0439\u043A\u0456 \u0437\u0432\u0438\u0447\u043A\u0438',
    feat_custom_title: '\u041F\u043E\u0432\u043D\u0430 \u043A\u0430\u0441\u0442\u043E\u043C\u0456\u0437\u0430\u0446\u0456\u044F',
    feat_custom_desc: '16 \u043A\u043E\u043B\u0456\u0440\u043D\u0438\u0445 \u0442\u0435\u043C, \u0456\u043A\u043E\u043D\u043A\u0438 \u0434\u043E\u0434\u0430\u0442\u043A\u0443 \u0442\u0430 \u0441\u0432\u0456\u0442\u043B\u0438\u0439/\u0442\u0435\u043C\u043D\u0438\u0439 \u0440\u0435\u0436\u0438\u043C, \u0449\u043E\u0431 Habeeto \u0431\u0443\u0432 \u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u0442\u0432\u043E\u0457\u043C',
    feat_history_title: '\u0411\u0430\u0433\u0430\u0442\u0430 \u0456\u0441\u0442\u043E\u0440\u0456\u044F',
    feat_history_desc: '\u0406\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u0438\u0439 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440 \u0437 \u0447\u0456\u0442\u043A\u0438\u043C \u043E\u0433\u043B\u044F\u0434\u043E\u043C \u0442\u0432\u043E\u0454\u0457 \u0456\u0441\u0442\u043E\u0440\u0456\u0457 \u0442\u0440\u0435\u043A\u0456\u043D\u0433\u0443, \u0441\u0435\u0440\u0456\u0439 \u0442\u0430 \u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E\u0441\u0442\u0456',
    prem_label: 'PREMIUM',
    prem_title: '\u0412\u0438\u0432\u0435\u0434\u0438 \u0437\u0432\u0438\u0447\u043A\u0438 \u043D\u0430 \u043D\u043E\u0432\u0438\u0439 \u0440\u0456\u0432\u0435\u043D\u044C',
    prem_subtitle: '\u0412\u0456\u0434\u043A\u0440\u0438\u0439 \u0432\u0441\u044E \u043F\u043E\u0442\u0443\u0436\u043D\u0456\u0441\u0442\u044C Habeeto \u0437 \u043F\u0440\u043E\u0441\u0443\u043D\u0443\u0442\u0438\u043C\u0438 \u0456\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438 \u0434\u043B\u044F \u0441\u0435\u0440\u0439\u043E\u0437\u043D\u0438\u0445 \u0437\u0432\u0438\u0447\u043E\u043A.',
    prem_unlimited_title: '\u0411\u0435\u0437 \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u044C',
    prem_unlimited_desc: '\u0416\u043E\u0434\u043D\u0438\u0445 \u043B\u0456\u043C\u0456\u0442\u0456\u0432 \u043D\u0430 \u0437\u0432\u0438\u0447\u043A\u0438 \u0447\u0438 \u0446\u0456\u043B\u0456 \u2014 Habeeto \u0440\u043E\u0441\u0442\u0435 \u0437 \u0442\u043E\u0431\u043E\u044E',
    prem_widget_title: '\u0406\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u0456 \u0432\u0456\u0434\u0436\u0435\u0442\u0438',
    prem_widget_desc: '\u0422\u0440\u0435\u043A\u0430\u0439 \u0442\u0430 \u043A\u0435\u0440\u0443\u0439 \u0437\u0432\u0438\u0447\u043A\u0430\u043C\u0438 \u0437 \u0434\u043E\u043C\u0430\u0448\u043D\u044C\u043E\u0433\u043E \u0435\u043A\u0440\u0430\u043D\u0430 \u2014 \u0432\u0456\u0434\u043C\u0456\u0447\u0430\u0439, \u0437\u0431\u0456\u043B\u044C\u0448\u0443\u0439 \u043B\u0456\u0447\u0438\u043B\u044C\u043D\u0438\u043A\u0438, \u0432\u0441\u0435 \u0431\u0435\u0437 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0442\u044F \u0434\u043E\u0434\u0430\u0442\u043A\u0443',
    prem_freeze_title: '\u0417\u0430\u043C\u043E\u0440\u043E\u0437\u043A\u0430 \u0441\u0435\u0440\u0456\u0457',
    prem_freeze_desc: '\u0407\u0434\u0435\u0448 \u0443 \u0432\u0456\u0434\u043F\u0443\u0441\u0442\u043A\u0443? \u0417\u0430\u043C\u043E\u0440\u043E\u0437\u044C \u0441\u0435\u0440\u0456\u044E \u0456 \u043F\u0440\u043E\u0434\u043E\u0432\u0436 \u0437\u0432\u0456\u0434\u0442\u0438, \u0434\u0435 \u0437\u0443\u043F\u0438\u043D\u0438\u0432\u0441\u044F',
    prem_live_title: '\u0416\u0438\u0432\u0438\u0439 \u0442\u0440\u0435\u043A\u0456\u043D\u0433',
    prem_live_desc: '\u0422\u0430\u0439\u043C\u0435\u0440 \u0437\u0432\u0438\u0447\u043E\u043A \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0430\u0454\u0442\u044C\u0441\u044F \u0432 Dynamic Island \u0442\u0430 \u043D\u0430 \u0435\u043A\u0440\u0430\u043D\u0456 \u0431\u043B\u043E\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0447\u0435\u0440\u0435\u0437 Live Activity',
    prem_analytics_title: '\u0420\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u0430 \u0430\u043D\u0430\u043B\u0456\u0442\u0438\u043A\u0430',
    prem_analytics_desc: '\u0422\u0435\u043F\u043B\u043E\u0432\u0456 \u043A\u0430\u0440\u0442\u0438, \u043F\u043E\u0440\u0456\u0432\u043D\u044F\u043D\u043D\u044F \u043F\u043E \u0442\u0438\u0436\u043D\u044F\u0445, \u0434\u0435\u0442\u0430\u043B\u0456 \u043F\u043E \u0437\u0432\u0438\u0447\u043A\u0430\u0445 \u0442\u0430 \u0433\u0440\u0430\u0444\u0456\u043A\u0438 \u0442\u0440\u0435\u043D\u0434\u0456\u0432',
    prem_backup_title: '\u0411\u0435\u043A\u0430\u043F \u0442\u0430 \u0432\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F',
    prem_backup_desc: '\u0415\u043A\u0441\u043F\u043E\u0440\u0442\u0443\u0439 \u0432\u0441\u0456 \u0434\u0430\u043D\u0456 \u0442\u0430 \u0432\u0456\u0434\u043D\u043E\u0432\u0438 \u0457\u0445 \u043D\u0430 \u043D\u043E\u0432\u043E\u043C\u0443 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u0457 \u2014 \u043D\u0456\u043A\u043E\u043B\u0438 \u043D\u0435 \u0432\u0442\u0440\u0430\u0447\u0430\u0439 \u043F\u0440\u043E\u0433\u0440\u0435\u0441',
    how_label: '\u042F\u041A \u0426\u0415 \u041F\u0420\u0410\u0426\u042E\u0404',
    how_title: '\u041F\u043E\u0447\u043D\u0438 \u0442\u0440\u0435\u043A\u0430\u0442\u0438 \u0437\u0430 \u0441\u0435\u043A\u0443\u043D\u0434\u0438',
    how_1_title: '\u0421\u0442\u0432\u043E\u0440\u0438 \u0437\u0432\u0438\u0447\u043A\u0443',
    how_1_desc: '\u041E\u0431\u0435\u0440\u0438 \u0442\u0438\u043F \u0437\u0432\u0438\u0447\u043A\u0438 \u2014 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C, \u0433\u0430\u043B\u043E\u0447\u043A\u0430 \u0430\u0431\u043E \u0447\u0430\u0441 \u2014 \u0456 \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u0438 \u0447\u0430\u0441\u0442\u043E\u0442\u0443.',
    how_2_title: '\u0422\u0440\u0435\u043A\u0430\u0439 \u0449\u043E\u0434\u043D\u044F',
    how_2_desc: '\u0424\u0456\u043A\u0441\u0443\u0439 \u043F\u0440\u043E\u0433\u0440\u0435\u0441 \u043E\u0434\u043D\u0438\u043C \u0434\u043E\u0442\u0438\u043A\u043E\u043C. Habeeto \u0437\u0430\u043F\u0430\u043C\u2019\u044F\u0442\u0430\u0454, \u0430 \u0442\u0438 \u0437\u043E\u0441\u0435\u0440\u0435\u0434\u0436\u0443\u0439\u0441\u044F \u043D\u0430 \u0434\u0456\u0457.',
    how_3_title: '\u0411\u0443\u0434\u0443\u0439 \u0441\u0435\u0440\u0456\u0457',
    how_3_desc: '\u0422\u0440\u0438\u043C\u0430\u0439 \u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u0456\u0441\u0442\u044C \u0456 \u0441\u043F\u043E\u0441\u0442\u0435\u0440\u0456\u0433\u0430\u0439, \u044F\u043A \u0440\u043E\u0441\u0442\u0435 \u0441\u0435\u0440\u0456\u044F. \u0422\u0432\u043E\u0457 \u0431\u0434\u0436\u0456\u043B\u043A\u0438 \u0440\u0430\u0445\u0443\u044E\u0442\u044C \u043D\u0430 \u0442\u0435\u0431\u0435!',
    streak_label: '\u0421\u0415\u0420\u0406\u0407',
    streak_title: '\u0422\u0432\u043E\u044F \u0441\u0435\u0440\u0456\u044F, \u0442\u0432\u043E\u0457 \u0441\u0442\u0430\u0432\u043A\u0438',
    streak_subtitle: '\u0423\u043D\u0456\u043A\u0430\u043B\u044C\u043D\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0436\u0438\u0442\u0442\u0456\u0432 Habeeto \u0440\u043E\u0431\u0438\u0442\u044C \u0441\u0435\u0440\u0456\u0457 \u0432\u0430\u0436\u043B\u0438\u0432\u0438\u043C\u0438. \u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0432 \u0434\u0435\u043D\u044C \u2014 \u0431\u0434\u0436\u0456\u043B\u043A\u0430 \u043B\u0435\u0442\u0438\u0442\u044C \u0433\u0435\u0442\u044C. \u0410\u043B\u0435 \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0443\u0439 \u2014 \u0456 \u0432\u043E\u043D\u0430 \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u0442\u044C\u0441\u044F!',
    streak_lives_title: '\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u0436\u0438\u0442\u0442\u0456\u0432',
    streak_lives_desc: '\u041F\u043E\u0447\u0438\u043D\u0430\u0454\u0448 \u0456\u0437 3 \u0431\u0434\u0436\u0456\u043B\u043E\u043A. \u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0432 \u0434\u0435\u043D\u044C \u2014 \u0432\u0442\u0440\u0430\u0447\u0430\u0454\u0448 \u043E\u0434\u043D\u0443. \u0422\u0440\u0438\u043C\u0430\u0439 \u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u0456\u0441\u0442\u044C, \u0449\u043E\u0431 \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438.',
    streak_freeze_title: '\u0417\u0430\u043C\u043E\u0440\u043E\u0437\u043A\u0430 \u0441\u0435\u0440\u0456\u0457',
    streak_freeze_desc: '\u0407\u0434\u0435\u0448 \u0443 \u0432\u0456\u0434\u043F\u0443\u0441\u0442\u043A\u0443? \u0417\u0430\u043C\u043E\u0440\u043E\u0437\u044C \u0441\u0435\u0440\u0456\u044E \u0456 \u043F\u0440\u043E\u0434\u043E\u0432\u0436 \u0437\u0432\u0456\u0434\u0442\u0438, \u0434\u0435 \u0437\u0443\u043F\u0438\u043D\u0438\u0432\u0441\u044F.',
    streak_cal_title: '\u0412\u0438\u0433\u043B\u044F\u0434 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044F',
    streak_cal_desc: '\u041F\u0435\u0440\u0435\u0433\u043B\u044F\u0434\u0430\u0439 \u0432\u0441\u044E \u0456\u0441\u0442\u043E\u0440\u0456\u044E \u043E\u0434\u043D\u0438\u043C \u043F\u043E\u0433\u043B\u044F\u0434\u043E\u043C \u0437 \u0456\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u0438\u043C \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u0435\u043C.',
    streak_day: '\u0434\u043D\u0456\u0432 \u0441\u0435\u0440\u0456\u0457',
    streak_best: '\u041E\u0441\u043E\u0431\u0438\u0441\u0442\u0438\u0439 \u0440\u0435\u043A\u043E\u0440\u0434!',
    streak_lives: '\u0416\u0438\u0442\u0442\u044F',
    theme_label: '\u0422\u0415\u041C\u0418',
    theme_title: '\u0417\u0440\u043E\u0431\u0438 \u0439\u043E\u0433\u043E \u0441\u0432\u043E\u0457\u043C',
    theme_subtitle: '\u041E\u0431\u0438\u0440\u0430\u0439 \u0437 16 \u0447\u0443\u0434\u043E\u0432\u0438\u0445 \u0442\u0435\u043C. \u041D\u0430\u0442\u0438\u0441\u043D\u0438 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434\u0443 \u2014 \u0434\u0438\u0432\u0438\u0441\u044C, \u044F\u043A \u0437\u043C\u0456\u043D\u044E\u0454\u0442\u044C\u0441\u044F \u0432\u0441\u044F \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430.',
    theme_gold: '\u0417\u043E\u043B\u043E\u0442\u043E', theme_silver: '\u0421\u0440\u0456\u0431\u043B\u043E', theme_sapphire: '\u0421\u0430\u043F\u0444\u0456\u0440', theme_amethyst: '\u0410\u043C\u0435\u0442\u0438\u0441\u0442',
    theme_coral: '\u041A\u043E\u0440\u0430\u043B', theme_sunset: '\u0417\u0430\u0445\u0456\u0434 \u0441\u043E\u043D\u0446\u044F', theme_rose: '\u0422\u0440\u043E\u044F\u043D\u0434\u0430', theme_midnight: '\u041F\u0456\u0432\u043D\u0456\u0447',
    theme_slate: '\u0413\u0440\u0438\u0444\u0435\u043B\u044C', theme_onyx: '\u041E\u043D\u0456\u043A\u0441', theme_financer: 'Financer', theme_ember: '\u0416\u0430\u0440',
    theme_mocha: '\u041C\u043E\u043A\u043A\u043E', theme_arctic: '\u0410\u0440\u043A\u0442\u0438\u043A\u0430', theme_lavender: '\u041B\u0430\u0432\u0430\u043D\u0434\u0430', theme_copper: '\u041C\u0456\u0434\u044C',
    cta_title: '\u0413\u043E\u0442\u043E\u0432\u0438\u0439 \u0431\u0443\u0434\u0443\u0432\u0430\u0442\u0438 \u0437\u0432\u0438\u0447\u043A\u0438, \u0449\u043E \u0442\u0440\u0438\u0432\u0430\u044E\u0442\u044C?',
    cta_desc: '\u041F\u0440\u0438\u0454\u0434\u043D\u0443\u0439\u0441\u044F \u0434\u043E \u0442\u0438\u0441\u044F\u0447, \u0445\u0442\u043E \u0431\u0443\u0434\u0443\u0454 \u043A\u0440\u0430\u0449\u0456 \u0440\u0443\u0442\u0438\u043D\u0438 \u0437 Habeeto. \u0411\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u043E, \u0431\u0435\u0437 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457.',
    cta_btn: '\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0432 App Store',
    footer_privacy: '\u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456',
    footer_terms: '\u0423\u043C\u043E\u0432\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F',
    footer_support: '\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430',
  }
};

const themeKeys = ['theme_gold','theme_silver','theme_sapphire','theme_amethyst','theme_coral','theme_sunset','theme_rose','theme_midnight','theme_slate','theme_onyx','theme_financer','theme_ember','theme_mocha','theme_arctic','theme_lavender','theme_copper'];

let currentLang = 'en';

function setLanguage(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  localStorage.setItem('habeeto_lang', lang);
  document.documentElement.lang = lang;

  // Update all data-i18n text elements
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key] != null) el.textContent = i18n[lang][key];
  });

  // Update all data-i18n-html elements (contain inner HTML like spans)
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (i18n[lang][key] != null) el.innerHTML = i18n[lang][key];
  });

  // Update theme tooltips
  document.querySelectorAll('.theme-chip').forEach((chip, i) => {
    const key = themeKeys[i];
    if (key && i18n[lang][key]) {
      const tooltip = chip.querySelector('.theme-name-tooltip');
      if (tooltip) tooltip.textContent = i18n[lang][key];
      chip.setAttribute('title', i18n[lang][key]);
    }
  });

  // Update active language chip
  document.querySelectorAll('.lang-chip').forEach((chip) => {
    chip.classList.toggle('active', chip.getAttribute('data-lang-btn') === lang);
  });
}

// ===== Theme =====
let currentThemeIndex = 0;
let isDarkMode = true;

function applyTheme(index, dark) {
  const t = themes[index];
  const root = document.documentElement;
  const primary = dark ? t.primaryDark : t.primaryLight;
  const text = dark ? t.textDark : t.textLight;
  const muted = blendColor(text, primary, 0.45);

  root.style.setProperty('--navy', primary);
  root.style.setProperty('--navy-light', dark ? lighten(primary, 0.06) : darken(primary, 0.03));
  root.style.setProperty('--gold', t.accent);
  root.style.setProperty('--gold-light', lighten(t.accent, 0.12));
  root.style.setProperty('--gold-dim', hexToRgba(t.accent, 0.15));
  root.style.setProperty('--text', text);
  root.style.setProperty('--text-muted', muted);
  root.style.setProperty('--accent-text', t.accentText);

  document.querySelectorAll('.theme-chip').forEach((chip, i) => {
    chip.classList.toggle('active', i === index);
  });

  document.querySelectorAll('.mode-toggle').forEach((toggle) => {
    toggle.classList.toggle('is-light', !dark);
  });

  currentThemeIndex = index;
  isDarkMode = dark;
}

// ===== Color Helpers =====
function hexToRgb(hex) {
  const h = hex.replace('#', '');
  return [parseInt(h.substring(0, 2), 16), parseInt(h.substring(2, 4), 16), parseInt(h.substring(4, 6), 16)];
}

function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('');
}

function lighten(hex, amount) {
  const [r, g, b] = hexToRgb(hex);
  return rgbToHex(r + (255 - r) * amount, g + (255 - g) * amount, b + (255 - b) * amount);
}

function darken(hex, amount) {
  const [r, g, b] = hexToRgb(hex);
  return rgbToHex(r * (1 - amount), g * (1 - amount), b * (1 - amount));
}

function blendColor(fg, bg, ratio) {
  const [fr, fg2, fb] = hexToRgb(fg);
  const [br, bg2, bb] = hexToRgb(bg);
  return rgbToHex(fr * (1 - ratio) + br * ratio, fg2 * (1 - ratio) + bg2 * ratio, fb * (1 - ratio) + bb * ratio);
}

function hexToRgba(hex, alpha) {
  const [r, g, b] = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// ===== Scroll Animations =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

// ===== Parallax =====
function initParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  if (!parallaxElements.length) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        parallaxElements.forEach((el) => {
          const speed = parseFloat(el.dataset.parallax) || 0.1;
          const rect = el.getBoundingClientRect();
          const center = rect.top + rect.height / 2;
          const viewCenter = window.innerHeight / 2;
          const offset = (center - viewCenter) * speed;
          el.style.transform = `translateY(${offset}px)`;
        });
        ticking = false;
      });
      ticking = true;
    }
  });
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  // Scroll animations
  document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

  // Nav scroll effect
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Theme chips
  document.querySelectorAll('.theme-chip').forEach((chip, i) => {
    chip.addEventListener('click', () => applyTheme(i, isDarkMode));
  });

  // Mode toggle
  document.querySelectorAll('.mode-toggle').forEach((toggle) => {
    toggle.addEventListener('click', () => applyTheme(currentThemeIndex, !isDarkMode));
  });

  // Language chips
  document.querySelectorAll('.lang-chip').forEach((chip) => {
    chip.addEventListener('click', () => setLanguage(chip.getAttribute('data-lang-btn')));
  });

  // Mobile menu toggle
  const mobileToggle = document.querySelector('.nav-mobile-toggle');
  if (mobileToggle && nav) {
    mobileToggle.addEventListener('click', () => {
      nav.classList.toggle('mobile-open');
      mobileToggle.innerHTML = nav.classList.contains('mobile-open') ? '&#10005;' : '&#9776;';
    });
    // Close on link tap
    document.querySelectorAll('.mobile-menu a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('mobile-open');
        mobileToggle.innerHTML = '&#9776;';
      });
    });
  }

  // Restore saved language
  const saved = localStorage.getItem('habeeto_lang');
  if (saved && i18n[saved]) {
    setLanguage(saved);
  }

  // Parallax
  initParallax();
});
