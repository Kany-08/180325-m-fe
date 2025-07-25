/**
 * Класс, представляющий структуру данных очередь, реализованную на основе массива.
 * Элементы добавляются в конец (enqueue) и удаляются из начала (dequeue).
 */
class ArrayQueue {
    /**
     * Создает экземпляр ArrayQueue.
     * Инициализирует пустой массив для хранения элементов очереди.
     */
    constructor() {
        // TODO: Инициализировать пустой массив для хранения элементов очереди
    }

    /**
     * Добавляет элемент в конец очереди.
     * @param {*} element - Элемент, который нужно добавить в очередь.
     */
    enqueue(element) {
        // TODO: Добавить элемент в конец массива
        // TODO: Вывести сообщение в консоль, что элемент добавлен, например: "Добавлен в очередь: <element>"
    }

    /**
     * Удаляет и возвращает элемент из начала очереди.
     * @returns {*} Удаленный элемент из очереди или null, если очередь пуста.
     */
    dequeue() {
        // TODO: Проверить, пуста ли очередь; если да, вывести в консоль "Очередь пуста! Невозможно выполнить dequeue()" и вернуть null
        // TODO: Удалить и сохранить первый элемент массива (учтите, что array.shift() имеет сложность O(n))
        // TODO: Вывести сообщение в консоль, что элемент удален, например: "Удален из очереди: <element>"
        // TODO: Вернуть удаленный элемент
    }

    /**
     * Возвращает первый элемент очереди без его удаления.
     * @returns {*} Первый элемент очереди или null, если очередь пуста.
     */
    front() {
        // TODO: Проверить, пуста ли очередь; если да, вернуть null
        // TODO: Вернуть первый элемент массива без его удаления
    }

    /**
     * Возвращает последний элемент очереди без его удаления.
     * @returns {*} Последний элемент очереди или null, если очередь пуста.
     */
    rear() {
        // TODO: Проверить, пуста ли очередь; если да, вернуть null
        // TODO: Вернуть последний элемент массива без его удаления
    }

    /**
     * Проверяет, пуста ли очередь.
     * @returns {boolean} True, если очередь пуста, иначе false.
     */
    isEmpty() {
        // TODO: Вернуть true, если длина массива равна 0, иначе false
    }

    /**
     * Возвращает количество элементов в очереди.
     * @returns {number} Количество элементов в очереди.
     */
    size() {
        // TODO: Вернуть длину массива
    }

    /**
     * Очищает очередь, удаляя все элементы.
     */
    clear() {
        // TODO: Очистить массив, установив его в пустой массив
        // TODO: Вывести сообщение в консоль: "Очередь очищена"
    }

    /**
     * Выводит содержимое очереди в консоль.
     */
    display() {
        // TODO: Проверить, пуста ли очередь; если да, вывести в консоль "Очередь пуста" и завершить выполнение
        // TODO: Вывести в консоль сообщение "Содержимое очереди (начало -> конец):"
        // TODO: Вывести элементы массива, соединенные строкой " <- "
    }

    /**
     * Выполняет указанную функцию для каждого элемента очереди.
     * @param {function} callback - Функция, которая будет вызвана для каждого элемента. Принимает элемент, индекс и массив.
     */
    forEach(callback) {
        // TODO: Пройтись по всем элементам массива
        // TODO: Вызвать callback для каждого элемента, передав элемент, его индекс и массив
    }
}

/**
 * Класс, представляющий узел односвязного списка.
 */
class Node {
    /**
     * Создает узел с указанными данными.
     * @param {*} data - Данные, которые будет содержать узел.
     */
    constructor(data) {
        // TODO: Установить данные узла (data)
        // TODO: Установить указатель на следующий узел (next) как null
    }
}

/**
 * Класс, представляющий структуру данных очередь, реализованную на основе односвязного списка.
 * Элементы добавляются в конец (enqueue) и удаляются из начала (dequeue).
 */
class LinkedListQueue {
    /**
     * Создает экземпляр LinkedListQueue.
     * @param {number} [maxSize=Infinity] - Максимально допустимый размер очереди.
     */
    constructor(maxSize = Infinity) {
        // TODO: Инициализировать начало очереди (head) как null
        // TODO: Инициализировать конец очереди (tail) как null
        // TODO: Инициализировать текущий размер (size) как 0
        // TODO: Установить максимальный размер очереди (maxSize) из параметра
    }

