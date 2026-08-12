# Урок 15. Власні модулі та структура проєкту

**Тривалість:** 45–55 хв  
**XP:** 210

## 🎯 Місія
Навчитися ділити програму на кілька `.py` файлів.

## 🧠 Власний модуль
`battle.py`:
```python
import random

def attack():
    return random.randint(5, 20)
```

`main.py`:
```python
import battle

print(battle.attack())
```

Або:
```python
from battle import attack
print(attack())
```

## 🗂 Структура
```text
my_game/
├── main.py
├── battle.py
├── save.py
└── data/
    └── save.txt
```

## ✏️ Вправи
1. Створи `math_tools.py` з `double(number)`.
2. Створи `dice.py` з `roll_dice()`.
3. Перенеси функцію атаки старої гри в `battle.py`.

## 🐉 Boss — Mini RPG Structure
Створи:
```text
mini_rpg/
├── main.py
├── battle.py
└── save.py
```
`battle.py` відповідає за бій, `save.py` — за збереження, `main.py` — за запуск.

## ✅ Готовий далі, якщо
Марко може створити власний модуль, імпортувати його й пояснити, навіщо розділяти програму.

## 🔮 Далі
Наступна місія — графічні програми з **Pygame**.

## 🏠 Домашня місія
Перетвори одну стару консольну гру на проєкт із кількох файлів.
