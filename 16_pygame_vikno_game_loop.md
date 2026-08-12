# Урок 16. Pygame: перше графічне вікно

**Тривалість:** 45–60 хв  
**XP:** 230

## 🎯 Місія
Створити графічне вікно й зрозуміти **game loop**.

## 📦 Встановлення
```bash
pip install pygame
```

Перевір:
```python
import pygame
print(pygame.version.ver)
```

## 🪟 Вікно
```python
import pygame

pygame.init()
screen = pygame.display.set_mode((800, 600))
pygame.display.set_caption("Marko's Game")
```

## 🔁 Game loop
```python
running = True

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

pygame.quit()
```

Гра постійно:
1. читає події;
2. оновлює світ;
3. малює кадр;
4. повторює.

## 🎨 Малювання
Усередині циклу:
```python
screen.fill((30, 30, 30))
pygame.draw.rect(screen, (50, 150, 255), (100, 100, 80, 80))
pygame.display.flip()
```

## ⏱ FPS
Перед циклом:
```python
clock = pygame.time.Clock()
```
Наприкінці циклу:
```python
clock.tick(60)
```

## ✏️ Вправи
1. Вікно 800×600.
2. Власний заголовок.
3. Інший фон.
4. Прямокутник.
5. Коло через `pygame.draw.circle()`.

## ⭐ Challenge — Robot
Намалюй робота лише прямокутниками, колами й лініями.

## 🐞 Debug Challenge
Що станеться, якщо після малювання забути `pygame.display.flip()`?

## ✅ Готовий далі, якщо
Марко розуміє game loop, `QUIT`, FPS і вміє малювати прості фігури.

## 🏠 Домашня місія
Намалюй сцену: небо, земля, герой і сонце.
