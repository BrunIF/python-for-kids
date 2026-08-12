# Урок 13. Файли: Save & Load

**Тривалість:** 45–55 хв  
**XP:** 190

## 🎯 Місія
Навчити програму пам'ятати дані після завершення роботи.

## ✍️ Запис
```python
with open("save.txt", "w", encoding="utf-8") as file:
    file.write("Marko")
```

## 📖 Читання
```python
with open("save.txt", "r", encoding="utf-8") as file:
    name = file.read()
print(name)
```

## ➕ Додавання
```python
with open("log.txt", "a", encoding="utf-8") as file:
    file.write("Dragon defeated!\n")
```

## 🎮 Просте збереження
```python
name = "Marko"
level = 5

with open("save.txt", "w", encoding="utf-8") as file:
    file.write(f"{name}\n")
    file.write(f"{level}\n")
```

Читання:
```python
with open("save.txt", "r", encoding="utf-8") as file:
    name = file.readline().strip()
    level = int(file.readline())
```

## ✏️ Вправи
1. Запиши ім'я у файл.
2. Прочитай його.
3. Запиши 5 назв ігор — кожну з нового рядка.
4. Прочитай файл циклом.

## ⭐ Challenge — Game Save
Збережи `name`, `hp`, `level`, `coins`, закрий програму й прочитай їх після нового запуску.

## 🐞 Debug Challenge
Що станеться при:
```python
with open("missing.txt", "r") as file:
    print(file.read())
```
якщо файлу немає?

## ✅ Готовий далі, якщо
Марко розуміє `"r"`, `"w"`, `"a"` і сам робить простий save/load.

## 🏠 Домашня місія
Додай збереження до героя з уроку 11.
