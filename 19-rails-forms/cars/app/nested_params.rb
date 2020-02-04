


# not nested (form_tag)

#<input type="text" value="Eric's reputable establishment" name="name" id="dealership_name">

{
  name: "Eric's dealership",
  sleaze: 22,
  authenticity_token: "fsdjkdshjkfsdfj"
  ...
}

# nested (form_for)

#<input type="text" value="Eric's reputable establishment" name="dealership[name]" id="dealership_name">

{
  dealership: {
    name: "Eric's dealership",
    sleaze: 22
  },
  authenticity_token: "fsdjkdshjkfsdfj"
  ...
}