# given a list
# function should return the name of the winner of the election
# number of times the name comes up = a vote
# in the event of a tie, return the name of the person who comes last alphabetically


def count_votes(arr):
    count_dict = {}
    for item in arr:
        if item not in count_dict:
            count_dict[item] = 1
        else:
            count_dict[item] += 1
    max_val = max(count_dict.values())
    winners = []
    for person, votes in count_dict.items():
        if votes == max_val:
            winners.append(person)
    winners.sort()
    return winners[-1]

# votes = [‘veronica’, ‘mary’, ‘alex’, ‘james’, ‘mary’, ‘michael’, ‘alex’, ‘michael’]


votes = ['veronica', 'mary', 'alex', 'james',
         'mary', 'michael', 'alex', 'michael']

print(count_votes(votes))


# for name, age in dictionary.items():    # for name, age in dictionary.iteritems():  (for Python 2.x)
#     if age == search_age:
#         print(name)
