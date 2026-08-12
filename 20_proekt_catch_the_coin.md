# Урок 20. 🐉 Boss Project — Catch the Coin

**Тривалість:** 60–90 хв або 2 короткі заняття  
**XP:** 500

## 🎯 Місія
Створити першу завершену графічну гру, використавши знання з уроків 1–19.

# 🎮 Правила
Гравець керує персонажем. На екрані є монета. При collision:
- `score += 1`;
- монета переходить у випадкове місце.

Гра триває обмежений час.

## 📋 Мінімальні вимоги
- Pygame window;
- game loop;
- player;
- клавіатура;
- межі екрана;
- coin;
- collision;
- random position;
- score;
- завершення гри.

## 🏗 Етап 1 — Вікно
```python
WIDTH = 800
HEIGHT = 600
FPS = 60
```

## 🧍 Етап 2 — Player
```python
player = pygame.Rect(100, 100, 50, 50)
player_speed = 5
```
Додай керування й межі.

## 🪙 Етап 3 — Coin
```python
coin = pygame.Rect(400, 300, 30, 30)
```
При collision збільш score і перемісти coin.

## 🖥 Етап 4 — Score
```python
font = pygame.font.Font(None, 36)

score_text = font.render(
    f"Score: {score}",
    True,
    (255, 255, 255)
)

screen.blit(score_text, (20, 20))
```

## ⏱ Етап 5 — Таймер
Корисно:
```python
start_time = pygame.time.get_ticks()
```
`get_ticks()` повертає мілісекунди від запуску Pygame.

Зроби гру на 30 секунд.

## 🏁 Етап 6 — Game Over
Після завершення:
```text
TIME'S UP!
Score: 12
```

## 🥉 Bronze
Герой + монета + collision + score.

## 🥈 Silver
Bronze + таймер + Game Over + restart.

## 🥇 Gold
Silver + ворог + 3 життя + різні монети.

## 💎 Diamond
Додай власну механіку: звук, картинки, high score, bonus coin, levels або speed boost.

## 🐞 Debug Checklist
1. `pygame.init()`?
2. Game loop працює?
3. `pygame.QUIT`?
4. Екран очищається?
5. Player і coin малюються?
6. `pygame.display.flip()`?
7. Координати змінюються?
8. `colliderect()` спрацьовує?
9. Score змінюється?
10. `clock.tick(FPS)` є?

## 🧠 Питання після проєкту
1. Навіщо game loop?
2. Чому `y` росте вниз?
3. Що зберігає `Rect`?
4. Як працює `colliderect()`?
5. Навіщо FPS?
6. Що буде без очищення екрана?
7. Які частини коду вже хочеться перетворити на окремі об'єкти?

Останнє питання веде до наступного етапу:

```python
class Player:
    ...

class Enemy:
    ...

class Coin:
    ...
```

Тобто до **OOP**.

## 🏆 Фінальний критерій
Марко може дати іншій людині пограти у свою гру й пояснити основні частини власного коду. Код не мусить бути ідеальним — важливо розуміти, чому він працює.
