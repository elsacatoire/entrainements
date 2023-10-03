
import random


class Player:
    def __init__(self, name):
        self.name = name
        self.hand = ""
        self.possible_moves = ["rock", "paper", "scissor"]

    def get_hand(self):
        while True:
            self.hand = input(f"{self.name}: rock, paper, scissor ?")
            if self.hand in self.possible_moves:
                break
            else:
                print("Invalid choice. Please choose from rock, paper, or scissor.")
        print(f"{self.name} plays {self.hand}")
        return self.hand


class Computer(Player):
    def __init__(self):
        super().__init__("computer")

    def get_hand(self):
        self.hand = random.choice(self.possible_moves)
        print(f"{self.name} plays {self.hand}")
        return self.hand


class Gameplay:
    def __init__(self):
        self.main_player = {}
        self.player_ia = {}
        self.hand1 = ""
        self.hand2 = ""
        self.points1 = 0
        self.points2 = 0
        self.name_player = ""

    def start_game(self):
        self.name_player = input("Hi ! Welcome to the rock, paper scissor game. What is your name ?")
        self.main_player = Player(self.name_player)
        self.player_ia = Computer()
        self.hand1 = ""
        self.hand2 = ""
        self.points1 = 0
        self.points2 = 0

    def get_hands(self):
        self.hand1 = self.main_player.get_hand()
        self.hand2 = self.player_ia.get_hand()

    def compare_hands(self):
        if self.hand1 == self.hand2:
            print("tie, play again")
        elif (self.hand1 == "rock" and self.hand2 == "scissor") or \
                (self.hand1 == "paper" and self.hand2 == "rock") or \
                (self.hand1 == "scissor" and self.hand2 == "paper"):
            self.points1 += 1
        else:
            self.points2 += 1

    def did_win(self):
        if self.points1 >= 3:
            print(f"It's a win ! {self.name_player} won the game")
            return True
        if self.points2 >= 3:
            print(f"It's a win ! {self.player_ia.name} won the game")
            return True
        else:
            return False


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    Game1 = Gameplay()
    Game1.start_game()
    while not Game1.did_win():
        Game1.get_hands()
        Game1.compare_hands()
        print(f"{Game1.name_player} : {Game1.points1} - {Game1.player_ia.name} : {Game1.points2}")






