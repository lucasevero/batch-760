paris = {
  "country" => "France",
  "population" => 2211000
}

# CRUD - Create, Read, Update and Destroy
# array = [1, 2, 3, 4, 5]

# Read
# array[3] => 4
puts paris['country']

# Create
# array << 6
# array.push(6)
paris["mayor"] = "Anne Hidalgo"
puts paris

# Update
# array[1] = "dois"
paris["mayor"] = "Marc"
puts paris

# Destroy
# array.delete(5)
# array.delete_at(4)
paris.delete("mayor")
puts paris

# #each

# array.each do |number|
#   puts number
# end

paris.each do |key, value|
  puts "#{key} is #{value}"
end

# If you read a key that doesn't exist in the hash, it will return nil
# paris["language"] => nil
