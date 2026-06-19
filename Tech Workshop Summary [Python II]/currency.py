'''Instructions
We just got home from a fun trip to South America, specifically Colombia, Peru, and Brazil. There's some leftover cash in:

🇨🇴 Colombian pesos
🇵🇪 Peruvian soles
🇧🇷 Brazilian reais
Create a currency.py program that asks the user for the amount they have in pesos, soles, and reais and calculates the total in USD.

Make sure to Google the current exchange rates for pesos, soles, and reais!

The output should look something like this, but with different results:

What do you have left in pesos? 5600
What do you have left in soles? 105
What do you have left in reais? 280
413.0

Cha-ching! Now you have the total in USD. 💰
'''

# Write code below 💖

#1COP = 0.00029USD
pesos = int(input("What do you have left in pesos?"))
#1PEN = 0.30USD
soles = int(input("What do you have left in soles?"))
#1BRL = 0.19USD
reais = int(input("What do you have left in reais?"))

output = (0.00029*pesos) + (0.30*soles) + (0.19*reais)

print(output)