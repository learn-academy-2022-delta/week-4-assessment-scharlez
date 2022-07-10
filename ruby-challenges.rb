# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

def even_odd (integer)
    if(integer % 2 == 0)
       "#{integer} is even" 
    else(integer )
        "#{integer} is odd" 
    end
end    

puts even_odd (7)
puts even_odd (42)
puts even_odd (221)

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

def removes_vowels (string)
    # string.delete 'a','e','i','o','u'
    string.delete ('aeiouAEIOU')
end

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

p removes_vowels album1
p removes_vowels album2
p removes_vowels album3

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

def palindrome_string string
    if string.downcase == string.downcase.reverse
        "#{string} is a palidrome"
    else 
        "#{string} is not palidrome"
    end
end

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

p palindrome_string palindrome_tester1 
p palindrome_string palindrome_tester2 
p palindrome_string palindrome_tester3 