import destructuring from '../dstructuring';

test('Массив с двумя элементами, у одного из которых значение по умолчанию Описание недоступно', () => {
    const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
    {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
    },
    {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        // <-  описание "засекречено"
    },
    ],
};

    const received = destructuring(character);
    const expected = [
    {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
    },
    {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание недоступно',
    },
];
    expect(received).toEqual(expected);
});

test('Ситуация, специальных атак не указано, возвращает пустой массив', () => {
    const character = {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 3,
        attack: 40,
        defence: 10,
        special: [],
    };
    const received = destructuring(character);
    const expected = [];
    expect(received).toEqual(expected);
});

test('Аналогичная Ситуация, когда свойства вообще нет, возвращает пустой массив', () => {
    const character = {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 3,
        attack: 40,
        defence: 10,
    };
    const received = destructuring(character);
    const expected = [];
    expect(received).toEqual(expected);
});