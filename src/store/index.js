import Vue from 'vue';
import Vuex from 'vuex';

import basket from './modules/basket.js';
import modals from './modules/modals.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        currency: '₽',
        cards: [
			{id: 1, desc: 'Отличается своей необычной и декоративной формой.Его сладкий вкус хорошо сочетается с горькими и острыми блюдами, используется в горячих, холодных блюдах, в салатах где проявляется его гороховый вкус. Питательные вещества: Биотин, Хром, Медь, Ниацин / Витамин В3, Рибофлавин / Витамин В2, Селен, Тиамин / Витамин В1, Витамин С, Кальций.', title: 'Горох (срез) 40гр', thereIs: true, price: 199, imgSrc: '/img/cardImg2.jpg'},
			{id: 2, desc: 'Обладает приятным сладковатым вкусом с отчётливой ореховой ноткой.Используется в свежем виде в различные салаты, закуски, бутерброды, холодные супы и овощные или фруктовые смузи, в качестве лёгкого гарнира и для украшения блюд.Замедляет процессы старения и улучшает обменные процессы в организме. Способствуют восстановлению тканей, особенно мышечных. Полезна людям, страдающим избыточным весом. Благотворно влияет на репродуктивную функцию мужчин.Питательные вещества: витамины: А, D, E, аскорбиновую кислоту и витамины группы В; магний, калий, йод, железо, селен, фосфор, фтор, кальций, медь, марганец, кобальт, цинк, молибден; хлорофилл, лецитин, биотин, ненасыщенные жирные кислоты (линолевая, пальмитиновая, олеиновая). ', title: 'Подсолнух', thereIs: true, price: 215, imgSrc: '/img/cardImg2.jpg'},
			{id: 3, desc: 'Острый вкус редьки. Добавляет свежий, пряный вкус к жирным блюдам, особенно хорош в холодных блюдах. Прекрасно подойдут к салатам, супам, овощным блюдам, рыбе, закускам, суши и сашими.Укрепляет иммунитет, придает бодрость и оказывает общеукрепляющее действие на организм, полезен при сахарном диабете и подагре, помогает в похудении, создавая чувство сытости.Питательные вещества (зеленый): каротин, тиамин, рибофлавин, витамины (A, C, E, K, PP); кальций, железо, магний, фосфор, калий, натрий, цинк, сера; содержит клетчатку, аминокислоты, хлорофилл, антиоксиданты и эфирные масла.', title: 'Редис Зеленый (Ред коралл)', thereIs: true, price: 99, imgSrc: '/img/cardImg2.jpg'},
            {id: 4, desc: '', title: 'Горох', thereIs: true, price: 140, imgSrc: '/img/cardImg2.jpg'},
			{id: 5, desc: 'Слегка кислый вкус. Добавляет привлекательности гарниру блюда. Особенно сочетается с жирными блюдами, такими как жирная рыба (например, скумбрия), печень, а также в зеленом салате. Питательные вещества: Витамин А, Железо, Магний, Марганец, Молибден, Витамин К, Калий.', title: 'Щавель Японский', thereIs: true, price: 140, imgSrc: '/img/cardImg2.jpg'},
			{id: 6, desc: 'Вид китайской капусты, имеет пикантный и острый вкус. Лучше всего добавлять в свежем виде в салаты, сэндвичи, смузи, рагу, бутерброды и использовать в качестве украшения мясных или рыбных блюд. Витаминный заряд обеспечивает активную выработку коллагена - то есть упругую молодую кожу, повышает свертываемость крови (не употреблять параллельно с препаратами для ее разжижения), поддерживает качество зрения, здоровье нервной и иммунной систем. Питательные вещества: бета-каротин и аскорбиновая кислота (в 100 граммах микрозелени их не меньше половины от суточной нормы), фолиевая кислота, витамины К, А и группы В; калий, кальций, марганец, магний, фосфор, натрий и железо; глюкозинолаты.', title: 'Пак-чой', thereIs: true, price: 650, imgSrc: '/img/cardImg2.jpg'},
            {id: 6, desc: '', title: 'Редис зеленый', thereIs: true, price: 650, imgSrc: '/img/cardImg2.jpg'},
			{id: 7, desc: 'Обладает исключительно сильным орехово-горчичным, пикантным вкусом и свежим ароматом. Хорошо подходит для украшения блюд, салатов и картофельного пюре. При приготовлении блюд добавлять в последнюю очередь. Рукола делает фантастическим соус для пасты. Помогает при сахарном диабете, стимулирует работу пищеварительных органов, улучшает обмен веществ и водно-солевой обмен, укрепляет нервную систему, очищает организм. !не является известным аллергеном, но содержит вещество, вызывающее аллергическую реакцию на горчицу. Питательные вещества: витамины (А, К, Е, РР, С и большую часть группы B), калий, магний, кальций, натрий, медь, фосфор, марганец, йод, железо, цинк, селен, содержит эфирные масла, жирные кислоты Омега-3, 6, 9 и ценные флавоноиды.', title: 'Руколла', thereIs: true, price: 310, imgSrc: '/img/cardImg2.jpg'},
            {id: 8, desc: 'Имеет характерный мягкий, сочный и немного соленый вкус, чем-то напоминающий смесь вкусов свеклы и шпината. Используется сырым в салаты, готовят или тушат с другими овощами. Регулирует уровень сахара в крови. Способствует здоровью и красоте волос, стимулирует фолликулы и повышает блеск, снижению кровяного давления и нагрузки на сердечно-сосудистую систему.Питательные вещества: витамин К (в 100 граммах - 830 мкг, суточная норма для взрослых составляет 120 мкг), витамины: A, С, Е, бета-каротин, альфа-каротин, B1, B2, PP, B4, B5, B6 и B9;  магний, марганец, калий, железо, натрий, медь, содержит полифенольные антиоксиданты, фитонутриенты и ферменты, которые уникальны и полезны для здоровья.', title: 'Манглольт', thereIs: true, price: 310, imgSrc: '/img/cardImg2.jpg'},
            {id: 9, desc: 'С мягким вкусом красной свеклы или шпината со сладким травянистым послевкусием. Сочетается со сладким вкусом десертов, с рыбой или мясом, хорошее дополнение к салатам. Помогает организму дольше оставаться молодым (мощный антиоксидант - нейтрализует свободные радикалы).  Притупляет чувство голода. Сохраняет кожу молодой, гладкой, эластичной. Питательные вещества: витамины группы В (кроме В12), витамины С, Е и РР, марганец, фосфор, магний, медь, железо, селен, цинк, калий, кальций; жирные кислоты (Омега-3, Омега-6 и линолевая), фосфолипиды, пептид луназин, лизин, фитостеролы, флавоноиды, а также мощный антиоксидант сквален.', title: 'Амарант', thereIs: true, price: 310, imgSrc: '/img/cardImg2.jpg'},
            {id: 10, desc: 'Душистое растение, обладает мягким пряным вкусом и сладким анисовым ароматом. Прекрасно дополняет блюда из яиц, картофеля, рыбы и птицы. Добавляют в соусы, супы и при приготовлении блюд из зеленых овощей. Регулярное употребление ростков кервеля способствует снижению веса. Питательные вещества: аскорбиновая кислота, каротин (провитамин А), рутин и витамины группы В (В1, В2, В6, фолиевая кислота и РР); минеральные вещества (железо, фосфор, калий, медь, селен, марганец, цинк, магний и кальций); эфирные масла, пищевые волокна, гликозиды.', title: 'Кервель', thereIs: true, price: 310, imgSrc: '/img/cardImg2.jpg'},
            {id: 11, desc: 'Обладает специфичным, но приятным перечно-лимонным вкусом с небольшой остротой, пряное и ароматное дополнение к различным блюдам. Используется для приготовления соусов, салатов, маринадов, мясных, рыбных и овощных блюд. Особенно ценится в латиноамериканской и азиатской кухнях. Выводит из организма тяжелые металлы, такие как свинец, ртуть и другие. Питательные вещества: альфа-каротин, бета-каротин, С, А, E и K, витамины группы B (B1, B2, PP, B4, B5, B6 и B9), железо, медь, марганец, калий, магний, фосфор, натрий, цинк, содержит пищевые волокна, эфирные масла.', title: 'Кинза (Кориандр)', thereIs: true, price: 310, imgSrc: '/img/cardImg2.jpg'},
            {id: 12, desc: 'Характеризуется маленькой черной точкой наверху. Это семенная коробочка. Обладает восхитительным луковым вкусом, который хорошо сочетается с травяным маслом. Вкусно на овощных блюдах и с рыбой или мясом. Интересной деталью является то, что семенная коробочка становится хрустящей при нагревании. Питательные вещества: Витамин А, Фолиевая кислота / Витамин В9, Медь, Марганец, Молибден, Тиамин / Витамин В1, Витамин С, Витамин Е, Витамин К, Кальций, Витамин В12', title: 'Альпийский Лук', thereIs: true, price: 310, imgSrc: '/img/cardImg2.jpg'},
		],
    },
    getters: {
        getCards: state => {
            return state.cards
        }
    },
    modules: {
        basket,
        modals
    }
})

export default store;