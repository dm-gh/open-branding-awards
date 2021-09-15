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
                                                НА САЙТЕ <a href="obawards.ru">OBAWARDS.RU</a>,
                                                СОБЛЮДАЯ ВСЕ УСЛОВИЯ УЧАСТИЯ
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
                </main>
                <aside className="flex-shrink-0 w-20 bg-white"></aside>
            </div>
            <footer></footer>
        </div>
    );
};
