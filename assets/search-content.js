/* Shared visible content for static HTML and client-side navigation. */
(() => {
  const origin = 'https://thatsparallel.space';
  const services = {
    'real-estate': {
      en: {
        title: 'AI real estate films for unbuilt developments',
        intro: 'PARALLEL creates AI-generated property advertising films from a script. The work can show an arrival, interiors, shared spaces and the atmosphere of a development before it is built.',
        output: 'Scene development, generated imagery, animation and a finished edit. The two films above show our script-led production in a vertical format.',
        inputs: 'A project description, the story you want to tell and the intended placement. Share a script, architectural references or approved visual assets if available; tell us which details must stay accurate.',
        limit: 'These are AI visualizations, not footage of a completed property or a substitute for technical architectural drawings. Generated details need review against the approved project.',
        links: [['development-architecture-film', 'See how the development film was made'], ['development-arrival-film', 'Explore the arrival film']]
      },
      ru: {
        title: 'AI-видео и визуализация недвижимости на заказ',
        intro: 'PARALLEL создаёт рекламные AI-фильмы о недвижимости по сценарию. В ролике можно показать прибытие, интерьеры, общие пространства и атмосферу объекта ещё до завершения строительства.',
        output: 'Разработка сцен, генерация изображений, анимация и финальный монтаж. В двух фильмах выше показан наш продакшен по сценарию в вертикальном формате.',
        inputs: 'Описание проекта, история, которую нужно рассказать, и площадка размещения. Если есть сценарий, архитектурные референсы или утверждённые изображения — приложите их и отметьте детали, которые важно сохранить.',
        limit: 'Это AI-визуализация, а не съёмка готового объекта и не замена техническим архитектурным чертежам. Сгенерированные детали нужно сверять с утверждённым проектом.',
        links: [['development-architecture-film', 'Как создавался фильм о будущем объекте'], ['development-arrival-film', 'Фильм о прибытии: состав работы']]
      }
    },
    furniture: {
      en: {
        title: 'AI furniture videos and product images',
        intro: 'We create furniture visuals for product presentations, advertising and social content. A sofa, chair or armchair can appear in a restrained interior or an imagined landscape, with attention to shape, texture and light.',
        output: 'Still images, short animated scenes or an edited sequence. The portfolio includes furniture in nature, seating studies and a sofa-detail film.',
        inputs: 'Clear product photos or approved references, material and colour information, the intended setting and the required format. Identify any dimensions, construction details or finishes that must not change.',
        limit: 'AI can alter product proportions and fine details. Approve the visuals against your product references; generated images should not be treated as precise technical or catalogue documentation without review.',
        links: [['furniture-nature-scenes', 'Furniture in landscape settings'], ['furniture-sofa-film', 'Sofa details and close-ups']]
      },
      ru: {
        title: 'AI-видео и изображения мебели',
        intro: 'Создаём визуалы мебели для презентаций товара, рекламы и соцсетей. Диван, стул или кресло можно показать в сдержанном интерьере или вымышленном ландшафте, уделив внимание форме, фактуре и свету.',
        output: 'Статичные изображения, короткие анимированные сцены или монтажная последовательность. В портфолио есть мебель на природе, серия со стульями и фильм о деталях дивана.',
        inputs: 'Чёткие фотографии товара или утверждённые референсы, сведения о материалах и цвете, желаемое окружение и формат. Отметьте размеры, конструктивные детали и отделку, которые нельзя менять.',
        limit: 'AI может менять пропорции и мелкие детали товара. Визуалы нужно сверять с референсами; без проверки они не заменяют точную техническую или каталожную документацию.',
        links: [['furniture-nature-scenes', 'Мебель в природных локациях'], ['furniture-sofa-film', 'Детали дивана крупным планом']]
      }
    },
    brands: {
      en: {
        title: 'AI advertising videos and campaign images for brands',
        intro: 'PARALLEL develops AI video scenes and still imagery for products, beauty, fashion and sport. We work on the visual idea, scene design, motion, edit and sound for the agreed production scope.',
        output: 'Short product scenes, campaign images and finished advertising edits. The work above consists of independent creative concepts, not evidence of commissions or sales results for the brands shown.',
        inputs: 'The product or offer, your audience, brand references and the placement. Share product images, approved wording and the details that must be preserved, such as a label, logo or packaging.',
        limit: 'Generated packaging, lettering and product details need checking. Concept work demonstrates a visual direction; it does not promise a particular advertising result.',
        links: [['brand-beauty-scenes', 'Beauty and fashion concepts'], ['brand-product-scenes', 'Product and lifestyle scenes']]
      },
      ru: {
        title: 'AI-реклама и видео для брендов',
        intro: 'PARALLEL разрабатывает AI-видеосцены и изображения для продуктов, бьюти, моды и спорта. Работаем над визуальной идеей, сценами, движением, монтажом и звуком в рамках согласованного объёма.',
        output: 'Короткие сцены с продуктом, изображения для кампаний и готовые рекламные ролики. Работы выше — независимые креативные концепции, а не подтверждение заказов или продаж показанных брендов.',
        inputs: 'Продукт или предложение, аудитория, референсы бренда и площадка размещения. Приложите изображения товара, утверждённые формулировки и отметьте детали, которые нужно сохранить: этикетку, логотип или упаковку.',
        limit: 'Сгенерированные упаковку, надписи и детали продукта нужно проверять. Концептуальная работа показывает визуальное направление, но не гарантирует результат рекламной кампании.',
        links: [['brand-beauty-scenes', 'Концепции для бьюти и моды'], ['brand-product-scenes', 'Сцены с продуктами и лайфстайл']]
      }
    },
    hotels: {
      en: {
        title: 'AI hotel videos and social reels',
        intro: 'We create short AI-generated hotel stories around rooms, atmosphere and guest experiences. The portfolio explores room details, a day at the hotel and a hosted reel with lip-synced speaking shots.',
        output: 'Generated scenes, animation and edited social videos. Speaking shots, sound and additional formats are included only when agreed in the brief.',
        inputs: 'The story and audience, intended channels and references for the property. Share approved photos and identify rooms, amenities or views that must be represented faithfully.',
        limit: 'AI-created scenes are not documentary footage of a real stay. Check them against the property and avoid presenting invented facilities or views as existing amenities.',
        links: [['hotel-social-hosted-reel', 'A guest-led hotel reel'], ['hotel-social-room-details', 'Room details as a short story']]
      },
      ru: {
        title: 'AI-ролики и видео для соцсетей отелей',
        intro: 'Создаём короткие AI-истории о номерах, атмосфере и впечатлениях гостей. В портфолио есть детали номера, один день в отеле и ролик с героиней и синхронизированной речью.',
        output: 'Сгенерированные сцены, анимация и монтаж роликов для соцсетей. Кадры с речью, звук и дополнительные форматы включаем в работу, если они согласованы в брифе.',
        inputs: 'История, аудитория, площадки размещения и референсы объекта. Приложите утверждённые фотографии и укажите номера, удобства и виды, которые важно показать достоверно.',
        limit: 'AI-сцены не являются документальной съёмкой реального отдыха. Их нужно сверять с объектом и не выдавать вымышленные удобства или виды за существующие.',
        links: [['hotel-social-hosted-reel', 'История отеля глазами гостьи'], ['hotel-social-room-details', 'Детали номера в коротком ролике']]
      }
    }
  };
  const labels = {
    en: {
      services: 'Explore our production services', faq: 'Before we start',
      output: 'What we can make', inputs: 'What to send us', limit: 'What to keep in mind',
      related: 'Related work', contact: 'Discuss your brief',
      scope: 'Budget, timing and deliverables',
      scopeText: 'Each project is quoted individually. Scene count, complexity, editing, sound and format adaptations affect the scope. We agree the deliverables and timing after reviewing your brief; urgent production is available on request.',
      categories: { 'real-estate': 'Real estate films', furniture: 'Furniture visuals', brands: 'Brand advertising', hotels: 'Hotel social videos' },
      questions: [
        ['What does PARALLEL do?', 'We are an independent creative production studio creating AI video, campaign images and finished ads for brands, real estate, furniture and hotels.'],
        ['How much does an AI video cost?', 'We quote each project individually. The number and complexity of scenes, editing, sound and output formats determine the scope. Some portfolio examples list an illustrative per-scene budget; that is not a fixed price for a complete film.'],
        ['Can you work without existing footage?', 'Yes. For the two development films in our portfolio, the script was supplied and we created the environments and shots without source footage or visual assets. Product and property references are still useful when specific details need to be preserved.'],
        ['What do you need to estimate a project?', 'Send the product or project, the intended audience and placement, an approximate duration or scene count, references and your deadline. If you already have a script or brand assets, include them.'],
        ['Can you adapt a video for different platforms?', 'Format adaptations are part of our production offering. Tell us which aspect ratios and placements you need so we can include them in the agreed scope.'],
        ['Are the portfolio films real footage or commissioned campaigns?', 'The portfolio includes AI-generated scenes, studio work and independent demonstration concepts. Project pages identify the type of work. A concept does not imply a brand commission or a measured commercial result.']
      ]
    },
    ru: {
      services: 'Направления продакшена', faq: 'Перед началом работы',
      output: 'Что можем сделать', inputs: 'Что прислать для старта', limit: 'Что важно учесть',
      related: 'Работы по теме', contact: 'Обсудить задачу',
      scope: 'Стоимость, сроки и состав работы',
      scopeText: 'Каждый проект рассчитываем индивидуально. Объём зависит от количества и сложности сцен, монтажа, звука и адаптации форматов. Состав результата и сроки согласуем после знакомства с брифом; срочные проекты — по запросу.',
      categories: { 'real-estate': 'Фильмы о недвижимости', furniture: 'Визуализация мебели', brands: 'Реклама для брендов', hotels: 'Ролики для отелей' },
      questions: [
        ['Чем занимается PARALLEL?', 'Мы — независимая креативная студия. Создаём AI-видео, изображения для кампаний и готовую рекламу для брендов, недвижимости, мебели и отелей.'],
        ['Сколько стоит создание AI-видео?', 'Каждый проект рассчитываем отдельно. Учитываем количество и сложность сцен, монтаж, звук и форматы. На некоторых страницах работ указан ориентир за сцену — это не фиксированная цена за весь ролик.'],
        ['Можно сделать ролик без исходных съёмок?', 'Да. Для двух фильмов о будущем объекте в нашем портфолио был предоставлен сценарий, а окружение и кадры мы создали без исходных съёмок и визуальных материалов. Если важно сохранить конкретные детали товара или объекта, пригодятся референсы.'],
        ['Что нужно для оценки проекта?', 'Пришлите продукт или проект, аудиторию, площадку размещения, примерную длительность или количество сцен, референсы и желаемую дату готовности. Если уже есть сценарий или материалы бренда — приложите их.'],
        ['Можно адаптировать ролик под разные площадки?', 'Да, адаптация форматов входит в наши направления работы. Укажите нужные соотношения сторон и площадки, чтобы мы включили их в согласованный объём.'],
        ['В портфолио реальные съёмки и заказные кампании?', 'В портфолио есть AI-сцены, работы студии и независимые демонстрационные концепции. Тип работы указан на странице проекта. Концепт сам по себе не означает заказ бренда или измеренный коммерческий результат.']
      ]
    }
  };
  const escape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;');
  const url = (route, language) => `${language === 'ru' ? '/ru' : ''}${route === '/' ? '/' : `${route}/`}`;
  const paragraph = value => `<p>${escape(value)}</p>`;
  const card = (title, body) => `<div><h3>${escape(title)}</h3>${paragraph(body)}</div>`;
  let anchoredBlock;

  function markup(route, language) {
    const l = labels[language];
    const key = route.match(/^\/work\/category\/([^/]+)$/)?.[1];
    const service = services[key]?.[language];
    let content = '';
    if (route === '/') {
      content = `<h2 id="search-content-heading">${l.services}</h2><nav class="search-service-links" aria-label="${l.services}">${Object.entries(l.categories).map(([key, name]) => `<a href="${url(`/work/category/${key}`, language)}#production">${escape(name)}</a>`).join('')}</nav><h2>${l.faq}</h2><div class="search-copy-grid">${l.questions.map(([q, a]) => card(q, a)).join('')}</div>`;
    } else if (service) {
      content = `<h2 id="search-content-heading">${escape(service.title)}</h2>${paragraph(service.intro)}<div class="search-copy-grid">${card(l.output, service.output)}${card(l.inputs, service.inputs)}${card(l.limit, service.limit)}${card(l.scope, l.scopeText)}</div><h3>${l.related}</h3><ul class="search-related">${service.links.map(([slug, name]) => `<li><a href="${url(`/work/${slug}`, language)}">${escape(name)}</a></li>`).join('')}</ul>`;
    } else if (/^\/work\/development-(architecture|arrival)-film$/.test(route)) {
      const arrival = route.endsWith('arrival-film');
      const title = language === 'ru' ? 'Как создавался фильм' : 'How the film was made';
      const steps = language === 'ru' ? [
        ['Задача и исходные материалы', 'Сценарий был предоставлен. Исходных съёмок и визуальных материалов не было; объект ещё не построен.'],
        ['Создание сцен', arrival ? 'Мы самостоятельно создали сцены прибытия, гостевых пространств и интерьеров, затем сгенерировали изображения и анимировали их.' : 'Мы самостоятельно разработали окружение и каждый кадр, затем объединили AI-изображения, анимацию и монтаж.'],
        ['Результат и границы', 'Готовый вертикальный рекламный фильм. Изображения показывают AI-визуализацию будущего объекта, а не реальные съёмки; данные о продажах или результатах размещения не заявлены.']
      ] : [
        ['Brief and starting material', 'The script was supplied. There was no source footage or visual material, and the development was not yet built.'],
        ['Scene production', arrival ? 'We independently constructed the arrival, hospitality and interior scenes, then generated and animated the imagery.' : 'We independently developed the environments and every shot, combining AI imagery, animation and editing.'],
        ['Output and limitations', 'A finished vertical advertising film. The imagery visualizes an unbuilt development rather than documenting a completed property; no sales or campaign performance results are claimed.']
      ];
      content = `<h2 id="search-content-heading">${title}</h2><div class="search-copy-grid">${steps.map(([title, body]) => card(title, body)).join('')}</div><a href="${url('/work/category/real-estate', language)}#production">${escape(labels[language].categories['real-estate'])}</a>`;
    }
    if (!content) return '';
    return `<section id="production" class="search-content${route === '/' ? ' search-content--home' : ''}" data-search-route="${escape(route)}" data-search-language="${language}" aria-labelledby="search-content-heading">${content}<a class="search-contact" href="mailto:work@thatsparallel.space">${l.contact}</a></section>`;
  }

  function schema(route, language) {
    const key = route.match(/^\/work\/category\/([^/]+)$/)?.[1];
    const service = services[key]?.[language];
    if (!service) return null;
    return { '@context': 'https://schema.org', '@type': 'Service', '@id': `${origin}${url(route, language)}#service`, name: service.title, description: service.intro, url: `${origin}${url(route, language)}`, serviceType: labels[language].categories[key], provider: { '@type': 'Organization', '@id': `${origin}/#organization`, name: 'PARALLEL', url: `${origin}/` } };
  }

  function sync(route, language) {
    const main = document.querySelector('main');
    if (!main) return;
    const current = main.querySelector('.search-content');
    if (current && (current.dataset.searchRoute !== route || current.dataset.searchLanguage !== language)) current.remove();
    if (!main.querySelector('.search-content')) {
      const html = markup(route, language);
      if (html) {
        const anchor = route === '/' ? main.querySelector('#about') : main.querySelector('.work-outro');
        if (anchor) anchor.insertAdjacentHTML('beforebegin', html);
        else if (main.querySelector('.project-story')) main.querySelector('.project-story').insertAdjacentHTML('afterend', html);
      }
    }
    const block = main.querySelector('.search-content');
    // The prebuilt router resets scroll on mount. Restore only this explicit
    // deep link, once per inserted block, after the React content is present.
    if (block && location.hash === '#production' && anchoredBlock !== block) {
      anchoredBlock = block;
      requestAnimationFrame(() => {
        if (block.isConnected && location.hash === '#production') block.scrollIntoView({ block: 'start', behavior: 'instant' });
      });
    }
    const data = schema(route, language);
    const previous = document.getElementById('search-service-schema');
    if (!data) { previous?.remove(); return; }
    const payload = JSON.stringify(data).replaceAll('<', '\\u003c');
    if (previous?.textContent === payload) return;
    const script = previous || document.createElement('script');
    script.id = 'search-service-schema';
    script.type = 'application/ld+json';
    script.textContent = payload;
    if (!previous) document.head.append(script);
  }
  window.parallelSearchContent = { markup, schema, sync };
})();
