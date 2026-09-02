# Урок 24. Pygame + OOP — клас Player

**Тривалість:** 45–60 хв  
**Рівень:** OOP Explorer

## 🎯 Місія
Перетвори Pygame-гравця на об'єкт із власними методами.

## 🧠 Ключова ідея
```python
class Player:
    def __init__(self, x, y):
        self.rect = pygame.Rect(x, y, 50, 50)
        self.speed = 5

    def draw(self, screen):
        pygame.draw.rect(screen, (0, 200, 100), self.rect)
```

## 💡 Пояснення простою мовою
Тепер гравець — це **об'єкт**, який сам себе малює та знає свої координати. Замість вільних змінних `player_x`, `player_y` у нас один об'єкт `player`, який має `rect` (прямокутник) і метод `draw()`. Так набагато легше додавати нові фічі.

## 🧩 Розбираємо по рядках
```python
class Player:
    def __init__(self, x, y):                           # Створюємо на позиції (x, y)
        self.rect = pygame.Rect(x, y, 50, 50)           # Прямокутник 50×50 пікселів
        self.speed = 5                                   # Швидкість руху

    def draw(self, screen):                              # Метод малювання
        pygame.draw.rect(screen, (0, 200, 100), self.rect) # Зелений квадрат
```

## 🔎 Приклад: запускай і дивись
```python
import pygame

pygame.init()
screen = pygame.display.set_mode((400, 300))
clock = pygame.time.Clock()

class Player:
    def __init__(self, x, y):
        self.rect = pygame.Rect(x, y, 50, 50)
        self.speed = 5

    def draw(self, screen):
        pygame.draw.rect(screen, (0, 200, 100), self.rect)

player = Player(175, 125)

running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    screen.fill((30, 30, 30))
    player.draw(screen)
    pygame.display.flip()
    clock.tick(60)

pygame.quit()
```

## ✏️ Основні завдання
1. Додай `move(keys)`.
   🙋 *Підказка:* Перевіряй `keys[pygame.K_LEFT]` тощо та змінюй `self.rect.x`.
2. Додай межі екрана.
   🙋 *Підказка:* `self.rect.x = max(0, min(self.rect.x, 350))` — обмеження від 0 до width-50.
3. Додай `hp` і `score`.
   🙋 *Підказка:* Додай `self.hp = 100` і `self.score = 0` в `__init__`.
4. Перенеси малювання у `draw()`.
   🙋 *Підказка:* Вже є в прикладі — головне, щоб `draw(screen)` викликався в циклі.

## ⭐ Challenge
Перероби Catch the Coin так, щоб Player був об'єктом.

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
