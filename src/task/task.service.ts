import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  #TASKS;
  constructor() {
    this.#TASKS = [
      { id: 0, title: 'Вынести мусор', completed: true },
      { id: 1, title: 'Купить хлеб и молоко', completed: false },
      { id: 2, title: 'Подписать договор', completed: false },
      { id: 3, title: 'Провести урок', completed: true },
    ];
  }

  async getAll() {
    return this.#TASKS;
  }

  //! получаем один элемент массива по айди

  async getOne(id: string) {
    return this.#TASKS[id];
  }

  //! добавляем новые таски

  async create(data) {
    this.#TASKS.push(data);
    return this.#TASKS;
  }
}
