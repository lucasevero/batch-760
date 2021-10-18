students =     [ "Peter", "Mary", "George", "Emma" ]
student_ages = [ 24     , 25    , 22      ,  20    ]
# INDEX         0         1       2         3

# Peter is 24 years old
# Mary is 25 years old
# ...

# puts "#{students[0]} is #{student_ages[0]}"

students.each_with_index do |student, index|
  age = student_ages[index]
 puts "#{student} is #{age} years old"
end
