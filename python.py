with open('data.json', 'rb') as file:
    content = file.read()

# Reinterpretar el contenido como UTF-8 y eliminar cualquier BOM si está presente
content = content.decode('utf-16').encode('utf-8')

with open('data_utf8.json', 'wb') as file:
    file.write(content)