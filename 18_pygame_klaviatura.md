# Урок 18. Pygame: керування клавіатурою

**Тривалість:** 45–60 хв  
**XP:** 250

## 🎯 Місія
Дати гравцеві контроль над персонажем.

## ⌨️ Стрілки
У game loop:
```python
keys = pygame.key.get_pressed()

if keys[pygame.K_LEFT]:
    player_x -= 5
if keys[pygame.K_RIGHT]:
    player_x += 5
if keys[pygame.K_UP]:
    player_y -= 5
if keys[pygame.K_DOWN]:
    player_y += 5
```

## 🎮 WASD
```python
if keys[pygame.K_a]:
    player_x -= 5
if keys[pygame.K_d]:
    player_x += 5
```

## 🧱 Межі
Спочатку реалізуй через `if`.

Пізніше можна скоротити:
```python
player_x = max(0, min(player_x, 800 - player_size))
player_y = max(0, min(player_y, 600 - player_size))
```

## ✏️ Вправи
1. Рух стрілками.
2. Додай WASD.
3. Заборони виходити за межі.
4. Винеси швидкість у `player_speed`.

## ⭐ Challenge — Turbo
Коли затиснуто SHIFT, швидкість подвоюється:
```python
speed = 5
if keys[pygame.K_LSHIFT]:
    speed = 10
```
Подумай, чому `speed = 5` треба встановлювати кожен кадр.

## 🐉 Mini Boss — Maze Walker
Намалюй простий лабіринт. Поки що collision зі стінами не потрібен: персонаж має дійти до фінішної зони.

## ✅ Готовий далі, якщо
Марко керує персонажем у 4 напрямках і не випускає його за екран.

## 🏠 Домашня місія
Додай sprint і кнопку повільного руху.
