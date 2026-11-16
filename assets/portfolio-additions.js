/* New work, kept separate from the prebuilt application's original project data. */
(() => {
  const entries = [
    {
      slug: 'city-to-tropics', title: 'FROM CITY TO TROPICS', category: 'Hotel & Travel', portfolioGroup: 'hotels',
      discipline: 'Travel transition film', uploadDate: '2026-11-16',
      summary: 'From a subway carriage to the coast and a tropical hotel.',
      direction: 'The edit follows a traveller from the city to a black-sand beach and an outdoor lounge. Changes of location connect the journey with the hotel setting, keeping the same character at the centre of the story.',
      alt: 'A traveller in a yellow T-shirt relaxing in a tropical hotel lounge.',
      mediaNote: 'Vertical hotel and travel film.',
      deliverables: ['Vertical travel film', 'Location transitions and hotel scenes'], duration: 14.18,
      ru: {
        title: 'ИЗ ГОРОДА В ТРОПИКИ', category: 'Отели и путешествия', discipline: 'Тревел-ролик с переходами',
        summary: 'Из вагона метро — к побережью и тропическому отелю.',
        direction: 'Ролик следует за героиней из города на пляж с чёрным песком и в открытую лаунж-зону. Смена локаций связывает путешествие с пространством отеля, сохраняя героиню в центре истории.',
        alt: 'Путешественница в жёлтой футболке отдыхает в лаунж-зоне тропического отеля.',
        mediaNote: 'Вертикальный ролик об отеле и путешествии.',
        deliverables: ['Вертикальный тревел-ролик', 'Переходы между локациями и сцены в отеле']
      }
    },
    {
      slug: 'chair-and-character', title: 'CHAIR AND CHARACTER', category: 'Furniture', portfolioGroup: 'furniture',
      discipline: 'Furniture film with a character', uploadDate: '2026-11-16',
      summary: 'A grey armchair, a character and expressive studio close-ups.',
      direction: 'A character in sunglasses tries different poses in a grey armchair against a light studio background. Wide views give way to close-ups of the upholstery and label, connecting personality with product detail.',
      alt: 'A man in sunglasses sitting in a grey upholstered armchair in a light studio.',
      mediaNote: 'Vertical furniture film.',
      deliverables: ['Vertical furniture film', 'Character scenes and upholstery close-ups'], duration: 11.06,
      ru: {
        title: 'КРЕСЛО И ХАРАКТЕР', category: 'Мебель', discipline: 'Предметный ролик с героем',
        summary: 'Серое кресло, герой и выразительные студийные крупные планы.',
        direction: 'Герой в тёмных очках меняет позы в сером кресле на светлом студийном фоне. Общие планы сменяются деталями обивки и бирки: характер героя сочетается с предметной подачей мебели.',
        alt: 'Мужчина в тёмных очках сидит в сером мягком кресле в светлой студии.',
        mediaNote: 'Вертикальный ролик о мебели.',
        deliverables: ['Вертикальный предметный ролик', 'Сцены с героем и крупные планы обивки']
      }
    },
    {
      slug: 'hotel-walkthrough', title: 'HOTEL WALKTHROUGH', category: 'Hotel & Interiors', portfolioGroup: 'hotels',
      discipline: 'Hotel and interior film', uploadDate: '2026-11-16',
      summary: 'A quiet route through a hotel: balcony, interior details and tropical greenery.',
      direction: 'The camera follows a guest through the hotel and pauses on a vase of flowers, an armchair and warm interior lighting. Balcony views and planted outdoor paths connect the rooms with their surroundings.',
      alt: 'A light hotel interior with a grey armchair, wall lighting and a balcony opening.',
      mediaNote: 'Vertical hotel and interior film.',
      deliverables: ['Vertical hotel film', 'Interior details and outdoor transitions'], duration: 11.75,
      ru: {
        title: 'ПРОГУЛКА ПО ОТЕЛЮ', category: 'Отели и интерьеры', discipline: 'Ролик об отеле и интерьере',
        summary: 'Спокойный маршрут по отелю: балкон, детали интерьера и тропическая зелень.',
        direction: 'Камера следует за гостем по отелю и останавливается на вазе с цветами, кресле и тёплом интерьерном свете. Виды с балкона и озеленённые дорожки связывают комнаты с окружающим пространством.',
        alt: 'Светлый интерьер отеля с серым креслом, настенным светильником и выходом на балкон.',
        mediaNote: 'Вертикальный ролик об отеле и интерьере.',
        deliverables: ['Вертикальный ролик об отеле', 'Детали интерьера и переходы на улицу']
      }
    },
    {
      slug: 'engraving-in-motion', title: 'ENGRAVING IN MOTION', category: 'Art & Motion', portfolioGroup: 'brands',
      discipline: 'Illustration animation',
      summary: 'A monochrome winged figure, brought into motion.',
      direction: 'The camera moves around a winged figure with a sword, revealing the texture of an engraving, layered clouds and changes in light. The vertical sequence moves from the full composition to a close view of the blade.',
      alt: 'A monochrome engraving-style winged figure holding a sword beneath textured clouds.',
      mediaNote: 'AI-generated illustration animation.',
      deliverables: ['Vertical illustration animation', 'Moving camera and detail shots'], duration: 9.96,
      ru: {
        title: 'ОЖИВШАЯ ГРАВЮРА', category: 'Искусство и анимация', discipline: 'Анимация иллюстрации',
        summary: 'Монохромная крылатая фигура, ожившая в движении.',
        direction: 'Камера обходит крылатую фигуру с мечом, раскрывая фактуру гравюры, слои облаков и изменения света. Вертикальная последовательность переходит от общей композиции к крупному плану клинка.',
        alt: 'Монохромная крылатая фигура с мечом под фактурными облаками в стилистике гравюры.',
        mediaNote: 'AI-анимация иллюстрации.',
        deliverables: ['Вертикальная анимация иллюстрации', 'Движение камеры и крупные планы']
      }
    },
    {
      slug: 'private-jet-scene', title: 'PRIVATE JET', category: 'Fashion & Lifestyle', portfolioGroup: 'brands',
      discipline: 'Lifestyle creative video',
      summary: 'Dark styling and a meal inside a private jet.',
      direction: 'A hooded character in statement eyewear moves through a private-jet cabin, takes a seat and unpacks food. The short vertical edit combines cabin movement, character close-ups and tabletop details.',
      alt: 'A hooded character wearing white statement eyewear at a table inside a private jet.',
      mediaNote: 'AI-generated lifestyle video.',
      deliverables: ['Vertical lifestyle video', 'Character and interior scenes'], duration: 13.71,
      ru: {
        title: 'ЧАСТНЫЙ ДЖЕТ', category: 'Мода и лайфстайл', discipline: 'Креативное лайфстайл-видео',
        summary: 'Тёмный образ и обед в салоне частного джета.',
        direction: 'Персонаж в капюшоне и выразительных очках проходит по салону частного джета, садится за стол и достаёт еду. Короткий вертикальный монтаж соединяет движение в салоне, крупные планы героя и детали на столе.',
        alt: 'Персонаж в капюшоне и белых очках за столом в салоне частного джета.',
        mediaNote: 'AI-ролик в жанре лайфстайл.',
        deliverables: ['Вертикальное лайфстайл-видео', 'Сцены с героем и интерьером']
      }
    },
    {
      slug: 'furniture-room-transformations', title: 'ROOM TRANSFORMATIONS', category: 'Furniture', portfolioGroup: 'furniture',
      discipline: 'Furniture and interior video',
      summary: 'One living room, several furniture arrangements.',
      direction: 'An overhead view holds the room in place while sofas, chairs, cushions and side pieces change. The sequence compares different furniture compositions within the same interior and lighting.',
      alt: 'An overhead living-room view with a grey sectional sofa, armchairs and a large rug.',
      mediaNote: 'AI furniture and interior visualization.',
      deliverables: ['Vertical furniture video', 'Alternative room arrangements'], duration: 10.70,
      ru: {
        title: 'МЕБЕЛЬ В ИНТЕРЬЕРЕ', category: 'Мебель', discipline: 'Видео о мебели и интерьере',
        summary: 'Одна гостиная и несколько вариантов расстановки мебели.',
        direction: 'Ракурс сверху сохраняет пространство комнаты, пока диваны, кресла, подушки и небольшие предметы сменяют друг друга. Ролик сравнивает мебельные композиции в одном интерьере и освещении.',
        alt: 'Гостиная сверху: серый угловой диван, кресла и большой ковёр.',
        mediaNote: 'AI-визуализация мебели и интерьера.',
        deliverables: ['Вертикальное видео о мебели', 'Разные варианты расстановки в комнате']
      }
    },
    {
      slug: 'black-sands-oasis', title: 'BLACK SANDS OASIS', category: 'Real Estate', portfolioGroup: 'real-estate',
      discipline: 'Architectural reveal film',
      summary: 'A sand-textured reveal of a villa and its pool courtyard.',
      direction: 'The Black Sands Oasis title gives way to a sand-like transition that reveals a terracotta-toned villa. The vertical film moves through the architecture, outdoor seating and pool courtyard.',
      alt: 'A terracotta-toned villa with outdoor seating, a swimming pool and tropical planting.',
      mediaNote: 'AI architectural visualization. Not documentary footage.',
      deliverables: ['Vertical architectural film', 'Sand-textured reveal and property views'], duration: 15.25,
      ru: {
        title: 'BLACK SANDS OASIS', category: 'Недвижимость', discipline: 'Архитектурный ролик',
        summary: 'Вилла и двор с бассейном, возникающие из песчаной фактуры.',
        direction: 'Название Black Sands Oasis сменяется песчаным переходом, который раскрывает виллу в терракотовых тонах. Вертикальный ролик показывает архитектуру, зону отдыха на открытом воздухе и двор с бассейном.',
        alt: 'Вилла в терракотовых тонах с зоной отдыха, бассейном и тропическими растениями.',
        mediaNote: 'AI-визуализация архитектуры, а не документальная съёмка.',
        deliverables: ['Вертикальный архитектурный ролик', 'Песчаный переход и виды объекта']
      }
    }
  ];
  const projects = entries.map(({ ru, ...entry }) => ({
    ...entry, image: `/media/${entry.slug}.webp`, video: `/media/${entry.slug}-stream.mp4`,
    previewVideo: `/media/${entry.slug}-preview.mp4`, width: 540, height: 960, featured: false, status: 'studio'
  }));
  const metadata = {}, russianMetadata = {}, dictionary = {
    '3 projects': '3 проекта', '5 projects': '5 проектов', '6 projects': '6 проектов'
  };
  for (const entry of entries) {
    const route = `/work/${entry.slug}`;
    metadata[route] = { title: `${entry.title}: ${entry.uploadDate ? 'Creative Video' : 'AI Video'} | PARALLEL`, description: entry.summary };
    russianMetadata[route] = [`${entry.ru.title}: ${entry.uploadDate ? 'креативное видео' : 'AI-видео'} | PARALLEL`, entry.ru.summary];
    for (const key of ['title', 'category', 'discipline', 'summary', 'direction', 'alt', 'mediaNote']) dictionary[entry[key]] = entry.ru[key];
    entry.deliverables.forEach((value, index) => { dictionary[value] = entry.ru.deliverables[index]; });
    dictionary[`${entry.title} creative video`] = `Креативное видео: ${entry.ru.title.toLowerCase()}`;
    dictionary[`${entry.category}: ${entry.title}`] = `${entry.ru.category}: ${entry.ru.title}`;
  }
  window.parallelPortfolioAdditions = { projects, metadata, russianMetadata, dictionary, entries };
})();
