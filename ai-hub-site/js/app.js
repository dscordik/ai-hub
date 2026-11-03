// ===== НАСТРОЙКИ: подставь свои ссылки =====
var BOT_URL = "https://t.me/YOUR_BOT?start=";        // твой Telegram-бот
var PAY_URL = "https://pay.rollypay.example/?item="; // оплата Rollypay (файл выдаётся после оплаты)
// ===========================================
var AUD = [
{id:"school",e:"🎒",t:"Школьникам",pain:"ЕГЭ, ОГЭ, сочинение и домашка, которую никто нормально не объясняет.",items:[
{id:"tutor",e:"🤖",t:"Бот-тренажёр «ИИ-репетитор»",k:"sub",p:"149–199 ₽/мес",s:"Объясняет тему простыми словами, даёт задания и проверяет ответы.",l:["Объяснения без заумных терминов","Задания по теме с разбором ошибок","План подготовки к ЕГЭ и ОГЭ"]},
{id:"study-pack",e:"📚",t:"Пак «ИИ для учёбы»",k:"file",p:"199 ₽",s:"Готовые промпты, чтобы учиться, а не списывать.",l:["Промпты для объяснения тем","Проверка своих ошибок","Как не получить ноль за списывание"]},
{id:"essay",e:"✍️",t:"Проверка сочинений",k:"bot",p:"49–99 ₽",s:"Присылаешь текст и получаешь обратную связь по критериям.",l:["Оценка по критериям сочинения","Список слабых мест","Советы, как усилить аргументы"]}]},
{id:"students",e:"🎓",t:"Студентам",pain:"Курсовые, дедлайны, оформление по ГОСТу, антиплагиат и сессия.",items:[
{id:"coursework",e:"🧭",t:"Бот «Помощник по курсовой»",k:"bot",p:"199–249 ₽",s:"Структура, план, оформление и чек-лист перед сдачей.",l:["План работы под твою тему","Подсказки по структуре и оформлению","Финальный чек-лист перед сдачей"]},
{id:"gost",e:"📐",t:"Шаблоны оформления по ГОСТу",k:"file",p:"150–250 ₽",s:"Word и Google Docs, где всё уже настроено.",l:["Титульник, содержание, список литературы","Стили заголовков и поля","Инструкция на одной странице"]},
{id:"antiplag",e:"🛡️",t:"Гайд «ИИ и антиплагиат»",k:"file",p:"199 ₽",s:"Как работать с ИИ честно и не терять смысл текста.",l:["Где ИИ помогает, а где вредит","Как переработать идеи своими словами","Как проверить текст перед сдачей"]},
{id:"session",e:"🗂️",t:"Подготовка к сессии",k:"sub",p:"149–199 ₽/мес",s:"Бот делает конспект, карточки и вопросы из твоих материалов.",l:["Краткий конспект из присланного текста","Карточки для запоминания","Вопросы для самопроверки"]}]},
{id:"teens",e:"🚀",t:"Подросткам",pain:"Хочется зарабатывать и делать крутой контент, но непонятно, с чего начать.",items:[
{id:"first-money",e:"💸",t:"«Первые деньги в 14–17 лет»",k:"file",p:"199–249 ₽",s:"Реальные варианты и пошаговые планы без обещаний «миллионов».",l:["Фриланс, монтаж, шаблоны, боты","План на первую неделю","Как безопасно получать оплату"]},
{id:"reels",e:"🎬",t:"Шаблоны для Reels и Canva",k:"file",p:"150–250 ₽",s:"Макеты и пресеты, чтобы красиво оформить соцсети.",l:["Шаблоны обложек и сторис","Пресеты для видео и фото","Подсказки по идеям контента"]},
{id:"first-bot",e:"🛠️",t:"Гайд «Первый бот или сайт с ИИ»",k:"file",p:"249 ₽",s:"Сделай первый проект без опыта в программировании.",l:["Какие инструменты взять","Пошаговая инструкция с примерами","Как показать проект другим"]}]},
{id:"adults",e:"💼",t:"Взрослым",pain:"Рутина съедает время, ИИ кажется сложным, а сервисов слишком много.",items:[
{id:"work-prompts",e:"⚡",t:"«ИИ для работы за 30 минут»",k:"file",p:"199–249 ₽",s:"Готовые промпты под профессии: бухгалтер, учитель, менеджер, риелтор.",l:["Промпты для писем, отчётов и документов","Подборки под твою профессию","Примеры, которые можно копировать"]},
{id:"pick-ai",e:"🔎",t:"Бот «Подбери нейросеть»",k:"sub",p:"149–199 ₽/мес",s:"Опиши задачу, а бот посоветует сервис и объяснит, как им пользоваться.",l:["Подбор под задачу и бюджет","Пошаговые инструкции","Новости о новых сервисах"]},
{id:"resume",e:"📄",t:"Резюме и собеседование",k:"bot",p:"99–199 ₽",s:"Бот улучшает резюме, письмо и готовит к вопросам.",l:["Разбор и правки резюме","Сопроводительное письмо","Тренировка ответов на вопросы"]},
{id:"safe-ai",e:"🧓",t:"ИИ без страха и мошенников",k:"file",p:"150–200 ₽",s:"Простая инструкция, как пользоваться ИИ и Алисой безопасно.",l:["Как начать с нуля","Как не попасться мошенникам","Чему в ответах ИИ нельзя доверять"]}]}
];
var PROMPTS = ["Объясни теорему Пифагора как для пятиклассника","Составь план курсовой по маркетингу","Улучши моё резюме для вакансии менеджера","Какая нейросеть лучше для презентации?"];
var $ = function(i){return document.getElementById(i)};
var all = {}; AUD.forEach(function(a){a.items.forEach(function(p){p.a=a; all[p.id]=p})});
var KIND = {sub:"Подписка в Telegram", bot:"Telegram-бот", file:"Файл после оплаты"};
var typeTimer;

