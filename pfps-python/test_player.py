import unittest
from main import Player


class TestPlayer(unittest.TestCase):
    def test_player_has_a_name(self):
        player_name = "Nina"
        player = Player(player_name)
        self.assertEqual(player.name, player_name)

    def test_get_hand_valid_input(self):
        player_name = "Nina"
        player = Player(player_name)

        valid_inputs = ["rock", "paper", "scissor"]

        for valid_input in valid_inputs:
            with unittest.mock.patch('builtins.input', side_effect=[valid_input]):
                self.assertEqual(player.get_hand(), valid_input)

    def test_get_hand_invalid_input_then_valid(self):
        player_name = "Nina"
        player = Player(player_name)

        invalid_inputs = ["invalid", "invalid", "rock"]  # Two invalid inputs, then a valid one

        with unittest.mock.patch('builtins.input', side_effect=invalid_inputs):
            self.assertEqual(player.get_hand(), "rock")


if __name__ == '__main__':
    unittest.main()
