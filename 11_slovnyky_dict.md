# Урок 11. Словники `dict`

**Тривалість:** 40–50 хв  
**XP:** 170

## 🎯 Місія
Навчитися зберігати пов'язані дані у форматі **ключ → значення**.

## 🧠 Словник героя
```python
hero = {
    "name": "Marko",
    "hp": 100,
    "damage": 15,
    "coins": 50
}
print(hero["name"])
print(hero["hp"])
```

Зміна й додавання:
```python
hero["hp"] = 80
hero["level"] = 2
```

Перебір:
```python
for key, value in hero.items():
    print(key, "=", value)
```

## ✏️ Вправи
1. Створи словник героя: `name`, `hp`, `damage`, `level`, `weapon`.
2. Зменш HP на 25.
3. Збільш level на 1 і damage на 5.
4. Перевір `if "weapon" in hero:`.

## ⭐ Challenge — Game Shop
```python
shop = {"sword": 100, "shield": 80, "potion": 25}
```
Покажи товари й ціни циклом. Потім запитай назву товару і покажи ціну.

## 🐞 Debug Challenge
```python
hero = {"name": "Marko", "hp": 100}
print(hero["damage"])
```
Що станеться і чому?

## ✅ Готовий далі, якщо
- розуміє різницю між `list` і `dict`;
- читає, змінює й додає значення;
- використовує `.items()`.

## 🏠 Домашня місія
Перероби персонажа так, щоб усі його характеристики зберігались в одному словнику.
