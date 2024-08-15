# Usa una imagen oficial de Python como base
FROM python:3.10-slim

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de requisitos y instala las dependencias
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copia el código de la aplicación al contenedor
COPY . .

# Expone el puerto en el que la aplicación escuchará (por defecto, Django usa el puerto 8000)
EXPOSE 8000

# Configura el comando de inicio para el contenedor
CMD ["python", "manage.py", "runserver"]