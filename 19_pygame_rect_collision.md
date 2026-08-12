# Урок 19. Pygame: `Rect`, картинки та collision

**Тривалість:** 50–65 хв  
**XP:** 280

## 🎯 Місія
Навчити ігрові об'єкти взаємодіяти.

## 🧱 `pygame.Rect`
```python
player = pygame.Rect(100, 100, 50, 50)
pygame.draw.rect(screen, (0, 200, 100), player)

player.x += 5
player.y -= 5
```

## 💥 Collision
```python
coin = pygame.Rect(400, 300, 30, 30)

if player.colliderect(coin):
    print("Coin collected!")
```

## 🪙 Нове місце монети
```python
import random

coin.x = random.randint(0, 770)
coin.y = random.randint(0, 570)
```

## 🖼 Картинка
```python
player_image = pygame.image.load("player.png").convert_alpha()
player_image = pygame.transform.scale(player_image, (50, 50))
screen.blit(player_image, player)
```

## ✏️ Вправи
1. Перероби player на `Rect`.
2. Створи coin.
3. Рухай player.
4. При collision переміщуй coin.
5. Додай `score`.

## ⭐ Challenge — Enemy
Створи червоного ворога. При collision — `GAME OVER`.

## ⭐⭐ Challenge — Multiple Coins
Створи список із кількох `pygame.Rect` і перевіряй їх циклом.

## 🐞 Debug Challenge
Чому score може збільшуватися багато разів, якщо після collision монета залишається на місці?

## ✅ Готовий далі, якщо
Марко використовує `Rect`, `colliderect`, score та може завантажити PNG.

## 🏠 Домашня місія
Зроби сцену з героєм, трьома монетами та ворогом.
