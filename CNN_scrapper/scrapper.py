import requests
from bs4 import BeautifulSoup
import json

def obtener_enlaces_cnn():
    url_base = 'https://www.cnn.com'
    respuesta = requests.get(url_base)
    sopa = BeautifulSoup(respuesta.text, 'html.parser')
    enlaces = []

    for a in sopa.find_all('a', href=True):
        href = a['href']
        if href.startswith('/'):
            href = url_base + href
        if '/202' in href and href not in enlaces:
            enlaces.append(href)

    return enlaces

def extraer_datos_noticia(url):
    respuesta = requests.get(url)
    sopa = BeautifulSoup(respuesta.text, 'html.parser')

    # Título
    titulo_tag = sopa.find('h1')
    titulo = titulo_tag.get_text(strip=True) if titulo_tag else ''

    # Descripción
    descripcion_tag = sopa.find('meta', attrs={'name': 'description'})
    descripcion = descripcion_tag['content'] if descripcion_tag else ''

    # Imagen
    imagen_tag = sopa.find('meta', property='og:image')
    imagen = imagen_tag['content'] if imagen_tag else ''

    return {
        'title': titulo,
        'description': descripcion,
        'image': imagen,
        'link': url
    }

def obtener_noticias_cnn(number):
    enlaces = obtener_enlaces_cnn()
    noticias = []

    for enlace in enlaces[:number]:  # Limita a las primeras 10 noticias
        datos = extraer_datos_noticia(enlace)
        noticias.append(datos)

    #return json.dumps(noticias, ensure_ascii=False, indent=2)
    return noticias
