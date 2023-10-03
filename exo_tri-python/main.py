# This is a sample Python script.

# Press Maj+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.


def print_hi(name):
    # Use a breakpoint in the code line below to debug your script.
    print(f'Hi, {name}')  # Press Ctrl+F8 to toggle the breakpoint.


def tri_bubble(data_to_sort):
    for i in range(len(data_to_sort)-1):
        for j in range(len(data_to_sort[:-i])):
            if data_to_sort[j] > data_to_sort[j+1]:
                data_to_sort[j], data_to_sort[j+1] = data_to_sort[j+1], data_to_sort[j]
    return data_to_sort


def quick_sort(data_to_sort):
    if len(data_to_sort) < 2:
        return data_to_sort
    last_element = data_to_sort[-1]
    left_array = []
    right_array = []
    for i in data_to_sort[:-1]:
        if i > last_element:
            right_array.append(i)
        else:
            left_array.append(i)
    sort1 = quick_sort(left_array)
    sort2 = quick_sort(right_array)
    return sort1 + [last_element] + sort2


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    print_hi('PyCharm')
    tri_bubble([8, -2, 2, 1, 0, 9, 6])

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
