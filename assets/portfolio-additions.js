/* New work, kept separate from the prebuilt application's original project data. */
(() => {
  const entries = [
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
    metadata[route] = { title: `${entry.title}: AI Video | PARALLEL`, description: entry.summary };
    russianMetadata[route] = [`${entry.ru.title}: AI-видео | PARALLEL`, entry.ru.summary];
    for (const key of ['title', 'category', 'discipline', 'summary', 'direction', 'alt', 'mediaNote']) dictionary[entry[key]] = entry.ru[key];
    entry.deliverables.forEach((value, index) => { dictionary[value] = entry.ru.deliverables[index]; });
    dictionary[`${entry.title} creative video`] = `Креативное видео: ${entry.ru.title.toLowerCase()}`;
    dictionary[`${entry.category}: ${entry.title}`] = `${entry.ru.category}: ${entry.ru.title}`;
  }
  window.parallelPortfolioAdditions = { projects, metadata, russianMetadata, dictionary, entries };
})();
