# Урок 14. Помилки та `try/except`

**Тривалість:** 40–50 хв  
**XP:** 190

## 🎯 Місія
Навчитися читати помилки та не дозволяти програмі падати через неправильні дані.

## 🧠 Помилка — це підказка
```python
number = int("dragon")
```
Отримаємо `ValueError`.

## 🛡 `try/except`
```python
try:
    age = int(input("Age: "))
    print(age)
except ValueError:
    print("Потрібно ввести число!")
```

## 🔁 Просимо до правильної відповіді
```python
while True:
    try:
        number = int(input("Введи число: "))
        break
    except ValueError:
        print("Це не число!")
```

## 📁 Неіснуючий файл
```python
try:
    with open("save.txt", "r") as file:
        data = file.read()
except FileNotFoundError:
    print("Збереження ще немає.")
```

## ✏️ Вправи
1. Безпечно запитай вік.
2. Безпечно запитай два числа.
3. Оброби відсутній файл.
4. Зроби input, який повторюється після неправильного вводу.

## ⭐ Challenge — Safe Calculator
Калькулятор має пережити неправильний input і ділення на нуль.

Знайди, яку помилку викликає:
```python
100 / 0
```
і оброби її.

## 🐞 Debug Challenge
Які помилки можливі тут?
```python
number = int(input("Number: "))
result = 100 / number
```

## ✅ Готовий далі, якщо
Марко читає останній рядок traceback та використовує `ValueError` і `FileNotFoundError`.

## 🏠 Домашня місія
Зроби save/load таким, щоб відсутність save-файлу не ламала програму.
