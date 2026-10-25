/* Russian interface layer for the prebuilt PARALLEL site. Keep English as the source text. */
(() => {
  const strings = {
    'Skip to content': 'Перейти к содержимому',
    'AI PRODUCTION STUDIO': 'СТУДИЯ AI-ПРОДАКШЕНА',
    'Work': 'Работы',
    'What we do': 'Услуги',
    'About': 'О нас',
    'Contact': 'Контакты',
    'LET’S TALK': 'ОБСУДИМ ПРОЕКТ',
    'SAME WORLD. DIFFERENT PERSPECTIVE.': 'ТОТ ЖЕ МИР. ДРУГОЙ ВЗГЛЯД.',
    'WHO NEEDS': 'ЗАЧЕМ НАМ',
    'REALITY?': 'РЕАЛЬНОСТЬ?',
    'We create alternative realities for brands.': 'Создаём для брендов другие реальности.',
    'AI video and images. Bold ideas, made into finished ads.': 'AI-видео и изображения. Смелые идеи, воплощённые в готовой рекламе.',
    'INDEPENDENT MINDS. PARALLEL WORLDS.': 'НЕЗАВИСИМЫЕ ИДЕИ. ПАРАЛЛЕЛЬНЫЕ МИРЫ.',
    'VIEW CATEGORIES': 'ВСЕ НАПРАВЛЕНИЯ',
    'Real Estate': 'Недвижимость',
    'Furniture': 'Мебель',
    'Brands': 'Бренды',
    'Hotel Stories': 'Отели',
    'Hospitality': 'Гостиничный бизнес',
    'Product': 'Продукт',
    'Beauty': 'Бьюти',
    'Fashion': 'Мода',
    '2 projects': '2 проекта',
    '4 projects': '4 проекта',
    'AI social content for hotels': 'AI-контент для отелей',
    'Independent creative production. AI video & images.': 'Независимый креативный продакшен. AI-видео и изображения.',
    'WHAT': 'ЧТО',
    'WE DO': 'МЫ ДЕЛАЕМ',
    'AI VIDEO': 'AI-ВИДЕО',
    'Ad films, Reels and cinematic sequences. From a bold idea to the final cut.': 'Рекламные ролики, Reels и кинематографичные сцены. От смелой идеи до финального монтажа.',
    'AI IMAGES': 'AI-ИЗОБРАЖЕНИЯ',
    'Campaign imagery, product visuals, fashion, lifestyle and architecture.': 'Изображения для кампаний: продукты, мода, лайфстайл и архитектура.',
    'CREATIVE PRODUCTION': 'КРЕАТИВНЫЙ ПРОДАКШЕН',
    'Concept, script, generation, editing, colour, sound and format adaptations.': 'Концепция, сценарий, генерация, монтаж, цвет, звук и адаптация под форматы.',
    'ART DIRECTION': 'АРТ-ДИРЕКШЕН',
    'A visual concept, a clear style and consistency across the entire production.': 'Визуальная концепция, цельный стиль и единый подход на всех этапах производства.',
    'CONCEPT / SCRIPT / VISUALS / EDIT / SOUND / ADAPTATIONS': 'КОНЦЕПЦИЯ / СЦЕНАРИЙ / ВИЗУАЛ / МОНТАЖ / ЗВУК / АДАПТАЦИИ',
    'Urgent production on request. Scope and timing agreed individually.': 'Срочные проекты — по запросу. Объём и сроки согласуем индивидуально.',
    '( ABOUT US )': '( О НАС )',
    'A CREATIVE STUDIO': 'КРЕАТИВНАЯ СТУДИЯ',
    'FOR BRANDS THAT': 'ДЛЯ БРЕНДОВ, КОТОРЫЕ',
    'THINK FURTHER.': 'МЫСЛЯТ ШИРЕ.',
    'PARALLEL is an independent creative studio. We turn bold ideas into AI-driven advertising — shaping the concept, visuals, motion, edit and sound into one complete story.': 'PARALLEL — независимая креативная студия. Мы превращаем смелые идеи в рекламу с помощью AI: объединяем концепцию, визуал, движение, монтаж и звук в цельную историю.',
    'IDEAS': 'ИДЕИ',
    'VISUALS': 'ВИЗУАЛ',
    'MOTION': 'ДВИЖЕНИЕ',
    'FINAL CUT': 'ФИНАЛЬНЫЙ МОНТАЖ',
    '( CONTACT )': '( КОНТАКТЫ )',
    'LET’S': 'ДАВАЙТЕ',
    'CREATE': 'СОЗДАВАТЬ',
    'TOGETHER.': 'ВМЕСТЕ.',
    'Start a project': 'Начать проект',
    'Instagram — @thatsparallel': 'Instagram — @thatsparallel',
    'INSTAGRAM': 'INSTAGRAM',
    'EMAIL': 'ПОЧТА',
    '[ YOUR NEXT REALITY ]': '[ ВАША НОВАЯ РЕАЛЬНОСТЬ ]',
    'TALK.': 'ПОГОВОРИМ.',
    'Choose where to start the conversation.': 'Выберите удобный способ связи.',
    'Coming soon': 'Скоро',
    'Email': 'Почта',
    'Each project is quoted individually.': 'Стоимость каждого проекта рассчитывается индивидуально.',
    'BACK TO HOME': 'НА ГЛАВНУЮ',
    '[ SELECTED PERSPECTIVES ]': '[ ИЗБРАННЫЕ РАБОТЫ ]',
    'SELECTED': 'ИЗБРАННЫЕ',
    'WORK.': 'РАБОТЫ.',
    'Real Estate · Furniture · Brands · Hotels': 'Недвижимость · Мебель · Бренды · Отели',
    'YOUR NEXT REALITY': 'ВАША НОВАЯ РЕАЛЬНОСТЬ',
    'STARTS WITH AN IDEA.': 'НАЧИНАЕТСЯ С ИДЕИ.',
    'ALL CATEGORIES': 'ВСЕ НАПРАВЛЕНИЯ',
    'PROJECT': 'ПРОЕКТ',
    'PROJECTS': 'ПРОЕКТА',
    'REAL ESTATE': 'НЕДВИЖИМОСТЬ',
    'FURNITURE': 'МЕБЕЛЬ',
    'BRANDS': 'БРЕНДЫ',
    'HOTEL STORIES': 'ОТЕЛИ',
    'BACK TO': 'НАЗАД: ',
    'BACK TO REAL ESTATE': 'К НЕДВИЖИМОСТИ',
    'BACK TO FURNITURE': 'К МЕБЕЛИ',
    'BACK TO BRANDS': 'К БРЕНДАМ',
    'BACK TO HOTEL STORIES': 'К ОТЕЛЯМ',
    '01 / THE DIRECTION': '01 / КОНЦЕПЦИЯ',
    'PROJECT MATERIALS': 'СОСТАВ ПРОЕКТА',
    'MAKE SOMETHING LIKE THIS': 'ОБСУДИТЬ ПОХОЖИЙ ПРОЕКТ',
    'NEXT PERSPECTIVE': 'СЛЕДУЮЩИЙ ПРОЕКТ',
    'EXPLORE CATEGORIES': 'СМОТРЕТЬ НАПРАВЛЕНИЯ',
    'ALL WORK': 'ВСЕ РАБОТЫ',
    'VIDEO': 'ВИДЕО',
    'STILL': 'ИЗОБРАЖЕНИЕ',
    'CONCEPT / DEMO': 'КОНЦЕПТ / ДЕМО',
    'DEMONSTRATION CONCEPT': 'ДЕМОНСТРАЦИОННЫЙ КОНЦЕПТ',
    'STUDIO WORK': 'РАБОТА СТУДИИ',
    'SCRIPT-LED PRODUCTION': 'ПРОДАКШЕН ПО СЦЕНАРИЮ',
    'Estimated production budget': 'Ориентировочный бюджет',
    'From': 'От',
    'Price per finished scene. A complete video is quoted by scene count and complexity; editing, sound and extra formats are scoped separately.': 'Цена за готовую сцену. Стоимость ролика зависит от количества и сложности сцен; монтаж, звук и дополнительные форматы рассчитываются отдельно.',
    'One 4–7 second vertical scene: a generated still, animation and final export.': 'Одна вертикальная сцена на 4–7 секунд: генерация изображения, анимация и финальный экспорт.',
    'One short furniture scene: reference-based scene design, AI still-image generation and animation.': 'Одна короткая сцена с мебелью: разработка по референсам, AI-изображение и анимация.',
    'One short scene without lip sync: reference-based scene design, AI still-image generation and animation.': 'Одна короткая сцена без синхронизации губ: разработка по референсам, AI-изображение и анимация.',
    'One short speaking scene: reference-based scene design, AI still-image generation, animation and lip sync.': 'Одна короткая сцена с речью: разработка по референсам, AI-изображение, анимация и синхронизация губ.',
    'Short-form creative scenes': 'Короткие креативные сцены',
    'Still generation and animation': 'Генерация изображений и анимация',
    'Vertical AI video compilation': 'Вертикальная подборка AI-видео',
    'Individual animated creative scenes': 'Отдельные анимированные сцены',
    'Reference-based product scenes': 'Продуктовые сцены по референсам',
    'Furniture product video': 'Продуктовое видео о мебели',
    'Furniture product video.': 'Продуктовое видео о мебели.',
    'Furniture concept video': 'Концептуальное видео о мебели',
    'Furniture concept video.': 'Концептуальное видео о мебели.',
    'Product & interior visuals': 'Продуктовые и интерьерные изображения',
    'Vertical furniture video': 'Вертикальное видео о мебели',
    'AI-generated furniture still': 'AI-изображение мебели',
    'AI hotel social content': 'AI-контент для соцсетей отелей',
    'Vertical hotel social video': 'Вертикальное видео для соцсетей отеля',
    'Reference-based AI scenes': 'AI-сцены по референсам',
    'Lip-synced speaking scenes': 'Сцены с синхронизацией речи',
    'Property advertising film': 'Рекламный фильм о недвижимости',
    'Vertical property advertising film': 'Вертикальный рекламный фильм о недвижимости',
    'Scene design from a supplied script': 'Разработка сцен по предоставленному сценарию',
    'Original scenes built from a supplied script': 'Оригинальные сцены по предоставленному сценарию',
    'AI imagery, animation and edit': 'AI-изображения, анимация и монтаж',
    'AI-generated hotel social video. Scenes are built from references, generated as still images and animated.': 'AI-видео для соцсетей отеля. Сцены создаются по референсам: сначала изображения, затем анимация.',
    'AI-created studio montage of short creative scenes.': 'Студийная подборка коротких AI-сцен.',
    'AI-created studio visual.': 'Студийное AI-изображение.',
    'AI-generated visualization of an unbuilt development. Not live footage.': 'AI-визуализация ещё не построенного объекта. Не съёмка реального здания.',
    'Original AI demonstration artwork. Not a client commission.': 'Оригинальная AI-работа для демонстрации. Не клиентский заказ.',
    'This page demonstrates a possible creative direction. Listed video treatments are concepts; no finished film, campaign performance or commercial relationship is claimed.': 'Эта страница показывает возможное креативное направление. Указанные видеорешения — концепты; готовый фильм, результаты кампании и коммерческие отношения не заявляются.',
    'A series of visual ideas for beauty and fashion.': 'Серия визуальных идей для бьюти и моды.',
    'Fashion and accessories in unexpected settings.': 'Мода и аксессуары в неожиданных декорациях.',
    'Short ideas, built to make a product impossible to ignore.': 'Короткие идеи, которые помогают продукту выделиться.',
    'Product ideas with movement and attitude.': 'Продуктовые идеи с динамикой и характером.',
    'Short creative scenes for products, fashion and brand imagery.': 'Короткие креативные сцены для продуктов, моды и брендов.',
    'Furniture, materials and interior visual concepts.': 'Визуальные концепции для мебели, материалов и интерьеров.',
    'AI-generated social content for hotels: guest stories, atmosphere, room details and everyday experiences.': 'AI-контент для соцсетей отелей: истории гостей, атмосфера, детали номеров и повседневные впечатления.',
    'Construction, development and investment content.': 'Контент для девелопмента, строительства и инвестиций.',
    'An unbuilt property development, visualized as a finished advertising film.': 'Ещё не построенный объект, представленный в готовом рекламном фильме.',
    'A scripted arrival story for a development that has yet to be built.': 'История прибытия к объекту, который ещё не построен.',
    'Furniture placed in unexpected natural settings.': 'Мебель в неожиданных природных локациях.',
    'Seating presented through light, materials and composition.': 'Кресла и стулья, показанные через свет, материалы и композицию.',
    'A sofa, explored through details and different arrangements.': 'Диван, раскрытый через детали и разные ракурсы.',
    'A product, placed in its own visual world.': 'Продукт в собственном визуальном мире.',
    'Quiet details and moments around the stay.': 'Тихие детали и моменты отдыха.',
    'A guest-led introduction to a hotel stay.': 'Знакомство с отелем глазами гостя.',
    'Everyday experiences, shaped into a hotel reel.': 'Повседневные впечатления в формате ролика об отеле.',
    'Room details, made into social content.': 'Детали номера, превращённые в контент для соцсетей.',
    'A vertical compilation moving between fragrance, jewellery, fashion portraits and surreal desert scenes. The edit brings distinct short concepts together in one sequence.': 'Вертикальная подборка: парфюмерия, украшения, модные портреты и сюрреалистичные сцены в пустыне. Монтаж объединяет разные короткие концепции в одну историю.',
    'A vertical compilation combining fashion portraits, headphones, eyewear and large-scale outdoor visual ideas. Independent short scenes bring products into different visual worlds.': 'Вертикальная подборка с модными портретами, наушниками, очками и масштабными сценами на открытом воздухе. Каждая короткая сцена помещает продукт в новый визуальный мир.',
    'A vertical compilation of independent creative scenes spanning food, footwear, a watch and lifestyle imagery. Each sequence stands on its own as a short visual idea.': 'Вертикальная подборка отдельных сцен с едой, обувью, часами и лайфстайл-образами. Каждая последовательность — самостоятельная короткая идея.',
    'A vertical compilation spanning fashion, food, skincare, fragrance and motorsport imagery. Short creative scenes mix product close-ups, portraits and motion.': 'Вертикальная подборка о моде, еде, уходе за кожей, парфюмерии и автоспорте. Короткие сцены соединяют крупные планы продуктов, портреты и движение.',
    'Working from a supplied script and without source footage or visual assets, we developed the environments and every shot ourselves. AI-generated imagery, animation and editing turned the planned development into a cinematic vertical film.': 'По предоставленному сценарию, без исходных съёмок и визуальных материалов, мы самостоятельно создали окружение и каждый кадр. AI-изображения, анимация и монтаж превратили проект будущего объекта в кинематографичный вертикальный фильм.',
    'The script was provided; the visuals were not. We constructed the arrival, hospitality and interior scenes independently, generating and animating the imagery before assembling the finished vertical ad.': 'Сценарий был предоставлен, визуальные материалы — нет. Мы самостоятельно создали сцены прибытия, гостевых пространств и интерьеров, сгенерировали и анимировали изображения, затем собрали готовую вертикальную рекламу.',
    'Sofas and chairs move between a coastal setting, rice fields and a tropical waterfall. Each scene pairs a furniture composition with a different landscape.': 'Диваны и кресла появляются на побережье, среди рисовых полей и у тропического водопада. В каждой сцене мебель сочетается с новым ландшафтом.',
    'A short sequence of chairs and armchairs in restrained interior settings. The framing focuses on wood, upholstery, silhouettes and the play of light and shadow.': 'Короткая серия со стульями и креслами в сдержанных интерьерах. В центре внимания — дерево, обивка, силуэты и игра света с тенью.',
    'A grey sofa presented through room views, close-ups and a sequence of changing arrangements. The edit focuses on cushions, proportions and material details.': 'Серый диван показан в интерьере, крупным планом и в разных композициях. Монтаж акцентирует подушки, пропорции и фактуру материала.',
    'An ivory corner sofa against a graphite wall. The composition uses a restrained interior, soft shadows and a neutral palette to focus attention on the furniture.': 'Угловой диван цвета слоновой кости на фоне графитовой стены. Сдержанный интерьер, мягкие тени и нейтральная палитра направляют внимание на мебель.',
    'Quiet interior details, warm light, greenery and a short yoga scene create an atmosphere-led vertical reel.': 'Спокойные детали интерьера, тёплый свет, зелень и короткая сцена йоги создают атмосферный вертикальный ролик.',
    'A guest-led vertical reel moving between the pool, bedroom and gardens. Generated scenes and lip-synced speaking shots bring the stay into a social-media format.': 'Вертикальный ролик глазами гостьи: бассейн, номер и сад. Сгенерированные сцены и кадры с синхронизированной речью передают впечатление от отдыха для соцсетей.',
    'A day-in-the-life sequence across the room, pool, outdoor training and time outside, ending with an evening pool view.': 'Один день в отеле: номер, бассейн, тренировка на открытом воздухе и прогулка. История заканчивается вечерним видом на бассейн.',
    'Coffee preparation, warm-lit fittings, a shower scene and the bedroom turn room details into a short vertical story.': 'Приготовление кофе, детали в тёплом свете, душевая и спальня складываются в короткую вертикальную историю о номере.',
    'BEAUTY & FASHION': 'БЬЮТИ И МОДА',
    'FASHION & ACCESSORIES': 'МОДА И АКСЕССУАРЫ',
    'PRODUCT & LIFESTYLE': 'ПРОДУКТ И ЛАЙФСТАЙЛ',
    'PRODUCT & SPORT': 'ПРОДУКТ И СПОРТ',
    'FURNITURE IN NATURE': 'МЕБЕЛЬ И ПРИРОДА',
    'CHAIRS & ARMCHAIRS': 'СТУЛЬЯ И КРЕСЛА',
    'SOFA DETAILS': 'ДЕТАЛИ ДИВАНА',
    'HOSTED REEL': 'РОЛИК С ГЕРОИНЕЙ',
    'HOTEL LIFESTYLE': 'ЖИЗНЬ В ОТЕЛЕ',
    'HOTEL ATMOSPHERE': 'АТМОСФЕРА ОТЕЛЯ',
    'ROOM DETAILS': 'ДЕТАЛИ НОМЕРА',
    'DEVELOPMENT VISUALS': 'ВИЗУАЛИЗАЦИЯ ПРОЕКТА',
    'ARRIVAL FILM': 'ФИЛЬМ О ПРИБЫТИИ',
    'Real Estate / SCRIPT-LED PRODUCTION': 'Недвижимость / ПРОДАКШЕН ПО СЦЕНАРИЮ',
    'BEAUTY & FASHION creative video': 'Креативное видео: бьюти и мода',
    'FASHION & ACCESSORIES creative video': 'Креативное видео: мода и аксессуары',
    'PRODUCT & LIFESTYLE creative video': 'Креативное видео: продукт и лайфстайл',
    'PRODUCT & SPORT creative video': 'Креативное видео: продукт и спорт',
    'DEVELOPMENT VISUALS creative video': 'Креативное видео: визуализация проекта',
    'ARRIVAL FILM creative video': 'Креативное видео: фильм о прибытии',
    'FURNITURE IN NATURE creative video': 'Креативное видео: мебель и природа',
    'CHAIRS & ARMCHAIRS creative video': 'Креативное видео: стулья и кресла',
    'SOFA DETAILS creative video': 'Креативное видео: детали дивана',
    'HOTEL ATMOSPHERE creative video': 'Креативное видео: атмосфера отеля',
    'HOSTED REEL creative video': 'Креативное видео: ролик с героиней',
    'HOTEL LIFESTYLE creative video': 'Креативное видео: жизнь в отеле',
    'ROOM DETAILS creative video': 'Креативное видео: детали номера',
    'Main navigation': 'Основная навигация',
    'Mobile navigation': 'Мобильная навигация',
    'Open navigation': 'Открыть меню',
    'Close navigation': 'Закрыть меню',
    'PARALLEL home': 'PARALLEL — главная',
    'Studio contacts': 'Контакты студии',
    'Back to top': 'Наверх',
    'Close contact options': 'Закрыть способы связи',
    'Choose how to contact the studio': 'Выберите способ связи со студией',
    'Media type: video': 'Тип материала: видео',
    'Media type: still': 'Тип материала: изображение',
    'Lime inflatable warning sign reading CAUTION AI CONTENT, with a stylised AI icon.': 'Лаймовый надувной знак «CAUTION AI CONTENT» со стилизованным AI-символом.',
    'AI-generated architectural visualization of an unbuilt property with a pool at sunset.': 'AI-визуализация ещё не построенного объекта с бассейном на закате.',
    'Furniture concept video still: grey seating beside the sea and dark coastal cliffs.': 'Кадр концептуального видео: серая мебель у моря на фоне тёмных прибрежных скал.',
    'Creative video still: a fashion portrait with sculptural metallic headphones.': 'Кадр креативного видео: модный портрет в скульптурных металлических наушниках.',
    'AI-created hotel reel: a woman beside a long outdoor swimming pool.': 'Кадр AI-ролика об отеле: женщина у длинного открытого бассейна.',
    'AI-created furniture visual: an ivory corner sofa against a graphite wall.': 'AI-изображение мебели: угловой диван цвета слоновой кости у графитовой стены.',
    'Creative video still: an oversized sneaker carried through a city street.': 'Кадр креативного видео: гигантский кроссовок на городской улице.',
    'Creative video still: a perfume bottle surrounded by chocolate and rising smoke.': 'Кадр креативного видео: флакон духов среди шоколада и клубов дыма.',
    'Creative video still: a portrait of a woman wearing a pink racing helmet.': 'Кадр креативного видео: портрет женщины в розовом гоночном шлеме.',
    'Furniture product video still: a wooden armchair with grey upholstery against warm curtains.': 'Кадр видео о мебели: деревянное кресло с серой обивкой на фоне тёплых штор.',
    'Furniture product video still: a grey sofa in a minimal room with a dark ceiling.': 'Кадр видео о мебели: серый диван в минималистичном интерьере с тёмным потолком.',
    'AI-created hotel lifestyle reel: an outdoor pool between contemporary buildings at dusk.': 'Кадр AI-ролика об отеле: открытый бассейн между современными зданиями в сумерках.',
    'AI-created hotel atmosphere reel: a woman practising yoga beside tropical greenery.': 'Кадр AI-ролика об отеле: женщина занимается йогой среди тропической зелени.',
    'AI-created hotel room reel: a softly lit bedroom with neutral bedding.': 'Кадр AI-ролика о номере: спальня в мягком свете с нейтральным текстилем.',
    'AI-generated advertising-film still showing two guests arriving at a property.': 'Кадр AI-рекламы: двое гостей прибывают к объекту.',
    '[ 404 / A DIFFERENT REALITY ]': '[ 404 / ДРУГАЯ РЕАЛЬНОСТЬ ]',
    'NOT IN': 'НЕ В',
    'THIS WORLD.': 'ЭТОМ МИРЕ.',
    'The page you’re looking for isn’t here.': 'Страница, которую вы ищете, не найдена.',
    'BACK TO REALITY': 'НА ГЛАВНУЮ'
  };

  const pages = {
    '/': ['AI-видео и изображения для брендов | PARALLEL', 'PARALLEL — независимая креативная студия. Создаём AI-видео, рекламные изображения и готовые ролики для брендов, недвижимости, мебели и отелей.'],
    '/work': ['Работы: AI-видео и изображения | PARALLEL', 'Портфолио PARALLEL: фильмы о недвижимости, визуализация мебели, концепции для брендов и ролики для отелей.'],
    '/work/category/real-estate': ['AI-фильмы и визуализация недвижимости | PARALLEL', 'Фильмы по сценарию и архитектурная визуализация ещё не построенных объектов. Проекты PARALLEL: концепция, создание сцен и монтаж.'],
    '/work/category/furniture': ['AI-видео и изображения мебели | PARALLEL', 'Визуализация мебели и короткие AI-видео с акцентом на материалы, интерьеры и необычные локации.'],
    '/work/category/brands': ['AI-реклама для брендов: видео и изображения | PARALLEL', 'Короткие AI-видео и изображения для продуктов, бьюти, моды и спорта. Независимые креативные концепции PARALLEL.'],
    '/work/category/hotels': ['AI-видео для соцсетей отелей | PARALLEL', 'AI-ролики об отелях: истории гостей, номера, атмосфера и повседневные впечатления.'],
    '/work/brand-beauty-scenes': ['Бьюти и мода: AI-видео | PARALLEL', 'Серия идей для бьюти и моды: парфюмерия, украшения, модные портреты и сюрреалистичные сцены.'],
    '/work/brand-fashion-scenes': ['Мода и аксессуары: AI-видео | PARALLEL', 'Модные портреты, наушники, очки и масштабные визуальные идеи в одной вертикальной подборке.'],
    '/work/brand-product-scenes': ['Продукт и лайфстайл: AI-видео | PARALLEL', 'Короткие креативные сцены с едой, обувью, часами и лайфстайл-образами.'],
    '/work/brand-sport-scenes': ['Продукт и спорт: AI-видео | PARALLEL', 'Вертикальная подборка о моде, еде, уходе за кожей, парфюмерии и автоспорте.'],
    '/work/development-architecture-film': ['Визуализация проекта: AI-фильм | PARALLEL', 'Фильм по сценарию о ещё не построенном объекте. PARALLEL создала окружение и кадры без исходных съёмок.'],
    '/work/development-arrival-film': ['Фильм о прибытии: AI-видео | PARALLEL', 'Рекламный фильм о прибытии к будущему объекту. AI-сцены и анимация по предоставленному сценарию.'],
    '/work/furniture-nature-scenes': ['Мебель и природа: AI-видео | PARALLEL', 'Диваны и кресла на побережье, среди рисовых полей и у тропического водопада.'],
    '/work/furniture-seating-scenes': ['Стулья и кресла: AI-видео | PARALLEL', 'Короткая серия со стульями и креслами: дерево, обивка, силуэты, свет и тень.'],
    '/work/furniture-sofa-film': ['Детали дивана: AI-видео | PARALLEL', 'Серый диван в интерьере и крупным планом: пропорции, подушки и фактура материала.'],
    '/work/furniture-study': ['Мебель: AI-изображение | PARALLEL', 'Угловой диван цвета слоновой кости на фоне графитовой стены.'],
    '/work/hotel-social-atmosphere': ['Атмосфера отеля: AI-видео | PARALLEL', 'Тихие детали интерьера, тёплый свет, зелень и короткая сцена йоги в вертикальном ролике.'],
    '/work/hotel-social-hosted-reel': ['Ролик с героиней: AI-видео об отеле | PARALLEL', 'Знакомство с отелем глазами гостьи: бассейн, номер, сад и сцены с синхронизированной речью.'],
    '/work/hotel-social-lifestyle': ['Жизнь в отеле: AI-видео | PARALLEL', 'Один день в отеле: номер, бассейн, тренировка, прогулка и вечерний вид.'],
    '/work/hotel-social-room-details': ['Детали номера: AI-видео | PARALLEL', 'Кофе, детали в тёплом свете, душевая и спальня в коротком вертикальном ролике.']
  };

  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  const originalMetadata = new Map();
  const russianTitles = new Set([...Object.values(pages).map(page => page[0]), 'Страница не найдена — PARALLEL']);
  const attributes = ['alt', 'aria-label', 'title', 'placeholder'];
  const requested = new URLSearchParams(location.search).get('lang');
  const russianPath = /^\/ru(?=\/|$)/;
  const language = russianPath.test(location.pathname) ? 'ru' : 'en';
  let scheduled = false;

  function routePath() {
    return (location.pathname.replace(russianPath, '') || '/').replace(/\/$/, '') || '/';
  }

  function languageUrl(value) {
    const url = new URL(location.href);
    const path = location.pathname.replace(russianPath, '') || '/';
    url.pathname = value === 'ru' ? `/ru${path === '/' ? '/' : path}` : path;
    url.searchParams.delete('lang');
    return url.href;
  }

  function translated(value) {
    const key = value.trim().replace(/\s+/g, ' ');
    if (Object.hasOwn(strings, key)) return strings[key];
    const price = /^From \$(\d+) \/ scene$/.exec(key);
    if (price) return `От $${price[1]} за сцену`;
    const project = /^(\d+) PROJECTS?$/.exec(key);
    if (project) return `${project[1]} ${project[1] === '1' ? 'проект' : 'проекта'}`;
    const video = /^(.+) creative video$/.exec(key);
    if (video && strings[video[1]]) return `Креативное видео: ${strings[video[1]].toLowerCase()}`;
    const category = /^([^:]+): (.+)$/.exec(key);
    if (category && strings[category[1]] && strings[category[2]]) return `${strings[category[1]]}: ${strings[category[2]]}`;
    return null;
  }

  function withWhitespace(source, replacement) {
    return `${source.match(/^\s*/)[0]}${replacement}${source.match(/\s*$/)[0]}`;
  }

  function translateText(node) {
    if (node.parentElement?.closest('script, style, .locale-switch, .search-content')) return;
    const current = node.nodeValue;
    let source = originalText.get(node);
    if (source === undefined || (language === 'ru' && current !== withWhitespace(source, translated(source) || source) && translated(current))) {
      source = current;
      originalText.set(node, source);
    }
    const target = language === 'ru' ? translated(source) : null;
    const next = target ? withWhitespace(source, target) : source;
    if (current !== next) node.nodeValue = next;
  }

  function translateElement(element) {
    if (element.closest('.locale-switch')) return;
    let stored = originalAttributes.get(element);
    if (!stored) { stored = {}; originalAttributes.set(element, stored); }
    for (const name of attributes) {
      if (!element.hasAttribute(name)) continue;
      const current = element.getAttribute(name);
      const old = stored[name];
      if (old === undefined || (language === 'ru' && current !== translated(old) && translated(current))) stored[name] = current;
      const next = language === 'ru' ? translated(stored[name]) || stored[name] : stored[name];
      if (current !== next) element.setAttribute(name, next);
    }
  }

  function switcher() {
    const nav = document.createElement('nav');
    nav.className = 'locale-switch';
    nav.setAttribute('aria-label', 'Язык / Language');
    for (const code of ['en', 'ru']) {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = code.toUpperCase();
      button.dataset.locale = code;
      button.setAttribute('lang', code);
      button.setAttribute('aria-label', code === 'ru' ? 'Русский язык' : 'English language');
      button.addEventListener('click', () => setLanguage(code));
      nav.append(button);
    }
    return nav;
  }

  function ensureSwitchers() {
    const header = document.querySelector('.site-header');
    if (header && !header.querySelector('.locale-switch')) {
      header.insertBefore(switcher(), header.querySelector('.header-cta, .menu-trigger'));
    }
    const menu = document.querySelector('.menu-dialog');
    if (menu && !menu.querySelector('.locale-switch')) {
      const nav = menu.querySelector('nav');
      if (nav) nav.after(switcher());
    }
    document.querySelectorAll('.locale-switch button').forEach(button => {
      const active = button.dataset.locale === language;
      button.setAttribute('aria-pressed', String(active));
      button.classList.toggle('is-active', active);
    });
  }

  function updateMetadata() {
    const path = routePath();
    const title = document.querySelector('title');
    const description = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    // The React bundle writes English metadata after route changes. Remember that
    // value, but never mistake the Russian title of the previous route for it.
    if (document.title && !russianTitles.has(document.title)) {
      originalMetadata.set(path, [document.title, description?.content || '']);
    }
    const content = language === 'ru' ? pages[path] || ['Страница не найдена — PARALLEL', 'Страница, которую вы ищете, не найдена.'] : originalMetadata.get(path);
    if (!content) return;
    if (title && title.textContent !== content[0]) title.textContent = content[0];
    for (const element of [ogTitle, twitterTitle]) if (element && element.content !== content[0]) element.content = content[0];
    for (const element of [description, ogDescription, twitterDescription]) if (element && element.content !== content[1]) element.content = content[1];
    const canonical = document.querySelector('link[rel="canonical"]');
    const canonicalUrl = `https://thatsparallel.space${language === 'ru' ? '/ru' : ''}${path === '/' ? '/' : `${path}/`}`;
    if (canonical && canonical.href !== canonicalUrl) canonical.href = canonicalUrl;
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl && ogUrl.content !== canonicalUrl) ogUrl.content = canonicalUrl;
  }

  function render() {
    scheduled = false;
    document.documentElement.lang = language;
    document.documentElement.dataset.locale = language;
    ensureSwitchers();
    window.parallelSearchContent?.sync(routePath(), language);
    const root = document.getElementById('root');
    if (root) {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) translateText(walker.currentNode);
      root.querySelectorAll('[alt], [aria-label], [title], [placeholder]').forEach(translateElement);
    }
    updateMetadata();
    document.documentElement.classList.remove('js-ru-pending');
  }

  function schedule() {
    if (!scheduled) { scheduled = true; requestAnimationFrame(render); }
  }

  function setLanguage(value) {
    if ((value !== 'en' && value !== 'ru') || value === language) return;
    location.assign(languageUrl(value));
  }

  function init() {
    render();
    const root = document.getElementById('root');
    if (root) new MutationObserver(schedule).observe(root, { childList: true, characterData: true, subtree: true, attributes: true, attributeFilter: attributes });
    new MutationObserver(schedule).observe(document.head, { childList: true, characterData: true, subtree: true, attributes: true, attributeFilter: ['content'] });
    window.addEventListener('popstate', schedule);
  }
  if (requested === 'ru' || requested === 'en') location.replace(languageUrl(requested));
  else if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
