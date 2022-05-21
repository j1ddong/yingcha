from pprint import pprint
from django.shortcuts import render
from pprint import pprint
import requests
from django.http.response import JsonResponse


API_KEY = '44f9d36b9d8fa8e880839899c577f866'
URL_BASE = 'https://api.themoviedb.org/3'
params = {'api_key': API_KEY, 'language': 'ko', 'region': 'KR'}
# PATH = f'/movie/{movie_id}'  # movie.detail
# r1 = requests.get(URL_BASE + PATH, params=params) 
# movie = r1.json()

def index(request):
    return_dict = {}

    #1. tmdb에서 현재 박스오피스 순위 받아오기
    PATH1 = '/movie/now_playing'
    boxoffice_r = requests.get(URL_BASE + PATH1, params=params)
    boxoffice_all = boxoffice_r.json()['results']
    boxoffice_selected = []
    # pprint(boxoffice_all[:10]) # 객체 형태로 넘어옴

    cnt = 0
    for movie in boxoffice_all:
        if cnt == 10 :
            break

        boxoffice_selected.append(
            {
                'id' : movie['id'],
                'title' : movie['title'],
                'poster_path' : movie['poster_path'],
                # 'popularity' : movie['popularity']
            }
        )
        cnt += 1
    # return JsonResponse(boxoffice_selected, safe=False)
    return_dict['boxoffice'] = boxoffice_selected

    
    #2. tmdb에서 천만 영화 받아오기
    korea_popular = [282631, 567646, 397567, 313108, 299534, 330457, 346646, 19995, 1255, 124157, 158445, 291549, 420817, 133200, 45035, 518068, 437068, 11658, 396535, 33196, 242452, 299536, 19644, 99861, 496243, 157336, 109445]
    popular_selected = []
    for popular_id in korea_popular:
        PATH2 = f'/movie/{popular_id}'  # movie.detail
        popular_r = requests.get(URL_BASE + PATH2, params=params) 
        popular_movie = popular_r.json()
        popular_selected.append(
            {
                'id': popular_movie['id'],
                'title': popular_movie['title'],
                'poster_path': popular_movie['poster_path'],

            }
        )
        # pprint(popular_selected)
    return_dict['popular'] = popular_selected
    
    #3. tmdb에서 평균 별점이 높은 영화 받아오기
    PATH3 = '/movie/top_rated'
    top_r = requests.get(URL_BASE + PATH3, params=params)
    top_all = top_r.json()['results']
    top_selected = []
    pprint(top_all[:10]) # 객체 형태로 넘어옴

    cnt2 = 0
    for movie in top_all:
        if cnt2 == 10 :
            break

        top_selected.append(
            {
                'id' : movie['id'],
                'title' : movie['title'],
                'poster_path' : movie['poster_path'],
                # 'popularity' : movie['popularity']
            }
        )
        cnt2 += 1
    return_dict['top'] = top_selected
    
    #4. tmdb에서 장르별 영화 받아오기
    # 1) 장르 리스트에서 id값만 받아온다.
    # 2) 아이디값을 무작위로 선정한다.
    # 3) 영화

