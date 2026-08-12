# Урок 9. Рядки та списки

**Тривалість:** 40–50 хв  
**XP за урок:** 170

## 🎯 Місія

Навчитися зберігати багато значень разом.

---

## 📝 1. Рядки

```python
name = "Marko"

print(name[0])
print(len(name))
print(name.upper())
print(name.lower())
```

Індекси починаються з `0`.

---

## 📦 2. Списки

```python
weapons = ["sword", "bow", "staff"]
```

Отримати елемент:

```python
print(weapons[0])
print(weapons[1])
```

---

## ➕ 3. Додаємо та видаляємо

```python
weapons.append("axe")
weapons.remove("bow")

print(weapons)
```

---

## 🔁 4. Перебираємо список

```python
weapons = ["sword", "bow", "staff"]

for weapon in weapons:
    print(weapon)
```

---

## ✏️ Вправи

### Вправа 1 — Inventory

Створи список із 5 предметів героя.

Виведи кожен через `for`.

### Вправа 2

Додай новий предмет за допомогою `.append()`.

### Вправа 3

Покажи кількість предметів:

```python
len(inventory)
```

### Вправа 4

Запитай у користувача предмет і додай його до inventory.

---

## ⭐ Challenge — Random Loot

```python
import random

loot = ["sword", "shield", "potion", "gold", "magic ring"]
```

Вибери випадковий предмет:

```python
item = random.choice(loot)
```

Покажи:

```text
You found: magic ring
```

Додай знайдений предмет до inventory.

---

## 🧠 Додатково: `in`

```python
if "sword" in inventory:
    print("У тебе є меч!")
```

---

## 🐞 Debug Challenge

```python
items = ["sword", "shield", "potion"]
print(items[3])
```

Чому виникає помилка?

---

## ✅ Можна рухатись далі, якщо Марко може

- пояснити, що таке список;
- працювати з індексами;
- використовувати `append`, `remove`, `len`;
- перебирати список циклом;
- використовувати `in`.

## 🏠 Домашня місія

Зроби `inventory.py`:

1. стартовий список;
2. знайди 3 випадкові предмети;
3. додай їх;
4. виведи весь inventory.
