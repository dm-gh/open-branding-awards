import React from 'react';
import { ReactComponent as ArrowDownIcon } from '../assets/icons/arrow_down.svg';

export const HomePage: React.FC = () => {
    return (
        <div className="uppercase font-display">
            <div className="flex">
                <main className="flex-1">
                    <section className="px-20 pt-24 pb-32 bg-gray">
                        <h1 className="text-6xl mb-8">О КОНКУРСЕ</h1>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
                            <div className="col-span-1 flex flex-col">
                                <hr className="border-gray-500 mb-6" />
                                <span className="mb-6">НОМИНАЦИИ</span>
                                <span className="mb-6">УСЛОВИЯ</span>
                                <span className="mb-6">ЖЮРИ</span>
                                <span className="mb-6">КОНТАКТЫ</span>
                                <hr className="border-gray-500" />
                            </div>
                            <div className="col-span-1 lg:col-span-3 flex flex-col lg:pt-16">
                                <div className="bg-gray-darkest mb-7" style={{ height: 450 }} />
                                <span>
                                    <strong className="font-medium">OPEN BRANDING AWARDS</strong> –
                                    ЭТО ОТКРЫТЫЙ КОНКУРС ДЛЯ СТУДИЙ И ДИЗАЙНЕРОВ НОВОГО ПОКОЛЕНИЯ.
                                    БРОСЬТЕ ВЫЗОВ ТЫСЯЧАМ АГЕНТСТВ И ПОПАДИТЕ В СООБЩЕСТВО ЛИДЕРОВ,
                                    КОТОРЫЕ ОПРЕДЕЛЯТ БУДУЩЕЕ ДИЗАЙНА В РОССИИ И МИРЕ.
                                </span>
                            </div>
                        </div>
                    </section>

                    <section className="px-20 pb-40 pt-48 bg-white">
                        <h2 className="text-3xl font-medium mb-2">НОМИНАЦИИ</h2>
                        <hr className="border-black border-2 mb-12" />
                        <div className="text-5xl tracking-wide leading-tight flex flex-col">
                            <div className="flex">
                                <span className="p-1 bg-black text-gray">АГЕНТСТВО ГОДА</span>
                            </div>
                            <div className="flex">
                                <span className="p-1 bg-black text-white">БРЕНД ГОДА</span>
                                <span className="p-1 text-accent">СЕРВИСНЫЙ БРЕНД ГОДА</span>
                            </div>
                            <div className="flex">
                                <div className="flex-1" style={{ maxWidth: '7.5rem' }} />
                                <span className="p-1 bg-black text-gray">
                                    ПРОДУКТОВЫЙ БРЕНД ГОДА
                                </span>
                            </div>
                            <div className="flex">
                                <div className="flex-1" style={{ maxWidth: '18.75rem' }} />
                                <span className="p-1 text-black">КОРПОРАТИВНЫЙ БРЕНД ГОДА</span>
                            </div>
                            <div className="flex">
                                <div className="flex-1" style={{ maxWidth: '5.375rem' }} />
                                <span className="p-1 text-accent">КУЛЬТУРНЫЙ БРЕНД ГОДА</span>
                            </div>
                            <div className="flex">
                                <div className="flex-1" style={{ maxWidth: '5.375rem' }} />
                                <span className="p-1 text-black">ЦИФРОВОЙ БРЕНД ГОДА</span>
                                <span className="p-1 bg-black text-accent">НОВИЧОК ГОДА</span>
                            </div>
                            <div className="flex">
                                <div className="flex-1" style={{ maxWidth: '28.25rem' }} />
                                <span className="p-1 bg-black text-white">ИННОВАЦИЯ ГОДА</span>
                            </div>
                            <div className="flex">
                                <div className="flex-1" style={{ maxWidth: '38.125rem' }} />
                                <span className="p-1 text-black">ЛУЧШЕЕ РЕШЕНИЕ</span>
                            </div>
                        </div>
                    </section>

                    <section className="px-20 pb-40 pt-28 bg-gray">
                        <h2 className="text-3xl font-medium mb-2">УСЛОВИЯ</h2>
                        <hr className="border-black border-2 mb-12" />
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                            <div className="col-span-1">
                                <div className="flex items-center">
                                    <ArrowDownIcon className="text-4xl" />
                                    <div className="ml-3 flex flex-col">
                                        <span className="text-lg">PDF</span>
                                        <span className="font-light text-xs">СКАЧАТЬ (34КБ)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 lg:col-span-2">
                                <h3 className="text-xl font-medium">УЧАСТНИКИ</h3>
                                <p className="mb-14">
                                    В КОНКУРСЕ МОЖЕТ ПРИНЯТЬ УЧАСТИЕ ЛЮБОЙ ДИЗАЙНЕР ИЛИ КОМПАНИЯ,
                                    АГЕНТСТВО, ВЛАДЕЛЕЦ ТОРГОВОЙ МАРКИ/БРЕНДА, РОЗНИЧНАЯ СЕТЬ.
                                </p>
                                <h3 className="text-xl font-medium">
                                    СРОКИ ПРОВЕДЕНИЯ КОНКУРСА 2020 Г.
                                </h3>
                                <p className="mb-14">
                                    <span>
                                        <strong className="font-medium">
                                            14 ФЕВРАЛЯ – 14 АПРЕЛЯ
                                        </strong>{' '}
                                        ПРИЕМ ЗАЯВОК НА КОНКУРС
                                    </span>
                                    <br />
                                    <span>
                                        <strong className="font-medium">15 – 28 АПРЕЛЯ</strong>{' '}
                                        РАБОТА ЖЮРИ
                                    </span>
                                    <br />
                                    <span>
                                        <strong className="font-medium">01 МАЯ</strong> ОБЪЯВЛЕНИЕ
                                        НОМИНАНТОВ
                                    </span>
                                    <br />
                                    <span>
                                        <strong className="font-medium">05 МАЯ</strong> ЦЕРЕМОНИЯ
                                        НАГРАЖДЕНИЯ И ОБЪЯВЛЕНИЕ ПОБЕДИТЕЛЕЙ
                                    </span>
                                </p>
                                <h3 className="text-xl font-medium">УСЛОВИЯ УЧАСТИЯ</h3>
                                <p className="mb-14">
                                    <span>ДЛЯ УЧАСТИЯ В КОНКУРСЕ НЕОБХОДИМО:</span>
                                    <ul>
                                        <li>
                                            <span>
                                                <strong className="font-medium">
                                                    ЗАПОЛНИТЬ ЗАЯВКУ
                                                </strong>{' '}
                                                НА САЙТЕ{' '}
                                                <a
                                                    href="https://obawards.ru"
                                                    className="text-accent hover:underline"
                                                >
                                                    OBAWARDS.RU
                                                </a>
                                                , СОБЛЮДАЯ ВСЕ УСЛОВИЯ УЧАСТИЯ
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <strong className="font-medium">ДОКУМЕНТЫ</strong> В
                                                ФОРМАТЕ PDF (КАЧЕСТВО ДЛЯ ПЕЧАТИ) ДОЛЖНЫ БЫТЬ
                                                ПРЕДОСТАВЛЕНЫ ОРГАНИЗАТОРУ КОНКУРСА НЕ ПОЗДНЕЕ 14
                                                АПРЕЛЯ 2020 ГОДА.
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <strong className="font-medium">ОПЛАТИТЬ</strong>{' '}
                                                УЧАСТИЕ СОГЛАСНО СПИСКУ ЗАПОЛНЕННЫХ ЗАЯВОК ПО
                                                ДОГОВОРУ НЕ ПОЗДНЕЕ 15 АПРЕЛЯ 2020 ГОДА.
                                            </span>
                                        </li>
                                    </ul>
                                </p>
                                <h3 className="text-xl font-medium">НАГРАДЫ</h3>
                                <p className="mb-14">
                                    <span>
                                        <strong className="font-medium">1 МЕСТО</strong> – ЗОЛОТАЯ
                                        НАГРАДА И <strong className="font-medium">1 000 000</strong>{' '}
                                        РУБЛЕЙ
                                    </span>
                                    <br />
                                    <span>
                                        <strong className="font-medium">2 МЕСТО</strong> –
                                        СЕРЕБРЯНАЯ НАГРАДА И{' '}
                                        <strong className="font-medium">400 000</strong> РУБЛЕЙ
                                    </span>
                                    <br />
                                    <span>
                                        <strong className="font-medium">3 МЕСТО</strong> – БРОНЗОВАЯ
                                        НАГРАДА И <strong className="font-medium">100 000</strong>{' '}
                                        РУБЛЕЙ
                                    </span>
                                    <br />
                                    <span>ПРИЗ ЗРИТЕЛЬСКИХ СИМПАТИЙ – СУВЕНИР ОТ OBA!</span>
                                </p>
                                <h3 className="text-xl font-medium">СТОИМОСТЬ</h3>
                                <p>
                                    <strong className="font-medium">20 000 РУБЛЕЙ</strong> –
                                    СТОИМОСТЬ УЧАСТИЯ, БЕЗ НАЛОГА НДС
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="px-20 pb-40 pt-20 bg-white">
                        <h2 className="text-3xl font-medium mb-2">ЖЮРИ</h2>
                        <hr className="border-black border-2 mb-12" />
                        <div className="grid grid-cols-1 lg:grid-cols-3 mb-24">
                            <span className="col-span-2 col-start-2">
                                В ЖЮРИ КОНКУРСА OPEN BRANDING AWARDS ЛИДЕРЫ ОТРАСЛЕЙ ДИЗАЙНА, МЕДИЯ,
                                МАРКЕТИНГА, БИЗНЕСА
                            </span>
                        </div>
                        <div className="grid grid-cols-1 gap-y-9 gap-x-4 lg:grid-cols-2 xl:grid-cols-3 justify-center">
                            <div className="col-span-1 flex flex-col items-start">
                                <span className="p-1 bg-black text-gray text-5xl leading-tight">
                                    АЛЕКСЕЙ
                                </span>
                                <span className="p-1 bg-black text-gray mb-4 text-5xl leading-tight">
                                    МИЛЛЕР
                                </span>
                                <span>ПРЕДСЕДАТЕЛЬ ПРАВЛЕНИЯ ПАО “ГАЗПРОМ”</span>
                            </div>
                            <div className="col-span-1 flex flex-col items-start">
                                <span className="p-1 bg-black text-accent text-5xl leading-tight">
                                    ДМИТРИЙ
                                </span>
                                <span className="p-1 bg-black text-accent mb-4 text-5xl leading-tight">
                                    АЗАРОВ
                                </span>
                                <span>ГУБЕРНАТОР САМАРСКОЙ ОБЛАСТИ</span>
                            </div>
                            <div className="col-span-1 flex flex-col items-start">
                                <span className="p-1 bg-black text-white text-5xl leading-tight">
                                    ОЛЕГ
                                </span>
                                <span className="p-1 bg-black text-white mb-4 text-5xl leading-tight">
                                    БЕЛОЗЁРОВ
                                </span>
                                <span>ГЕНЕРАЛЬНЫЙ ДИРЕКТОР – ПРЕДСЕДАТЕЛЬ ПРАВЛЕНИЯ ОАО “РЖД”</span>
                            </div>
                            <div className="col-span-1 flex flex-col items-start">
                                <span className="p-1 bg-black text-white text-5xl leading-tight">
                                    СЕРГЕЙ
                                </span>
                                <span className="p-1 bg-black text-white mb-4 text-5xl leading-tight">
                                    ПИСКАРЕВ
                                </span>
                                <span>ПРЕЗИДЕНТ АКАР</span>
                            </div>
                            <div className="col-span-1 flex flex-col items-start">
                                <span className="p-1 bg-black text-gray text-5xl leading-tight">
                                    ЕЛЕНА
                                </span>
                                <span className="p-1 bg-black text-gray mb-4 text-5xl leading-tight">
                                    МАРТЫНОВА
                                </span>
                                <span>
                                    ДИРЕКТОР ПО СТРАТЕГИЧЕСКИМ КОММУНИКАЦИЯМ И ПРОДВИЖЕНИЮ БРЕНДА
                                    ПАО “МЕГАФОН”
                                </span>
                            </div>
                            <div className="col-span-1 flex flex-col items-start">
                                <span className="p-1 bg-black text-accent text-5xl leading-tight">
                                    ДМИТРИЙ
                                </span>
                                <span className="p-1 bg-black text-accent mb-4 text-5xl leading-tight">
                                    АЗАРОВ
                                </span>
                                <span>ГУБЕРНАТОР САМАРСКОЙ ОБЛАСТИ</span>
                            </div>
                        </div>
                    </section>

                    <section className="px-20 pb-32 pt-20 bg-white">
                        <h2 className="text-3xl font-medium mb-2">КОНТАКТЫ</h2>
                        <hr className="border-black border-2 mb-12" />
                        <div className="grid grid-cols-1 lg:grid-cols-3 mb-24">
                            <div className="col-span-2 col-start-2 flex flex-col text-sm">
                                <span className="mb-2">МОСКВА, КРЕМЛЬ,Д.1</span>
                                <span className="mb-2">+7 499 233-32-22</span>
                                <span className="mb-6">INFO@OBAWARDS.COM</span>
                                <span className="flex gap-x-12 mb-12">
                                    <span>TW</span>
                                    <span>FB</span>
                                    <span>VK</span>
                                    <span>INST</span>
                                </span>
                                <div className="bg-gray w-full" style={{ height: 350 }}>
                                    Map
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <aside className="flex-shrink-0 w-20 bg-white"></aside>
            </div>
            <footer className="bg-black px-20 py-12 flex justify-between">
                <div className="text-lg text-white">ОРГАНИЗАТОРЫ</div>
                <div className="flex flex-col text-sm text-white">
                    <span className="flex gap-x-12 mb-7">
                        <span>TW</span>
                        <span>FB</span>
                        <span>VK</span>
                        <span>INST</span>
                    </span>
                    <span className="mb-2">МОСКВА, КРЕМЛЬ,Д.1</span>
                    <span className="mb-2">+7 499 233-32-22</span>
                    <span>INFO@OBAWARDS.COM</span>
                </div>
            </footer>
        </div>
    );
};