function drawer(cur){
  var h = '<div class="drawer__top"><span class="drawer__title">Разделы</span><button class="drawer__close" id="closeBtn" aria-label="Закрыть">✕</button></div>';
  h += '<a class="drawer__link'+(cur==="home"?' drawer__link--active':'')+'" href="#home">Главная</a>';
  AUD.forEach(function(a){
    var open = cur===a.id || (all[cur] && all[cur].a===a);
    h += '<div class="drawer__group'+(open?' drawer__group--open':'')+'"><button class="drawer__head" aria-expanded="'+open+'"><span>'+a.e+'</span>'+a.t+'<span class="drawer__count">'+a.items.length+'</span><span class="drawer__chev"></span></button><div class="drawer__list">';
    h += '<a class="drawer__link'+(cur===a.id?' drawer__link--active':'')+'" href="#'+a.id+'">Все продукты</a>';
    a.items.forEach(function(p){ h += '<a class="drawer__link'+(cur===p.id?' drawer__link--active':'')+'" href="#'+p.id+'">'+p.t+'</a>'; });
    h += '</div></div>';
  });
  $("drawer").innerHTML = h;
  $("closeBtn").onclick = function(){toggle(false)};
  Array.prototype.forEach.call(document.querySelectorAll(".drawer__head"), function(b){
    b.onclick = function(){ var g=b.parentNode, o=g.classList.toggle("drawer__group--open"); b.setAttribute("aria-expanded",o); };
  });
}
function toggle(open){
  $("drawer").classList.toggle("drawer--open",open);
  $("overlay").classList.toggle("overlay--open",open);
  $("menuBtn").setAttribute("aria-expanded",open);
  document.body.classList.toggle("is-locked",open);
}
function tile(a){return '<a class="tile spot" href="#'+a.id+'"><span class="tile__emoji">'+a.e+'</span><h3 class="tile__title">'+a.t+'</h3><p class="tile__text">'+a.pain+'</p><span class="tile__more">'+a.items.length+' продукта</span></a>'}
function row(p){return '<a class="row" href="#'+p.id+'"><span class="row__emoji">'+p.e+'</span><div><h3 class="row__title">'+p.t+'</h3><p class="row__text">'+p.s+'</p></div><div class="row__meta"><span class="row__price">'+p.p+'</span><span class="row__kind">'+KIND[p.k]+'</span></div></a>'}
function foot(){return '<footer class="footer">© ИИ-Хаб. Только понятная польза, без обещаний быстрых миллионов.</footer>'}

