import random


#on va coder un lanceur de dé

# une fonction qui sort un nombre aléatoire entre 1 et 6


def roll_the_dice():
    result = 0
    faces_de_dé = [1, 2, 3, 4, 5, 6]
    result = random.choice(faces_de_dé)
    print('le dé se met à rouler')  # Press Ctrl+F8 to toggle the breakpoint.
    return result




# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    print(roll_the_dice())

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
