from .models import Movie, Genre, Provider, Actor, Director
import requests


API_KEY = '44f9d36b9d8fa8e880839899c577f866'
URL_BASE = 'https://api.themoviedb.org/3'


def important_fun(lst):
    for movie_id in lst:
        PATH = f'/movie/{movie_id}'  # movie.detail
        params = {'api_key': API_KEY, 'language': 'ko', 'region': 'KR'}
        r1 = requests.get(URL_BASE + PATH, params=params) 
        movie = r1.json()

        country = ''
        if movie.get('production_countries'):
            country = movie.get('production_countries')[0]['name']

        movie_data = Movie(
        id=movie.get('id'),title=movie.get('title'), release_date=movie.get('release_date'),
        description=movie.get('overview'), run_time=movie.get('runtime'), country=country,
        original_title=movie.get('original_title'), adult=movie.get('adult'),
        poster_url=movie.get('poster_path'))

        movie_data.save()

        PATH2 = f'/movie/{movie_id}/watch/providers'  # providers
        r2 = requests.get(URL_BASE + PATH2, params={'api_key': API_KEY})

        providers_data = 0
        if r2.json()['results'].get('KR'):
            providers_data = r2.json()['results'].get('KR').get('rent')


        if providers_data:
            for provider in providers_data:
                provider_id = provider.get('provider_id')
                provider_name = provider.get('provider_name')

                provide_data = Provider(id=provider_id, name=provider_name)
                provide_data.save()

                movie_data.providers.add(provider_id)


        if movie.get('genres'):
            for genre in movie.get('genres'):  # Movie.genres에 장르 넣기
                genre_id = genre.get('id')
                genre_name = genre.get('name')

                genre_data = Genre(id=genre_id, name=genre_name)
                genre_data.save()

                movie_data.genres.add(genre_id)


        PATH3 = f'/movie/{movie_id}/credits'
        r3 = requests.get(URL_BASE + PATH3, params={'api_key': API_KEY, 'language': 'ko'})
        cast_people = r3.json()['cast']
        cast_ids = []
        for cast_person in cast_people[:5]:
            cast_ids.append(cast_person.get('id'))

        for person_id in cast_ids:
            PATH4 = f'/person/{person_id}'
            r4 = requests.get(URL_BASE + PATH4, params={'api_key': API_KEY, 'language': 'ko'})
            person_data = r4.json()
            person_names = person_data.get('also_known_as')
            for person_name in person_names:
                person_a = person_name[0]
                if ord('가') <= ord(person_a) <= ord('힣'):
                    acotr_data = Actor(id=person_id, name=person_name)
                    acotr_data.save()
                    movie_data.actors.add(person_id)
                    
        director_id = 0
        director_people = r3.json()['crew']
        for director_person in director_people:
            if director_person.get('known_for_department') == 'Directing':
                director_id = director_person.get('id')
                break
        if director_id:
            PATH5 = f'/person/{director_id}'
            r5 = requests.get(URL_BASE + PATH5, params={'api_key': API_KEY, 'language': 'ko'})
            director_data = r5.json()
            director_names = director_data.get('also_known_as')
            for director_name in director_names:
                director_a = director_name[0]
                if ord('가') <= ord(director_a) <= ord('힣'):
                    director = Director(id=director_id, name=director_name)
                    director.save()
                    movie_data.directors.add(director_id)
    return



def get_1000(res):
    korea_popular = [282631, 567646, 397567, 313108, 299534, 330457, 346646, 19995, 1255, 124157, 158445, 291549, 420817, 133200, 45035, 518068, 437068, 11658, 396535, 33196, 242452, 299536, 19644, 99861, 496243, 157336, 109445]
    important_fun(korea_popular)
    return


def get_top_rated(res):
    top_rated = []
    PATH = '/movie/top_rated'
    params = {'api_key': API_KEY, 'language': 'ko', 'page': 27}
    r1 = requests.get(URL_BASE + PATH, params=params)
    top_rated_data = r1.json()
    top_rated_movies = top_rated_data['results']
    for top_rated_movie in top_rated_movies:
        top_rated.append(top_rated_movie.get('id'))
    important_fun(top_rated)
    return