function home(){
  return '<section class="hero"><h1 class="hero__title">Нейросети — <em>просто</em></h1><p class="hero__text">Боты, гайды и готовые промпты для учёбы и работы. Выбираешь свою категорию, оплачиваешь и сразу пользуешься.</p><div class="hero__actions"><button class="btn btn--gold" id="goAud">Выбрать свой раздел</button><button class="btn" id="goMenu">Открыть меню</button></div><div class="prompt"><div class="prompt__label">Попробуй спросить у ИИ:</div><div class="prompt__text" id="typed"></div></div></section>'
  + '<section class="section" id="aud"><h2 class="section__title">Для кого вы делаете задачи</h2><div class="tiles">'+AUD.map(tile).join("")+'</div></section>'
  + '<section class="section"><h2 class="section__title">Как это работает</h2><div class="steps"><div class="steps__item"><h3 class="steps__title">Выбираешь продукт</h3><p class="steps__text">Читаешь описание и что входит.</p></div><div class="steps__item"><h3 class="steps__title">Оплачиваешь</h3><p class="steps__text">Безопасная оплата картой или СБП.</p></div><div class="steps__item"><h3 class="steps__title">Получаешь доступ</h3><p class="steps__text">Бот в Telegram или файл сразу после оплаты.</p></div></div></section>'+foot();
}
function audPage(a){
  return '<div class="crumbs"><a href="#home">Главная</a> / '+a.t+'</div><h1 class="head__title">'+a.t+'</h1><p class="head__text">'+a.pain+'</p><div class="rows">'+a.items.map(row).join("")+'</div>'+foot();
}
function prodPage(p){
  var file = p.k==="file", href = (file?PAY_URL:BOT_URL)+p.id;
  var btn = file?"Купить и получить файл":(p.k==="sub"?"Подключить в Telegram":"Открыть бота в Telegram");
  var note = file?"После оплаты файл придёт автоматически.":"Откроется Telegram-бот: там можно оплатить и сразу начать.";
  return '<div class="crumbs"><a href="#home">Главная</a> / <a href="#'+p.a.id+'">'+p.a.t+'</a> / '+p.t+'</div><h1 class="head__title">'+p.t+'</h1><p class="head__text">'+p.s+'</p>'
  + '<div class="product"><div><h2 class="product__sub">Что внутри</h2><ul class="product__list">'+p.l.map(function(x){return '<li class="product__item">'+x+'</li>'}).join("")+'</ul></div>'
  + '<aside class="buy"><div class="buy__kind">'+KIND[p.k]+'</div><div class="buy__price">'+p.p+'</div><a class="btn btn--gold btn--block" target="_blank" rel="noopener" href="'+href+'">'+btn+'</a><p class="buy__note">'+note+'</p></aside></div>'
  + '<section class="section"><h2 class="section__title">Ещё для этой аудитории</h2><div class="rows">'+p.a.items.filter(function(x){return x.id!==p.id}).map(row).join("")+'</div></section>'+foot();
}
function typer(){
  clearTimeout(typeTimer);
  var el = $("typed"); if(!el) return;
  var i=0,j=0,del=false;
  (function tick(){
    if(!$("typed")) return;
    var s = PROMPTS[i];
    el.textContent = s.slice(0,j);
    if(!del && j===s.length){del=true; typeTimer=setTimeout(tick,1800); return;}
    if(del && j===0){del=false; i=(i+1)%PROMPTS.length;}
    j += del?-1:1;
    typeTimer = setTimeout(tick, del?18:45);
  })();
}
function route(){
  var k = (location.hash||"#home").slice(1), a = AUD.filter(function(x){return x.id===k})[0], v;
  if(all[k]) v = prodPage(all[k]); else if(a) v = audPage(a); else {k="home"; v=home();}
  $("view").innerHTML = v; drawer(k); toggle(false); window.scrollTo(0,0);
  if(k==="home"){
    typer();
    $("goAud").onclick = function(){ $("aud").scrollIntoView({behavior:"smooth"}) };
    $("goMenu").onclick = function(){ toggle(true) };
  }
}
$("menuBtn").onclick = function(){ toggle(!$("drawer").classList.contains("drawer--open")) };
$("overlay").onclick = function(){ toggle(false) };
document.addEventListener("keydown", function(e){ if(e.key==="Escape") toggle(false) });
document.addEventListener("mousemove", function(e){
  var t = e.target.closest && e.target.closest(".spot"); if(!t) return;
  var r = t.getBoundingClientRect(); t.style.setProperty("--mx",(e.clientX-r.left)+"px"); t.style.setProperty("--my",(e.clientY-r.top)+"px");
});
window.addEventListener("hashchange", route); route();
