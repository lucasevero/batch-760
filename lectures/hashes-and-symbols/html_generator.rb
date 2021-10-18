def html_generator(tag, content, attr = {})
  partials = []
  attr.each do |key, value|
    partials << "#{key}=\"#{value}\""
  end

  attr_string = partials.join(" ")

  "<#{tag} #{attr_string}>#{content}</#{tag}>"
end

puts html_generator("div", "")
puts html_generator("div", "", {
  "class" => "container",
  "id" => "menu"
})
