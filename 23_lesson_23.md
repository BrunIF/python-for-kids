# Урок 23. OOP — методи

**Тривалість:** 45–60 хв  
**Рівень:** OOP Explorer

## 🎯 Місія
Перенеси поведінку героя всередину його класу.

## 🧠 Ключова ідея
```python
class Player:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp

    def take_damage(self, damage):
        self.hp = max(0, self.hp - damage)

    def is_alive(self):
        return self.hp > 0
```

## 💡 Пояснення простою мовою
Методи — це **функції всередині класу**. Вони описують, що об'єкт може *робити*: атакувати, лікуватися, перевіряти стан. Замість зовнішньої функції `take_damage(player, ...)` ми пишемо `player.take_damage(...)` — все «причеплено» до об'єкта.

## 🧩 Розбираємо по рядках
```python
class Player:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp

    def take_damage(self, damage):        # Метод: «отримати урон»
        self.hp = max(0, self.hp - damage) # Віднімаємо, але не нижче 0

    def is_alive(self):                   # Метод: «чи живий?»
        return self.hp > 0                # Повертає True або False
```

## 🔎 Приклад: запускай і дивись
```python
class Player:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp

    def take_damage(self, damage):
        self.hp = max(0, self.hp - damage)

    def is_alive(self):
        return self.hp > 0

hero = Player("Marko", 50)
print(hero.hp, hero.is_alive())   # 50 True

hero.take_damage(30)
print(hero.hp, hero.is_alive())   # 20 True

hero.take_damage(20)
print(hero.hp, hero.is_alive())   # 0 False
```

```python
class Player:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp

    def take_damage(self, damage):
        self.hp = max(0, self.hp - damage)

    def heal(self, amount):
        self.hp += amount

    def is_alive(self):
        return self.hp > 0

p = Player("Bot", 10)
p.take_damage(5)
print(p.hp)          # 5
p.heal(3)
print(p.hp)          # 8
p.take_damage(100)
print(p.hp, p.is_alive())  # 0 False
```

## ✏️ Основні завдання
1. Додай `show_status()`.
   🙋 *Підказка:* `print(f"{self.name} HP: {self.hp}")` — просто виведи стан.
2. Додай `attack()`.
   🙋 *Підказка:* Може приймати `target` та викликати `target.take_damage(...)`.
3. Не дозволяй HP падати нижче 0.
   🙋 *Підказка:* Вже є в прикладі — `max(0, ...)`.
4. Додай `heal()` та `is_alive()`.
   🙋 *Підказка:* `heal` просто додає HP, `is_alive` повертає `self.hp > 0`.

## ⭐ Challenge
Зроби консольний бій двох об'єктів, використовуючи їхні методи.

## 🧪 Перед запуском
Хоча б раз за урок спробуй **передбачити результат коду до запуску**. Після запуску порівняй прогноз із реальністю.

## 🐞 Debug Mission
Навмисно зламай одну частину програми. Прочитай traceback або спостережи неправильну поведінку, знайди причину й виправ її.

## ✅ Урок завершено, якщо Марко може
- пояснити головну ідею своїми словами;
- виконати основні завдання без копіювання готового рішення;
- змінити програму під нову вимогу;
- знайти й виправити хоча б одну власну помилку.

## 🏠 Домашня місія
Покращ Challenge **однією власною ідеєю**. Перед кодом сформулюй її одним реченням.

## 💡 Підказка для дорослого
Не виправляйте код одразу. Краще запитайте: **«Що ти очікував? Що сталося? Який рядок за це відповідає? Що можна перевірити?»**