    /**
     * Добавляет элемент в конец очереди.
     * @param {*} data - Элемент, который нужно добавить в очередь.
     * @returns {boolean} True, если элемент успешно добавлен, иначе false (если очередь переполнена).
     */
    enqueue(data) {
        // TODO: Проверить, достигнут ли максимальный размер очереди; если да, вывести в консоль "Очередь переполнена" и вернуть false
        // TODO: Создать новый узел с переданным значением data (используйте класс Node)
        // TODO: Если очередь не пуста (tail существует), установить next текущего tail на новый узел
        // TODO: Если очередь пуста (head не существует), установить head на новый узел
        // TODO: Установить tail на новый узел
        // TODO: Увеличить размер очереди (size) на 1
        // TODO: Вывести сообщение в консоль, что элемент добавлен, например: "Добавлен: <data>"
        // TODO: Вернуть true
    }

    /**
     * Удаляет и возвращает элемент из начала очереди.
     * @returns {*} Удаленный элемент или null, если очередь пуста.
     */
    dequeue() {
        // TODO: Проверить, пуста ли очередь; если да, вывести в консоль "Очередь пуста" и вернуть null
        // TODO: Сохранить данные (data) из узла head
        // TODO: Переместить head на следующий узел (head.next)
        // TODO: Уменьшить размер очереди (size) на 1
        // TODO: Если очередь стала пустой (size === 0), установить tail в null
        // TODO: Вывести сообщение в консоль, что элемент удален, например: "Удален: <data>"
        // TODO: Вернуть сохраненные данные
    }

    /**
     * Проверяет, пуста ли очередь.
     * @returns {boolean} True, если очередь пуста, иначе false.
     */
    isEmpty() {
        // TODO: Вернуть true, если head равен null, иначе false
    }

    /**
     * Возвращает текущий размер очереди.
     * @returns {number} Количество элементов в очереди.
     */
    getSize() {
        // TODO: Вернуть текущий размер очереди (size)
    }

    /**
     * Очищает очередь, удаляя все элементы.
     */
    clear() {
        // TODO: Установить head в null
        // TODO: Установить tail в null
        // TODO: Установить size в 0
        // TODO: Вывести сообщение в консоль: "Очередь очищена"
    }

    /**
     * Выполняет указанную функцию для каждого элемента очереди.
     * @param {function} callback - Функция, которая будет вызвана для каждого элемента. Принимает данные элемента и индекс.
     */
    forEach(callback) {
        // TODO: Начать с узла head
        // TODO: Пройтись по всем узлам списка, пока текущий узел существует
        // TODO: Для каждого узла вызвать callback, передав данные узла (data) и текущий индекс
        // TODO: Перейти к следующему узлу и увеличить индекс
    }
}

/**
 * Класс RequestManager - очередь последовательной обработки запросов
 * Здесь вы реализуете механизм, который:
 * - принимает запросы и добавляет их в очередь
 * - выполняет запросы по одному
 * - возвращает Promise для каждого запроса
 */
class RequestManager {
    /**
     * Конструктор инициализирует очередь и состояние обработки
     */
    constructor() {
        // TODO: инициализируйте Очередь задач

        // Флаг, показывающий, выполняется ли сейчас процесс обработки
    }

    /**
     * Добавляет запрос в очередь и запускает обработку, если она ещё не началась
     * @param {string} url - URL запроса
     * @param {RequestInit} [options] - Дополнительные опции для fetch
     * @returns {Promise<any>} - Промис, который резолвится данными ответа
     */
    enqueueRequest(url, options) {
        // TODO:
        // 1. Вернуть новый Promise.
        // 2. Добавить объект задачи { url, options, resolve, reject } в очередь.
        // 3. Если isProcessing == false, вызвать processQueue().
    }

    /**
     * Последовательно выполняет запросы из очереди
     * Обработка должна выполняться до тех пор, пока очередь не станет пустой.
     * После окончания обработки нужно сбросить флаг isProcessing.
     * @returns {Promise<void>}
     */
    async processQueue() {
        // TODO:
        // 1. Установите флаг isProcessing = true.
        // 2. Пока очередь не пуста:
        //    - извлеките следующую задачу из очереди.
        //    - выполните fetch с переданными параметрами.
        //    - распарсьте JSON.
        //    - вызовите resolve(data) или reject(error).
        // 3. После окончания установите isProcessing = false.
    }
}
/*
const queue = new RequestManager();

for (let index = 0; index < 10; index++) {
    queue.enqueueRequest(`https://jsonplaceholder.typicode.com/todos/${index}`)
            .then(data => console.log(`Запрос ${index} результат:`, data))
            .catch(err => console.log(err));
        console.log("added to queue request with id " + index);
    console.log("added to queue request with id " + index);    
    fetch(`https://jsonplaceholder.typicode.com/todos/${index}`)
    .then(data => data.json())
        .then(data => console.log(`Запрос ${index} результат:`, data))
        .catch(err => console.log(err));
}*/